import { useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Header() {
  const [activeTab, setActiveTab] = useState("campaigns");
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-[#2196F3]">
            wobb
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/">
                  <a 
                    className={cn(
                      "font-medium", 
                      activeTab === "campaigns" ? "text-[#2196F3]" : "text-[#6C757D] hover:text-[#2196F3]"
                    )}
                    onClick={() => setActiveTab("campaigns")}
                  >
                    Campaigns
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collaborations">
                  <a 
                    className={cn(
                      "font-medium", 
                      activeTab === "collaborations" ? "text-[#2196F3]" : "text-[#6C757D] hover:text-[#2196F3]"
                    )}
                    onClick={() => setActiveTab("collaborations")}
                  >
                    My Collaborations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/payments">
                  <a 
                    className={cn(
                      "font-medium", 
                      activeTab === "payments" ? "text-[#2196F3]" : "text-[#6C757D] hover:text-[#2196F3]"
                    )}
                    onClick={() => setActiveTab("payments")}
                  >
                    Payments
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-[#6C757D] hover:text-[#2196F3]">
            <i className="ri-notification-3-line text-xl"></i>
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#2196F3] text-white flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <nav className="flex justify-around py-2">
          <Link href="/">
            <a 
              className={cn(
                "flex flex-col items-center", 
                activeTab === "campaigns" ? "text-[#2196F3]" : "text-[#6C757D]"
              )}
              onClick={() => setActiveTab("campaigns")}
            >
              <i className="ri-layout-grid-line text-xl"></i>
              <span className="text-xs mt-1">Campaigns</span>
            </a>
          </Link>
          <Link href="/collaborations">
            <a 
              className={cn(
                "flex flex-col items-center", 
                activeTab === "collaborations" ? "text-[#2196F3]" : "text-[#6C757D]"
              )}
              onClick={() => setActiveTab("collaborations")}
            >
              <i className="ri-team-line text-xl"></i>
              <span className="text-xs mt-1">Collaborations</span>
            </a>
          </Link>
          <Link href="/payments">
            <a 
              className={cn(
                "flex flex-col items-center", 
                activeTab === "payments" ? "text-[#2196F3]" : "text-[#6C757D]"
              )}
              onClick={() => setActiveTab("payments")}
            >
              <i className="ri-money-dollar-circle-line text-xl"></i>
              <span className="text-xs mt-1">Payments</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
