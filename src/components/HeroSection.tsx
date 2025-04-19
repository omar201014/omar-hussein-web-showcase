
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundPattern from './BackgroundPattern';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent transform transition-all duration-700 animate-fade-in"
          >
            Omar Hussein
          </h1>
          
          <h2 
            className="text-2xl md:text-3xl text-primary font-semibold transform transition-all duration-700 delay-100 animate-fade-in"
          >
            Web Developer
          </h2>
          
          <p 
            className="text-muted-foreground/90 max-w-2xl text-lg leading-relaxed glass p-6 transform transition-all duration-700 delay-200 animate-fade-in"
          >
            With over 2 years of WordPress expertise, I've designed and developed 20+ websites for diverse industries, including healthcare, travel, and e-commerce. My work focuses on creating responsive, conversion-driven layouts, integrating CRMs like Bitrix24 for streamlined workflows, and collaborating with cross-functional teams to align design with business goals. This approach has consistently improved client engagement by 30%+ and accelerated project delivery timelines.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 pt-4 transform transition-all duration-700 delay-300 animate-fade-in"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <MapPin className="h-5 w-5" /> Alexandria, Egypt
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Mail className="h-5 w-5" /> omar_hussein201014@hotmail.com
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              (+20)11 116-09093
            </Button>
          </div>

          <div 
            className="flex gap-4 pt-2 transform transition-all duration-700 delay-400 animate-fade-in"
          >
            <a 
              href="https://github.com/omar201014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Button variant="outline" size="icon" className="glass hover:bg-white/20">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a 
              href="https://linkedin.com/in/omar-hussein-201014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Button variant="outline" size="icon" className="glass hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
