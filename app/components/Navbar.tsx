"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "All Streams",
      hasDropdown: true,
      items: ["Engineering", "Medical", "Management", "Arts", "Science"],
    },
    {
      label: "All Courses",
      hasDropdown: true,
      items: ["Undergraduate", "Postgraduate", "Diploma", "Certification"],
    },
    {
      label: "Engineering",
      hasDropdown: true,
      items: ["Computer Science", "Mechanical", "Electrical", "Civil"],
    },
    {
      label: "Management",
      hasDropdown: true,
      items: ["MBA", "BBA", "Finance", "Marketing"],
    },
    {
      label: "Medical",
      hasDropdown: true,
      items: ["MBBS", "BDS", "Nursing", "Pharmacy"],
    },
    {
      label: "Design",
      hasDropdown: true,
      items: ["Fashion", "Interior", "Graphic", "Product"],
    },
    {
      label: "Explore",
      hasDropdown: true,
      items: ["Colleges", "Exams", "Results", "Admissions"],
    },
    {
      label: "Online",
      hasDropdown: false,
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg transform group-hover:scale-110 transition-transform shadow-md">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent tracking-tight">
                College Campus
              </span>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href={"/login"}>
                <button className="px-6 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                  Login
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md flex items-center gap-2">
                  Sign Up
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-1 py-3">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all group">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeIn">
                    {item.items?.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fadeIn">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button className="w-full px-6 py-3 text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  Login
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-md">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
