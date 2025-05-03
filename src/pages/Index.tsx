
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
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
    </div>
  );
};

export default Index;
