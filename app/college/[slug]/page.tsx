"use client"

import Navbar from '@/app/components/Navbar';
import { GraduationCap, MapPin, DollarSign, Users, TrendingUp, Calendar, FileText, Video } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const COLLEGES = [
  {
    slug: "iit-bombay",
    name: "IIT Bombay",
    established: "1958",
    location: "Mumbai, Maharashtra",
    type: "Public",
    duration: "4 Year",
    tuition: "₹2,25,000/yr",
    acceptance: "0.8%",
    undergrad: "5,200",
    entranceExam: "JEE Adv: 99.9%ile",
    topRated: true,
    logo: "🏛️",
    avgGPA: "9.2",
    gradRate: "98%",
    ratio: "8:1",
    description: "IIT Bombay is a premier research university in Mumbai, Maharashtra. The campus occupies 550 acres in Powai, one of the most prestigious engineering institutions in India, known for its academic strength, research excellence, and proximity to major tech hubs.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    admissions: {
      earlyDeadline: "May 15, 2024",
      regularDeadline: "June 30, 2024",
      applicationFee: "₹2,500",
      jeeRange: "Rank 1-500"
    },
    topMajors: [
      { name: "Computer Science", school: "School of Engineering" },
      { name: "Electrical Engineering", school: "School of Engineering" },
      { name: "Mechanical Engineering", school: "School of Engineering" }
    ]
  },
  {
    slug: "iit-delhi",
    name: "IIT Delhi",
    established: "1961",
    location: "New Delhi, Delhi",
    type: "Public",
    duration: "4 Year",
    tuition: "₹2,25,000/yr",
    acceptance: "0.9%",
    undergrad: "4,800",
    entranceExam: "JEE Adv: 99.8%ile",
    topRated: true,
    logo: "🎓",
    avgGPA: "9.1",
    gradRate: "97%",
    ratio: "9:1",
    description: "IIT Delhi is one of India's leading engineering and technology institutions located in the capital city. Known for cutting-edge research, innovation, and producing industry leaders across various sectors.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
    admissions: {
      earlyDeadline: "May 10, 2024",
      regularDeadline: "June 25, 2024",
      applicationFee: "₹2,500",
      jeeRange: "Rank 1-600"
    },
    topMajors: [
      { name: "Computer Science", school: "School of Engineering" },
      { name: "Electronics Engineering", school: "School of Engineering" },
      { name: "Civil Engineering", school: "School of Engineering" }
    ]
  },
  {
    slug: "bits-pilani",
    name: "BITS Pilani",
    established: "1964",
    location: "Pilani, Rajasthan",
    type: "Private",
    duration: "4 Year",
    tuition: "₹4,50,000/yr",
    acceptance: "2.5%",
    undergrad: "4,200",
    entranceExam: "BITSAT: 320+",
    topRated: false,
    logo: "⚙️",
    avgGPA: "8.8",
    gradRate: "95%",
    ratio: "10:1",
    description: "BITS Pilani is a deemed university offering engineering and science programs. Known for its flexible curriculum, entrepreneurial culture, and strong industry connections.",
    image: "https://images.unsplash.com/photo-1592066575517-58df903152f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
    admissions: {
      earlyDeadline: "April 20, 2024",
      regularDeadline: "June 10, 2024",
      applicationFee: "₹3,400",
      jeeRange: "BITSAT 300+"
    },
    topMajors: [
      { name: "Computer Science", school: "School of Engineering" },
      { name: "Electronics & Instrumentation", school: "School of Engineering" },
      { name: "Chemical Engineering", school: "School of Engineering" }
    ]
  }
];

const SIMILAR_COLLEGES = [
  { name: "IIT Madras", location: "Chennai, TN", logo: "I", slug: "iit-madras" },
  { name: "IIT Kanpur", location: "Kanpur, UP", logo: "I", slug: "iit-kanpur" },
  { name: "NIT Trichy", location: "Tiruchirappalli, TN", logo: "N", slug: "nit-trichy" }
];

// Function to get similar colleges excluding the current one
const getSimilarColleges = (currentSlug: string) => {
  return SIMILAR_COLLEGES.filter(college => college.slug !== currentSlug);
};

export default function CollegeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [college, setCollege] = useState(COLLEGES[0]); // Default to first college
  const [similarColleges, setSimilarColleges] = useState(SIMILAR_COLLEGES);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      // Find the college by slug
      const foundCollege = COLLEGES.find(c => c.slug === slug);
      
      if (foundCollege) {
        setCollege(foundCollege);
        // Get similar colleges (excluding current one)
        setSimilarColleges(getSimilarColleges(slug));
      } else {
        // Handle case where slug is not found
        console.error(`College with slug "${slug}" not found`);
        // Optionally redirect to 404 or show error
      }
      
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading college details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${college.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm">ESTABLISHED {college.established}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{college.name}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {college.location}
            </span>
            <span>•</span>
            <span>{college.type}</span>
            <span>•</span>
            <span>{college.duration}</span>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition">
              Apply Now
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-medium transition border border-white/30">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 text-sm">
            {['Overview', 'Academics', 'Admissions', 'Costs & Aid', 'Campus Life'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 border-b-2 transition ${
                  activeTab === tab.toLowerCase()
                    ? 'border-blue-600 text-blue-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* At a Glance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">At a Glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard 
                  icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
                  label="Acceptance"
                  value={college.acceptance}
                />
                <StatCard 
                  icon={<GraduationCap className="w-5 h-5 text-blue-600" />}
                  label="Avg CGPA"
                  value={college.avgGPA}
                />
                <StatCard 
                  icon={<Users className="w-5 h-5 text-blue-600" />}
                  label="Grad Rate"
                  value={college.gradRate}
                />
                <StatCard 
                  icon={<Users className="w-5 h-5 text-blue-600" />}
                  label="Ratio"
                  value={college.ratio}
                />
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed">
                {college.description}
              </p>
            </div>

            {/* Academic Programs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Academic Programs</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View All Majors
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex border-b pb-2 text-sm font-medium text-gray-600">
                  <div className="flex-1">Top Majors</div>
                  <div className="w-32 text-right">Minors</div>
                  <div className="w-24 text-right">Online</div>
                </div>

                {college.topMajors.map((major, idx) => (
                  <div key={idx} className="flex items-center py-3 hover:bg-gray-50 rounded-lg px-2 transition">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{major.name}</div>
                        <div className="text-sm text-gray-500">{major.school}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Similar Colleges */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-lg mb-4">Similar Colleges</h3>
              <div className="space-y-3">
                {similarColleges.map((sim, idx) => (
                  <a 
                    key={idx} 
                    href={`/colleges/${sim.slug}`}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer no-underline text-inherit hover:text-inherit"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {sim.logo}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{sim.name}</div>
                      <div className="text-xs text-gray-500">{sim.location}</div>
                    </div>
                    <span className="text-gray-400 hover:text-gray-600">→</span>
                  </a>
                ))}
              </div>
              <button className="w-full mt-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                Compare All
              </button>
            </div>

            {/* Admissions Info */}
            <div className="bg-blue-600 text-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Fall 2024 Admissions</h3>
              <div className="space-y-4">
                <AdmissionItem 
                  icon={<Calendar className="w-5 h-5" />}
                  label={college.admissions.earlyDeadline}
                  sublabel="Early Decision Deadline"
                />
                <AdmissionItem 
                  icon={<Calendar className="w-5 h-5" />}
                  label={college.admissions.regularDeadline}
                  sublabel="Regular Decision Deadline"
                />
                <AdmissionItem 
                  icon={<DollarSign className="w-5 h-5" />}
                  label={college.admissions.applicationFee}
                  sublabel="Application Fee"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-sm font-medium mb-2">
                  {college.entranceExam.split(':')[0]} Range
                </div>
                <div className="text-xs text-blue-100 mb-2">{college.admissions.jeeRange}</div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function AdmissionItem({ icon, label, sublabel }: { icon: React.ReactNode; label: string; sublabel: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-sm text-blue-100">{sublabel}</div>
      </div>
    </div>
  );
}