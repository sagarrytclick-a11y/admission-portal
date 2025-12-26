import Link from "next/link";
import React from "react";

const articles = [
  { title: "How to write a killer essay", time: "5 min read" },
  { title: "Understanding FAFSA & Aid", time: "8 min read" },
  { title: "Campus visit checklist", time: "3 min read" },
];

// Mock data based on the image
const COLLEGES = [
  {
    slug: "iit-bombay",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    tuition: "₹2,25,000/yr",
    acceptance: "0.8%",
    undergrad: "5,200",
    sat: "JEE Adv: 99.9%ile",
    topRated: true,
    logo: "🏛️",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    slug: "iit-delhi",
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    tuition: "₹2,25,000/yr",
    acceptance: "0.9%",
    undergrad: "4,800",
    sat: "JEE Adv: 99.8%ile",
    topRated: true,
    logo: "🎓",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    slug: "bits-pilani",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    tuition: "₹4,50,000/yr",
    acceptance: "2.5%",
    undergrad: "4,200",
    sat: "BITSAT: 320+",
    topRated: false,
    logo: "⚙️",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
  },
  {
    slug: "delhi-university",
    name: "Delhi University",
    location: "New Delhi, Delhi",
    tuition: "₹25,000/yr",
    acceptance: "15%",
    undergrad: "1,32,000",
    sat: "CUET: 650+",
    topRated: false,
    logo: "📚",
    image:
      "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",
  },
  {
    slug: "iim-ahmedabad",
    name: "IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    tuition: "₹33,00,000/2yr",
    acceptance: "0.5%",
    undergrad: "395",
    sat: "CAT: 99.5%ile",
    topRated: true,
    logo: "💼",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/500px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg",
  },
  {
    slug: "nit-trichy",
    name: "NIT Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    tuition: "₹1,50,000/yr",
    acceptance: "3%",
    undergrad: "3,600",
    sat: "JEE Main: 98%ile",
    topRated: false,
    logo: "🔧",
    image:
      "https://media.istockphoto.com/id/185233958/photo/community-college-building.jpg?s=612x612&w=0&k=20&c=kjD6v3eQAJFZTNS_kJCCW40nfsTjTRQHIuvn3-sdklI=",
  },
];

const ExploreColleges: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header and Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Colleges
            </h2>
            <p className="text-gray-500">
              Refine your search to find the perfect match.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Public vs Private",
              "SAT Score",
              "Tuition < $20k",
              "Acceptance Rate",
            ].map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                {filter} <span className="text-[10px]">▼</span>
              </button>
            ))}
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              All Filters <span className="rotate-90">≡</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* College Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {COLLEGES.map((college, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* College Image Header */}
                <div className="h-40 relative">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
                    <span className="text-blue-500 text-xs">💙</span>
                  </div>
                  {college.topRated && (
                    <div className="absolute bottom-3 left-3 bg-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-gray-800 shadow-sm">
                      Top Rated
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">
                        {college.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        📍 {college.location}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-xl">
                      {college.logo}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-dashed border-gray-200 pt-4 mb-6">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        Tuition
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {college.tuition}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        Acceptance
                      </p>
                      <p className="text-sm font-bold text-green-600">
                        {college.acceptance}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        Undergrad
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {college.undergrad}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        SAT Range
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {college.sat}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      Compare
                    </label>

                    <button className="text-xs font-bold text-blue-600 hover:underline">
                      <Link
                        href={`/college/${college.slug}`}
                        className="text-xs font-bold text-blue-600 hover:underline"
                      >
                        View Profile
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="flex flex-col gap-6">
            {/* Admission Tips */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-6">
                💡 <span className="text-sm">Admission Tips</span>
              </h3>
              <div className="space-y-6">
                {articles.map((tip, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative">
                      {/* Smaller thumbnails for tips */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {tip.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase">
                        {tip.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-xs font-bold text-blue-600 mt-8 hover:underline">
                View All Articles
              </button>
            </div>

            {/* College of the Month */}
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-4">
                College of the Month
              </h3>
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs">
                  D
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Duke University
                  </h4>
                  <p className="text-[10px] text-gray-500">Durham, NC</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
                Known for its beautiful Gothic campus and top-tier research
                programs, Duke offers a unique blend...
              </p>
              <button className="w-full py-2.5 bg-white text-blue-600 text-xs font-bold rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                Explore Duke
              </button>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 hover:shadow-md transition-shadow">
            Load More Colleges
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreColleges;
