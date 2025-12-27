"use client"

import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = [
    {
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      title: 'Explore Top Colleges, Exams & Results',
      subtitle: 'Empowering Education'
    },
    {
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg',
      title: 'Build Your Academic Future',
      subtitle: 'Quality Education for All'
    },
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg',
      title: 'Discover Learning Excellence',
      subtitle: 'Your Journey Starts Here'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <GraduationCap className="w-6 h-6" />, number: '6000+', label: 'Institutions' },
    { icon: <BookOpen className="w-6 h-6" />, number: '200+', label: 'Exams' },
    { icon: <Award className="w-6 h-6" />, number: '200+', label: 'Online Courses' },
    { icon: <Users className="w-6 h-6" />, number: '200+', label: 'Courses' }
  ];

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
              animation: index === currentSlide ? 'kenburns 5s ease-out forwards' : 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Title with animation */}
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-medium drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-500 p-2 rounded-full">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Colleges, Courses, Exams, Questions and Articles"
                className="w-full py-4 text-gray-700 focus:outline-none text-base"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;