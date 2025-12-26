"use client"

import React, { useState } from 'react';
import { FileText, Building2, GraduationCap, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';

interface Program {
  id: string;
  label: string;
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  links: { text: string; items?: string[] }[];
  linkText: string;
}

const programs: Program[] = [
  { id: 'all', label: 'All' },
  { id: 'be-btech', label: 'B.E. / B.Tech' },
  { id: 'mba-pgdm', label: 'MBA/PGDM' },
  { id: 'mbbs', label: 'MBBS' },
  { id: 'bca', label: 'BCA' },
  { id: 'bcom', label: 'B.Com' },
  { id: 'bsc', label: 'B.Sc.' },
  { id: 'ba', label: 'B.A.' },
  { id: 'bba', label: 'BBA' },
  { id: 'me-mtech', label: 'M.E./M.Tech' },
  { id: 'mca', label: 'MCA' },
  { id: 'bed', label: 'B.Ed' },
  { id: 'llb', label: 'LL.B.' },
  { id: 'msc', label: 'M.Sc.' },
  { id: 'mcom', label: 'M.Com' },
];

const Card: React.FC<CardProps> = ({ icon, title, description, tags, links, linkText }) => (
  <div className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full border">
    <div className="flex items-start gap-4 mb-4">
      <div className="bg-[#0060d1] p-4 rounded-xl shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>

    {links.map((link, index) => (
      <div key={index} className="mb-2">
        {link.items ? (
          link.items.map((item, idx) => (
            <p key={idx} className="text-card-foreground text-sm mb-1 hover:text-primary cursor-pointer">
              {item}
            </p>
          ))
        ) : (
          <p className="text-card-foreground text-sm">{link.text}</p>
        )}
      </div>
    ))}

    <div className="mt-auto pt-4">
      <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group">
        {linkText}
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const ExploreProgramsComponent: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<string>('all');
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('program-scroll');
    if (container) {
      const scrollAmount = 200;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const cards: CardProps[] = [
    {
      icon: <FileText className="w-6 h-6 text-primary-foreground" />,
      title: 'All Exams',
      description: 'Get details on exam dates, preparation tips, eligibility, and more.',
      tags: ['JEE Main', 'GATE', 'CAT', 'XAT'],
      links: [{ text: '' }],
      linkText: 'Explore all Exams',
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary-foreground" />,
      title: 'All Colleges',
      description: 'Explore top All Colleges by location, eligibility, infrastructure, and rankings',
      tags: [],
      links: [
        { text: '', items: ['Best colleges in Bangalore', 'Best colleges in Pune'] }
      ],
      linkText: 'Browse All Colleges in India',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-foreground" />,
      title: 'All College Predictor',
      description: "Find out where you're likely to get admission based on your rank,...",
      tags: ['JEE Main', 'GATE', 'CAT', 'JEE Advanced'],
      links: [{ text: '' }],
      linkText: 'Predict Your All Admission Chances',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-foreground" />,
      title: 'All Courses',
      description: 'Discover the best courses based on location, eligibility, and demand.',
      tags: [],
      links: [
        { text: '', items: ['Master of Business Administration (MBA)', 'Master of Computer Applications (MCA)'] }
      ],
      linkText: 'Explore Top Courses in India',
    },
  ];

  return (
    <div className=" bg-[#f8f9fa] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Explore Programs</h1>

        <div className="relative mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollContainer('left')}
              className="bg-card rounded-full p-2 shadow-md hover:shadow-lg transition-shadow shrink-0 z-10 border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div
              id="program-scroll"
              className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all shrink-0 ${
                    activeProgram === program.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground hover:bg-accent'
                  }`}
                >
                  {program.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollContainer('right')}
              className="bg-card rounded-full p-2 shadow-md hover:shadow-lg transition-shadow shrink-0 z-10 border"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProgramsComponent;