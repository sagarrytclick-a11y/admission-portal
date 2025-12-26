import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExploreColleges from "./components/colleges";
import Category from "./components/category";
import StatsSection from "./components/stats";
import PremiumServices from "./components/Service";
import ProcessSteps from "./components/ProcessSteps";
import StudentStoriesExact from "./components/StudentSuccessStories"; 
import LatestInsights from "./components/LatestInsights";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import UpcomingExams from "./components/exams";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <ExploreColleges />
      <UpcomingExams/>
      <Category />
      <StatsSection/>
      <PremiumServices/>
      <ProcessSteps/>
      <StudentStoriesExact/>
      <LatestInsights/>
      <CTASection/>
      <Footer/>
    </div>
  );
}