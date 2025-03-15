import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Campaign } from "@/data/campaignData";

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const getPayoutIcon = (type: string) => {
    switch (type) {
      case "Fixed Pay":
        return "ri-exchange-funds-line";
      case "Barter":
        return "ri-gift-line";
      case "Refund":
        return "ri-refund-2-line";
      default:
        return "ri-exchange-funds-line";
    }
  };
  
  const getPayoutLabel = (type: string) => {
    switch (type) {
      case "Fixed Pay":
        return "Pays up to";
      case "Barter":
        return "Products worth";
      case "Refund":
        return "Product refund";
      default:
        return "Pays up to";
    }
  };
  
  // Calculate hiring progress percentage
  const hiredPercentage = (campaign.hiredCount / campaign.totalSlots) * 100;
  
  return (
    <div className="campaign-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={campaign.image} 
          alt={`${campaign.brand.name} campaign`} 
          className="w-full h-48 object-cover"
        />
        
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <span className="bg-white/90 backdrop-blur-sm text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-medium">
            <i className={`${getPayoutIcon(campaign.payoutType)} mr-1`}></i>
            {campaign.payoutType}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <button 
            className={cn(
              "bg-white/90 backdrop-blur-sm h-8 w-8 rounded-full flex items-center justify-center",
              isFavorite ? "text-[#FF4081]" : "text-[#6C757D] hover:text-[#2196F3]"
            )}
            onClick={handleFavoriteClick}
          >
            <i className={isFavorite ? "ri-heart-fill" : "ri-heart-line"}></i>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src={campaign.brand.logo} 
              alt={campaign.brand.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{campaign.brand.name}</h3>
            <span className="text-xs text-[#6C757D]">{campaign.brand.category}</span>
          </div>
        </div>
        
        <h2 className="text-lg font-bold mb-2">{campaign.title}</h2>
        <p className="text-sm text-[#6C757D] mb-4 line-clamp-2">{campaign.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {campaign.tags.map((tag, index) => {
            // Alternate colors for tags
            const colorClasses = [
              "bg-[#FF4081]/10 text-[#FF4081]", // Secondary
              "bg-[#2196F3]/10 text-[#2196F3]", // Primary
              "bg-[#00BFA5]/10 text-[#00BFA5]"  // Accent
            ];
            
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <span 
                key={index} 
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${colorClass}`}
              >
                #{tag}
              </span>
            );
          })}
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">Hiring Status</span>
            <span className="text-[#6C757D]">{campaign.hiredCount}/{campaign.totalSlots} hired</span>
          </div>
          <Progress value={hiredPercentage} className="h-2 bg-gray-200" indicatorClassName="bg-[#00BFA5]" />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-[#6C757D]">{getPayoutLabel(campaign.payoutType)}</span>
            <p className="font-bold text-lg">₹{campaign.payoutAmount.toLocaleString()}</p>
          </div>
          <Button className="py-2 px-4 bg-[#2196F3] text-white rounded-lg hover:bg-[#2196F3]/90 font-medium">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
