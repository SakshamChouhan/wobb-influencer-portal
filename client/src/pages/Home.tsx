import { useState } from "react";
import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";
import FilterChip from "@/components/FilterChip";
import Pagination from "@/components/Pagination";
import { campaignData } from "@/data/campaignData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Campaigns");
  const [currentPage, setCurrentPage] = useState(1);
  
  const campaignsPerPage = 6;
  
  // Filter campaigns based on search term and active filter
  const filteredCampaigns = campaignData.filter(campaign => {
    const matchesSearch = !searchTerm || 
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.brand.name.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = activeFilter === "All Campaigns" || 
      campaign.payoutType === activeFilter;
      
    return matchesSearch && matchesFilter;
  });
  
  // Get current campaigns
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
  
  // Change page
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
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
              
              <Button 
                variant="outline" 
                className="hidden md:flex py-2 px-4 bg-white border border-gray-300 rounded-lg text-[#6C757D] hover:bg-gray-50 items-center gap-2"
              >
                <i className="ri-filter-3-line"></i>
                <span>Filter</span>
              </Button>
            </div>
          </div>
          
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            <FilterChip 
              label="All Campaigns"
              isActive={activeFilter === "All Campaigns"}
              onClick={() => handleFilterClick("All Campaigns")}
            />
            <FilterChip 
              label="Fixed Pay"
              isActive={activeFilter === "Fixed Pay"}
              onClick={() => handleFilterClick("Fixed Pay")}
            />
            <FilterChip 
              label="Barter"
              isActive={activeFilter === "Barter"}
              onClick={() => handleFilterClick("Barter")}
            />
            <FilterChip 
              label="Refund"
              isActive={activeFilter === "Refund"}
              onClick={() => handleFilterClick("Refund")}
            />
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
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
