import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";
import FilterChip from "@/components/FilterChip";
import Pagination from "@/components/Pagination";
import { campaignData, Campaign } from "@/data/campaignData";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Filter types
type FilterType = "payout" | "category" | "tag";
type FilterValue = string;
type Filters = Record<FilterType, FilterValue | null>;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Advanced filtering
  const [filters, setFilters] = useState<Filters>({
    payout: null,
    category: null,
    tag: null,
  });
  
  // Active filter count for badge
  const activeFilterCount = useMemo(() => 
    Object.values(filters).filter(Boolean).length,
    [filters]
  );
  
  const campaignsPerPage = 6;
  
  // Get unique categories from campaign data
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    campaignData.forEach((campaign) => {
      categorySet.add(campaign.brand.category);
    });
    return ["All Categories", ...Array.from(categorySet)];
  }, []);
  
  // Get unique tags from campaign data
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    campaignData.forEach((campaign) => {
      campaign.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    });
    return ["All Tags", ...Array.from(tagSet)];
  }, []);
  
  // Get unique payout types
  const payoutTypes = useMemo(() => {
    const payoutSet = new Set<string>();
    campaignData.forEach((campaign) => {
      payoutSet.add(campaign.payoutType);
    });
    return ["All Payouts", ...Array.from(payoutSet)];
  }, []);
  
  // Filter campaigns based on search term and active filters
  const filteredCampaigns = useMemo(() => {
    return campaignData.filter(campaign => {
      // Search term matching
      const matchesSearch = !searchTerm || 
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter matching
      const matchesPayout = !filters.payout || 
        filters.payout === "All Payouts" || 
        campaign.payoutType === filters.payout;
      
      const matchesCategory = !filters.category || 
        filters.category === "All Categories" || 
        campaign.brand.category === filters.category;
      
      const matchesTag = !filters.tag || 
        filters.tag === "All Tags" || 
        campaign.tags.includes(filters.tag);
      
      return matchesSearch && matchesPayout && matchesCategory && matchesTag;
    });
  }, [searchTerm, filters]);
  
  // Reset to first page when filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);
  
  // Get current campaigns for pagination
  const currentCampaigns = useMemo(() => {
    const indexOfLastCampaign = currentPage * campaignsPerPage;
    const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
    return filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
  }, [filteredCampaigns, currentPage, campaignsPerPage]);
  
  // Change page
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Handle filter click 
  const handleFilterChange = (type: FilterType, value: FilterValue | null) => {
    setFilters(prev => ({
      ...prev,
      [type]: value === prev[type] ? null : value
    }));
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      payout: null,
      category: null,
      tag: null,
    });
    setSearchTerm("");
  };
  
  // Prepare pagination
  const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage);
  
  return (
    <div className="bg-[#F5F7FA] min-h-screen font-inter">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Active Campaigns</h1>
              <p className="text-[#6C757D] mt-1">Find the perfect brand collaborations for your profile</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search campaigns"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6C757D] h-4 w-4" />
              </div>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex py-2 px-4 bg-white border border-gray-300 rounded-lg text-[#6C757D] hover:bg-gray-50 items-center gap-2 relative"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="hidden md:inline">Filters</span>
                    {activeFilterCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-[#2196F3] text-white text-xs h-5 w-5 flex items-center justify-center p-0 rounded-full">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Filter Campaigns</h4>
                      {activeFilterCount > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={clearAllFilters}
                          className="h-8 px-2 text-[#2196F3]"
                        >
                          Clear all
                        </Button>
                      )}
                    </div>
                    
                    <Tabs defaultValue="payout">
                      <TabsList className="grid grid-cols-3">
                        <TabsTrigger value="payout">Payout</TabsTrigger>
                        <TabsTrigger value="category">Category</TabsTrigger>
                        <TabsTrigger value="tag">Tags</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="payout" className="mt-2">
                        <div className="flex flex-wrap gap-2">
                          {payoutTypes.map((payout) => (
                            <FilterChip
                              key={payout}
                              label={payout}
                              isActive={filters.payout === payout}
                              onClick={() => handleFilterChange('payout', payout)}
                            />
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="category" className="mt-2">
                        <div className="flex flex-wrap gap-2">
                          {categories.map((category) => (
                            <FilterChip
                              key={category}
                              label={category}
                              isActive={filters.category === category}
                              onClick={() => handleFilterChange('category', category)}
                            />
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="tag" className="mt-2">
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <FilterChip
                              key={tag}
                              label={tag}
                              isActive={filters.tag === tag}
                              onClick={() => handleFilterChange('tag', tag)}
                            />
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Active filters display */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-gray-500">Active filters:</span>
              {filters.payout && filters.payout !== "All Payouts" && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                  {filters.payout}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => handleFilterChange('payout', null)} 
                  />
                </Badge>
              )}
              {filters.category && filters.category !== "All Categories" && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                  {filters.category}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => handleFilterChange('category', null)} 
                  />
                </Badge>
              )}
              {filters.tag && filters.tag !== "All Tags" && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                  #{filters.tag}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => handleFilterChange('tag', null)} 
                  />
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs">
                  Search: {searchTerm}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => setSearchTerm('')} 
                  />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCampaigns.length > 0 ? (
            currentCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-8 text-center">
              <h3 className="text-xl font-medium text-gray-700">No campaigns found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search criteria</p>
              <Button onClick={clearAllFilters} className="mt-4 bg-[#2196F3]">
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </main>
    </div>
  );
}
