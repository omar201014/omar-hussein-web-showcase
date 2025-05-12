
import { useRef, useEffect } from "react";
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
  const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollToTopBtnRef.current) {
        if (window.scrollY > 500) {
          scrollToTopBtnRef.current.classList.add('visible', 'opacity-100');
          scrollToTopBtnRef.current.classList.remove('invisible', 'opacity-0');
        } else {
          scrollToTopBtnRef.current.classList.add('invisible', 'opacity-0');
          scrollToTopBtnRef.current.classList.remove('visible', 'opacity-100');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
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
      
      <div className="animate-in" data-animate>
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <Button
        ref={scrollToTopBtnRef}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 flex items-center justify-center invisible opacity-0 transition-all duration-300 hover:scale-110 shadow-lg"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
