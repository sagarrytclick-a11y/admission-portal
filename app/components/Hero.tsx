import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image & Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Darkens image for text contrast */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Find Your Future
        </h1>
        
        <p className="text-lg md:text-xl font-medium text-gray-100 mb-10 max-w-2xl leading-relaxed">
          Discover thousands of colleges and universities. Compare admissions, tuition, and student life side-by-side.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-2xl bg-white rounded-xl p-1.5 shadow-2xl flex items-center">
          <div className="flex items-center flex-grow px-4 gap-3">
            {/* Search Icon */}
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            <input 
              type="text" 
              placeholder="Search by name, state, or major..." 
              className="w-full py-3 text-gray-700 focus:outline-none text-base font-medium"
            />
          </div>

          <button className="bg-[#3182ce] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
            Search Colleges
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;