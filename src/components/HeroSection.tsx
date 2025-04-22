import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundPattern from './BackgroundPattern';
import ParticlesBackground from './ParticlesBackground';
import { useTypewriter } from '@/hooks/useTypewriter';

const HeroSection = () => {
  const typedName = useTypewriter("Omar Hussein", 150);
  const typedRole = useTypewriter("Web Developer", 150);

  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden">
      <BackgroundPattern />
      <ParticlesBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300"
          >
            {typedName || "Omar Hussein"}
          </h1>
          
          <h2 
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in delay-300 hover:scale-105 transition-transform duration-300"
          >
            {typedRole || "Web Developer"}
          </h2>
          
          <p 
            className="text-muted-foreground/90 max-w-2xl text-lg leading-relaxed glass p-6 animate-fade-in delay-500 hover:bg-white/20 transition-colors duration-300 rounded-xl backdrop-blur-lg shadow-lg"
            data-stagger
          >
            With over 2 years of WordPress expertise, I've designed and developed 20+ websites for diverse industries, including healthcare, travel, and e-commerce. My work focuses on creating responsive, conversion-driven layouts, integrating CRMs like Bitrix24 for streamlined workflows, and collaborating with cross-functional teams to align design with business goals. This approach has consistently improved client engagement by 30%+ and accelerated project delivery timelines.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 pt-4"
            data-stagger
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MapPin className="h-5 w-5" /> Alexandria, Egypt
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Mail className="h-5 w-5" /> omar_hussein201014@hotmail.com
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              (+20)11 116-09093
            </Button>
          </div>

          <div 
            className="flex gap-4 pt-2"
            data-stagger
          >
            <a 
              href="https://github.com/omar201014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Button variant="outline" size="icon" className="glass hover:bg-white/20 shadow-lg">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a 
              href="https://linkedin.com/in/omar-hussein-201014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Button variant="outline" size="icon" className="glass hover:bg-white/20 shadow-lg">
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
