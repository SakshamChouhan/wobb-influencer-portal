import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Calculate visible pages around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(startPage + 2, totalPages - 1);
      
      // Adjust startPage if endPage is maxed out
      if (endPage === totalPages - 1) {
        startPage = Math.max(2, endPage - 2);
      }
      
      // Add ellipsis if there's a gap after page 1
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
      
      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if there's a gap before last page
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-[#6C757D] hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="ri-arrow-left-s-line"></i>
        </Button>
        
        {getPageNumbers().map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <span key={`ellipsis-${index}`} className="w-9 h-9 flex items-center justify-center text-[#6C757D]">
                ...
              </span>
            );
          }
          
          return (
            <Button
              key={`page-${page}`}
              variant={currentPage === page ? "default" : "outline"}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center",
                currentPage === page 
                  ? "bg-[#2196F3] text-white" 
                  : "border border-gray-300 text-[#6C757D] hover:bg-gray-50"
              )}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </Button>
          );
        })}
        
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-[#6C757D] hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="ri-arrow-right-s-line"></i>
        </Button>
      </div>
    </div>
  );
}
