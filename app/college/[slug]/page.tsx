"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  MapPin,
  Download,
  Phone,
  ChevronRight,
  Calendar,
  DollarSign,
  FileText,
} from "lucide-react";

const CollegeDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1592066575517-58df903152f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    "Info",
    "Courses & Fees",
    "Admissions",
    "Placements",
    "Cutoffs",
    "Scholarships",
    "Rankings",
    "Hostel",
    "Reviews",
    "Gallery",
    "Facilities",
    "Faculty",
    "News",
    "Compare",
  ];

  const newsArticles = [
    {
      title: "Is XAT Tougher Than CAT? Check Full Comparison, Key...",
      date: "10 Nov, 2025",
    },
    {
      title: "Top MBA Colleges in India 2025 - Fees, Ranking, Exa...",
      date: "22 Sept, 2025",
    },
    {
      title: "IIM Ahmedabad MBA Placements 2025: BFSI Offers...",
      date: "20 Sept, 2025",
    },
    {
      title: "Top 10 IIMs in India: Rankings, Courses and Fee...",
      date: "16 Sept, 2025",
    },
  ];

  const highlights = [
    { parameter: "Founded Year", value: "1961" },
    { parameter: "Exams Accepted", value: "UGC NET, GRE, GMAT +2 more" },
    { parameter: "Courses Offered", value: "5 Degrees (19 Courses)" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-[#0060d1] transition-colors">
              Home
            </a>
            <span>›</span>
            <a href="#" className="hover:text-[#0060d1] transition-colors">
              IIMA
            </a>
            <span>›</span>
            <span className="text-[#0060d1] font-medium">College Info</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              {/* College Logo */}
              <div className="w-20 h-20 bg-[#0060d1] rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>

              {/* College Info */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  IIM Ahmedabad (IIMA): Fees, Cut Off, Placements 2025
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-[#0060d1]">
                    <MapPin className="w-4 h-4" />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <BookOpen className="w-4 h-4" />
                    <span>19 Courses</span>
                  </div>
                </div>
                <div className="flex gap-6 mt-3 text-sm text-gray-600">
                  <span>Public/Government</span>
                  <span>|</span>
                  <span>Estd. 1961</span>
                  <span>|</span>
                  <span className="font-semibold text-[#0060d1]">
                    NIRF #1 (Management) 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md">
                <Download className="w-4 h-4" />
                Brochure
              </button>
              <button className="px-6 py-2.5 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md">
                <Phone className="w-4 h-4" />
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all rounded-full ${
                  activeTab === tab.toLowerCase()
                    ? "bg-[#0060d1] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Last Updated */}
            <div className="text-sm text-gray-600">
              • Updated on <span className="font-semibold">26 Dec, 2025</span>{" "}
              by{" "}
              <span className="text-[#0060d1] font-semibold">Shivam Kumar</span>
            </div>

            {/* What's New Section */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What's new?
              </h2>

              <div className="space-y-4">
                <div>
                  <span className="text-red-500 font-bold text-sm">
                    26 Dec, 2025 :
                  </span>
                  <span className="text-gray-700 ml-2">
                    CAT 2025 Result has been announced. Candidates can download
                    their scorecards from{" "}
                    <a href="#" className="text-[#0060d1] hover:underline">
                      iimcat.ac.in
                    </a>
                    . Also, students can use the KollegeApply's{" "}
                    <a
                      href="#"
                      className="text-[#0060d1] hover:underline font-semibold"
                    >
                      CAT College Predictor
                    </a>{" "}
                    to check their admission chances.
                  </span>
                </div>

                <div>
                  <span className="text-red-500 font-bold text-sm">
                    13 Nov, 2025 :
                  </span>
                  <span className="text-gray-700 ml-2">
                    IIM Ahmedabad has introduced India's first two-year Blended
                    MBA Programme in Business Analytics & AI. For the 2026
                    session (Round 1), the last date to apply is December 7, and
                    the admit cards will be released on December 11. The IIMA
                    test is scheduled to take place on December 14, 2025.
                  </span>
                </div>
              </div>

              <button className="text-[#0060d1] font-semibold text-sm mt-4 hover:underline flex items-center gap-1 group">
                Read more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Latest News */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4">
                IIMA Latest news and articles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newsArticles.map((article, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-[#0060d1]"
                  >
                    <h4 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <button className="text-[#0060d1] text-xs font-semibold hover:underline flex items-center gap-1 group">
                        Read more
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About IIMA */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About IIMA
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Indian Institute of Management Ahmedabad, famously known as
                  IIM Ahmedabad or IIMA. It was established in{" "}
                  <span className="font-semibold">1961</span> under the
                  Government of India in Vastrapur, Ahmedabad. IIMA is an
                  institute of National Importance and has been accredited by
                  the European Foundation for Management Development (EFMD) as
                  the first B School in the year of 2003.
                </p>

                <p>
                  IIM Ahmedabad Ranks #1 in India by the NIRF Ranking 2025, #1
                  amongst B-Schools in India by the Businessworld since 2024,
                  #43 for IIMA Executive Education by Financial Times in 2024,
                  #1 for IIMA 1 Year MBA program by Financial Times Times Global
                  MBA Ranking 2025.
                </p>

                <p>
                  IIMA offers an MBA course with 4 different specialisations,
                  such as Food and Agriculture Management, Post Graduate Program
                  in Management for Executive, and Blended Postgraduate Program
                  in Management. Additionally, IIM Ahmedabad also offers an
                  ePost Graduate Diploma in Advanced Business Analytics. IIM
                  Ahmedabad Free Courses include online courses at EDX in
                  Marketing, Finance, HR, Product Development, operations, and
                  Analytics.
                </p>

                <p>
                  Admission to IIM Ahmedabad is based on CAT entrance exam
                  scores. IIM Ahmedabad PGP 2023-25 Batch size is{" "}
                  <span className="font-semibold">404 students</span> and{" "}
                  <span className="font-semibold">47</span> for the FABM
                  program, with an average work experience of 26 months. IIM
                  Ahmedabad Highest Package reached this year is{" "}
                  <span className="font-semibold">INR 1.1 Crore Per Annum</span>
                  , while the average package stood at{" "}
                  <span className="font-semibold">INR 30 LPA</span>. Some of the
                  IIMA Top Recruiters were Boston Consulting Group, TCS, Goldman
                  Sachs, etc.
                </p>
              </div>

              <button className="text-[#0060d1] font-semibold text-sm mt-4 hover:underline flex items-center gap-1 group">
                Read More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* IIMA Highlights */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                IIMA Highlights
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0060d1] text-white">
                      <th className="px-6 py-3 text-left font-semibold rounded-tl-lg">
                        Parameter
                      </th>
                      <th className="px-6 py-3 text-left font-semibold rounded-tr-lg">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {highlights.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {item.parameter}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {item.parameter === "Exams Accepted" ? (
                            <span>
                              <a
                                href="#"
                                className="text-[#0060d1] hover:underline"
                              >
                                UGC NET
                              </a>
                              ,{" "}
                              <a
                                href="#"
                                className="text-[#0060d1] hover:underline"
                              >
                                GRE
                              </a>
                              ,{" "}
                              <a
                                href="#"
                                className="text-[#0060d1] hover:underline"
                              >
                                GMAT
                              </a>{" "}
                              +2 more
                            </span>
                          ) : item.parameter === "Courses Offered" ? (
                            <a
                              href="#"
                              className="text-[#0060d1] hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Get Started Card */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Get Started!
              </h3>
              <p className="text-sm mb-2 text-gray-700">
                What are you waiting for?
              </p>
              <p className="text-xs text-gray-500 mb-6">
                Discover Your Education Journey With Us
              </p>

              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-white border-2 border-[#0060d1] text-[#0060d1] rounded-full font-semibold hover:bg-[#0060d1] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  <Phone className="w-4 h-4" />
                  Enquiry Now
                </button>
                <button className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  <Download className="w-4 h-4" />
                  Brochure
                </button>
                <button className="w-full px-6 py-3 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-[#0060d1]" />
                <h3 className="font-bold text-lg text-gray-900">
                  Contact Information
                </h3>
              </div>

              {/* Map Image */}
              <div className="relative h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Vastrapur,Ahmedabad,Gujarat&zoom=13&size=400x300&key=YOUR_API_KEY"
                  alt="Map"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Map+View";
                  }}
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0060d1] hover:bg-[#0050b3] text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg transition-all">
                  <MapPin className="w-4 h-4" />
                  View On Map
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Address</div>
                  <div className="font-medium text-gray-900">
                    Vastrapur, Ahmedabad, Gujarat - 380015
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Pincode</div>
                  <div className="font-medium text-gray-900">380015</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Phone</div>
                  <div className="font-medium text-[#0060d1]">
                    79XXXXXXX56
                    <span className="text-xs text-gray-400 ml-2">
                      (for general query)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
