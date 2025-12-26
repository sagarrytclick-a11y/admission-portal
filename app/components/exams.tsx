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
    <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      <div className="p-6">
        {/* Top */}
        <div className="flex items-center justify-between mb-5">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm">
            {exam.logo}
          </div>

          <span
            className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
              exam.mode === "Online"
                ? "bg-blue-50 text-blue-600 border border-blue-200"
                : "bg-purple-50 text-purple-600 border border-purple-200"
            }`}
          >
            {exam.mode}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl text-gray-800 mb-1">{exam.name}</h3>
        {exam.title && (
          <p className="text-sm text-gray-500 mb-4">{exam.title}</p>
        )}

        {/* Date */}
        <div className="mt-6 bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-[#0060d1]" />
            <p className="text-xs text-gray-600 font-medium">Exam Date</p>
          </div>
          <p className="text-[#0060d1] font-bold text-sm ml-6">{exam.date}</p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="grid grid-cols-2  gap-0 border-t border-blue-100">
        <button className="bg-white text-[#0060d1] py-3.5 text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 border-r border-blue-100">
          <Info className="w-4 h-6" />
          View
        </button>
        <button className="bg-[#0060d1] text-white py-3.5 text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-6" />
          Apply
        </button>
      </div>
    </div>
  );
}