import { Calendar, ExternalLink, Info } from 'lucide-react';

type Exam = {
  id: number;
  logo: string;
  name: string;
  title: string;
  mode: "Online" | "Offline";
  date: string;
};

const exams: Exam[] = [
    {
      id: 1,
      logo: "IBS®",
      name: "IBSAT",
      title: "IBSAT",
      mode: "Offline",
      date: "27 Dec, 2025",
    },
    {
      id: 2,
      logo: "SYMBIOSIS slat",
      name: "SLAT",
      title: "SLAT",
      mode: "Online",
      date: "28 Dec, 2025",
    },
    {
      id: 3,
      logo: "XAT",
      name: "XAT",
      title: "MBA/PGDM",
      mode: "Online",
      date: "4 Jan, 2026",
    },
    {
      id: 4,
      logo: "WUD",
      name: "WUD Aptitude Test",
      title: "",
      mode: "Online",
      date: "4 Jan, 2026",
    },
  
    // ➕ New 4 Cards
  
    {
      id: 5,
      logo: "CAT",
      name: "CAT",
      title: "MBA",
      mode: "Online",
      date: "30 Nov, 2025",
    },
    {
      id: 6,
      logo: "NMAT",
      name: "NMAT by GMAC",
      title: "MBA/PGDM",
      mode: "Online",
      date: "15 Oct, 2025",
    },
    {
      id: 7,
      logo: "CMAT",
      name: "CMAT",
      title: "MBA",
      mode: "Online",
      date: "20 Jan, 2026",
    },
    {
      id: 8,
      logo: "MAT",
      name: "MAT",
      title: "MBA/PGDM",
      mode: "Online",
      date: "10 Feb, 2026",
    },
  ];
  

export default function UpcomingExams() {
  return (
    <section className="max-w-7xl bg-[#f8f9fa] mx-auto px-6 py-10  min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Exams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-blue-400 hover:shadow-md">
      
      <div className="p-5">
        {/* Top Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-12 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 text-[10px] font-black text-gray-700 uppercase tracking-tighter text-center leading-tight">
            {exam.logo}
          </div>
          <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold ${
            exam.mode === "Online" 
              ? "bg-green-50 text-green-600" 
              : "bg-orange-50 text-orange-600"
          }`}>
            {exam.mode}
          </span>
        </div>

        {/* Info Section */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {exam.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-medium italic">
            {exam.title || "Entrance Exam"}
          </p>
        </div>

        {/* Simplified Date */}
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs font-semibold">{exam.date}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 mt-2 flex gap-3">
        <button className="flex-1 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors py-2">
          Details
        </button>
        <button className="flex-[1.5] bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-200">
          Apply Now
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}