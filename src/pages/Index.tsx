
import { useRef, useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useScrollAnimation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Section divider */}
      <div className="section-divider"></div>
      
      <div className="animate-in" data-animate>
        <ExperienceSection />
      </div>
      
      <div className="animate-in" data-animate>
        <ProjectsSection />
      </div>
      
      <div className="animate-in" data-animate>
        <SkillsSection />
      </div>
      
      <div className="animate-in" data-animate>
        <EducationSection />
      </div>
      
      <Footer />
      
      {/* Scroll to top button - Using React state instead of ref manipulation */}
      <Button
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
          isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
