import React, { useState } from "react";
import { FiChevronDown, FiMapPin, FiGrid } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const cities = [
  "All Cities",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const Header = ({ selectedCity, setSelectedCity }) => {
  
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="w-full bg-[#1f1f1f] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="h-20 flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            
            {/* Logo */}
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <HiOutlineBuildingOffice2 className="text-white text-2xl" />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-white font-bold text-lg sm:text-xl leading-none">
                UPYOG Platform
              </h1>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Property Tax Analytics
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-gray-300 font-medium">
                Tenant
              </span>

              {/* Dropdown Button */}
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="min-w-[150px] sm:min-w-[190px] bg-[#2b2b2b] border border-white/10 hover:border-emerald-500/40 transition-all duration-200 px-4 py-3 rounded-xl flex items-center justify-between text-white shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-emerald-400" />
                  <span className="font-medium text-sm sm:text-base">
                    {selectedCity}
                  </span>
                </div>

                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {openDropdown && (
              <div className="absolute right-0 mt-3 w-full bg-[#262626] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                
                <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
                  {cities.map((city, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCity(city);
                        setOpenDropdown(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-sm sm:text-base transition-all duration-200 flex items-center gap-3
                      ${
                        selectedCity === city
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <FiGrid className="text-sm" />
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;