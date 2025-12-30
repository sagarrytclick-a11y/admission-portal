"use client"

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const ExamPortal = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [streamSearch, setStreamSearch] = useState('');
  const [levelSearch, setLevelSearch] = useState('');
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [streamExpanded, setStreamExpanded] = useState(true);
  const [levelExpanded, setLevelExpanded] = useState(true);

  const exams = [
    {
      id: 1,
      name: 'JEE Main',
      fullName: 'Joint Entrance Examination Main',
      logo: '🟠',
      type: 'Online',
      level: 'UG',
      organization: 'National Testing Agency (NTA)',
      stream: 'Engineering',
      category: 'Entrance',
      results: '12 Feb, 2026 to 12 Feb, 2026',
      examDate: '21 Jan, 2026 to 30 Jan, 2026',
      registration: '31 Oct, 2025 to 27 Nov, 2025'
    },
    {
      id: 2,
      name: 'GATE',
      fullName: 'Graduate Aptitude Test in Engineering',
      logo: '🔵',
      type: 'Online',
      level: 'PG',
      organization: 'IITs and IISc',
      stream: 'Engineering',
      category: 'Entrance',
      results: '10 Mar, 2026',
      examDate: '16 Feb, 2025',
      registration: '7 Feb, 2026 to 15 Feb, 2026'
    },
    {
      id: 3,
      name: 'CAT',
      fullName: 'Common Admission Test',
      logo: '🟢',
      type: 'Online',
      level: 'PG',
      organization: 'Indian Institutes of Management (IIMs)',
      stream: 'Management',
      category: 'Entrance',
      results: '19 Dec, 2025',
      examDate: '30 Nov, 2025',
      registration: '6 Aug, 2025 to 20 Sept, 2025'
    },
    {
      id: 4,
      name: 'BITSAT',
      fullName: 'Birla Institute of Technology and Science',
      logo: '🔴',
      type: 'Online',
      level: 'UG',
      organization: 'Birla Institute of Technology and Science',
      stream: 'Engineering',
      category: 'Entrance',
      results: 'TBA',
      examDate: 'May-June 2026',
      registration: 'March 2026'
    },
    {
      id: 5,
      name: 'NEET UG',
      fullName: 'National Eligibility cum Entrance Test',
      logo: '🟣',
      type: 'Online',
      level: 'UG',
      organization: 'National Testing Agency (NTA)',
      stream: 'Medical',
      category: 'Entrance',
      results: 'June 2026',
      examDate: 'May 2026',
      registration: 'Feb-March 2026'
    },
    {
      id: 6,
      name: 'CLAT',
      fullName: 'Common Law Admission Test',
      logo: '🟡',
      type: 'Online',
      level: 'UG',
      organization: 'Consortium of NLUs',
      stream: 'Law',
      category: 'Entrance',
      results: 'January 2026',
      examDate: 'December 2025',
      registration: 'Aug-Nov 2025'
    },
    {
      id: 7,
      name: 'NIFT',
      fullName: 'National Institute of Fashion Technology',
      logo: '🟤',
      type: 'Online',
      level: 'UG',
      organization: 'National Institute of Fashion Technology',
      stream: 'Design',
      category: 'Entrance',
      results: 'March 2026',
      examDate: 'January 2026',
      registration: 'Oct-Dec 2025'
    },
    {
      id: 8,
      name: 'CUET',
      fullName: 'Common University Entrance Test',
      logo: '⚫',
      type: 'Online',
      level: 'UG',
      organization: 'National Testing Agency (NTA)',
      stream: 'Arts',
      category: 'Entrance',
      results: 'June 2026',
      examDate: 'May 2026',
      registration: 'Feb-April 2026'
    }
  ];

  const categories = {
    'Entrance': 206,
    'Board': 42,
    'Sarkari': 8,
    'Study Abroad': 7
  };

  const streams = {
    'Engineering': 45,
    'Medical': 19,
    'Law': 18,
    'Management': 16,
    'Design': 10,
    'Science': 6,
    'Arts': 6
  };

  const levels = {
    'UG': 158,
    'PG': 43,
    '12th': 14,
    '10th': 4
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedStreams([]);
    setSelectedLevels([]);
    setStreamSearch('');
    setLevelSearch('');
  };

  const filteredExams = useMemo(() => {
    return exams.filter(exam => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(exam.category);
      const streamMatch = selectedStreams.length === 0 || selectedStreams.includes(exam.stream);
      const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(exam.level);
      return categoryMatch && streamMatch && levelMatch;
    });
  }, [selectedCategories, selectedStreams, selectedLevels]);

  const filteredStreams = Object.entries(streams).filter(([stream]) =>
    stream.toLowerCase().includes(streamSearch.toLowerCase())
  );

  const filteredLevels = Object.entries(levels).filter(([level]) =>
    level.toLowerCase().includes(levelSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="text-sm text-gray-600 mb-4">Home &gt; Exams</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Reserve Bank of India</div>
            <h1 className="text-2xl font-bold text-gray-800">RBI Sachet Portal</h1>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-blue-50 px-6 py-6">
        <h2 className="text-2xl font-bold text-gray-800">Top Exams - Rankings, Courses & Admission 2026</h2>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 px-6 py-6">
        {/* Sidebar Filters */}
        <div className="w-80 bg-white rounded-lg p-6 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Filter By</h3>
            <button onClick={handleReset} className="text-blue-500 text-sm hover:underline">
              Reset
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <button
              onClick={() => setCategoryExpanded(!categoryExpanded)}
              className="flex justify-between items-center w-full mb-3"
            >
              <span className="font-semibold">Category of Exams</span>
              {categoryExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {categoryExpanded && (
              <div className="space-y-2">
                {Object.entries(categories).map(([category, count]) => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(selectedCategories.filter(c => c !== category));
                        }
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">{category} ({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Streams Filter */}
          <div className="mb-6 border-t pt-4">
            <button
              onClick={() => setStreamExpanded(!streamExpanded)}
              className="flex justify-between items-center w-full mb-3"
            >
              <span className="font-semibold">Streams of Exams</span>
              {streamExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {streamExpanded && (
              <>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search By Streams"
                    value={streamSearch}
                    onChange={(e) => setStreamSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {filteredStreams.map(([stream, count]) => (
                    <label key={stream} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStreams.includes(stream)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStreams([...selectedStreams, stream]);
                          } else {
                            setSelectedStreams(selectedStreams.filter(s => s !== stream));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{stream} ({count})</span>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Level Filter */}
          <div className="border-t pt-4">
            <button
              onClick={() => setLevelExpanded(!levelExpanded)}
              className="flex justify-between items-center w-full mb-3"
            >
              <span className="font-semibold">Level of Exams</span>
              {levelExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {levelExpanded && (
              <>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search By Degree"
                    value={levelSearch}
                    onChange={(e) => setLevelSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <div className="space-y-2">
                  {filteredLevels.map(([level, count]) => (
                    <label key={level} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLevels([...selectedLevels, level]);
                          } else {
                            setSelectedLevels(selectedLevels.filter(l => l !== level));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{level} ({count})</span>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Exam List */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
              Showing <span className="text-blue-500 font-semibold">{filteredExams.length}</span> Exams
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-600">Active Filters:</span>
              <span className="text-red-500 text-sm">All Exams</span>
              <select className="border rounded px-3 py-1 text-sm">
                <option>Recommended</option>
                <option>Latest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredExams.map((exam) => (
              <div key={exam.id} className="bg-white rounded-lg p-6 border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-2xl">
                      {exam.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {exam.name} - ({exam.fullName})
                      </h3>
                      <div className="flex gap-3 items-center mb-4 flex-wrap">
                        <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">{exam.type}</span>
                        <span className="text-sm text-gray-600">| {exam.level}</span>
                        <span className="text-blue-500 text-sm">| {exam.organization}</span>
                        <span className="text-sm text-gray-600">| {exam.stream}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-gray-600 mb-1">Results</div>
                          <div className="font-semibold">{exam.results}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Exam Date</div>
                          <div className="font-semibold text-red-500">{exam.examDate}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Registration</div>
                          <div className="font-semibold">{exam.registration}</div>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-wrap text-xs text-blue-500">
                        <a href="#" className="hover:underline">Admit Card</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Analysis</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Answer Key</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Application Process</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Books</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Centers</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">College Predictor</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Counselling</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 whitespace-nowrap">
                      Apply Now →
                    </button>
                    <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 whitespace-nowrap">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPortal;