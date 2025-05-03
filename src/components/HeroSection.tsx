
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundPattern from './BackgroundPattern';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const typedName = useTypewriter("Omar Hussein", 180);
  const typedRole = useTypewriter("Web Developer", 180);
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out the scroll indicator as user scrolls down
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - (scrollY / 200));
      setScrollIndicatorOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
          {/* Content Column */}
          <div className="space-y-6 md:w-2/3">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-gradient hover:scale-105 transition-transform duration-300"
            >
              {typedName || "Omar Hussein"}
            </h1>
            
            <h2 
              className="text-2xl md:text-3xl font-semibold text-gradient-blue hover:scale-105 transition-transform duration-300"
            >
              {typedRole || "Web Developer"}
            </h2>
            
            <p 
              className="text-muted-foreground/90 max-w-2xl text-lg leading-relaxed glass p-6 animate-fade-in delay-500 hover:bg-white/20 transition-all duration-300 rounded-xl backdrop-blur-lg shadow-lg card-3d"
            >
              With over 2 years of WordPress expertise, I've designed and developed 20+ websites for diverse industries, including healthcare, travel, and e-commerce. My work focuses on creating responsive, conversion-driven layouts, integrating CRMs like Bitrix24 for streamlined workflows, and collaborating with cross-functional teams to align design with business goals. This approach has consistently improved client engagement by 30%+ and accelerated project delivery timelines.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-wrap gap-4 pt-4 opacity-100 visible">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow"
              >
                <MapPin className="h-5 w-5 text-purple-300" /> Alexandria, Egypt
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow"
              >
                <Mail className="h-5 w-5 text-purple-300" /> omar_hussein201014@hotmail.com
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow"
              >
                (+20)11 116-09093
              </Button>
            </div>

            {/* Resume Download Button */}
            <div className="pt-2">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" /> Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2 opacity-100 visible">
              <a 
                href="https://github.com/omar201014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <Button variant="outline" size="icon" className="glass hover:bg-white/20 shadow-lg hover-glow">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://linkedin.com/in/omar-hussein-201014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <Button variant="outline" size="icon" className="glass hover:bg-white/20 shadow-lg hover-glow">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Photo Column */}
          <div className="md:w-1/3 flex justify-center md:justify-end animate-fade-in">
            <div className="relative rounded-full w-64 h-64 border-4 border-purple-500/30 overflow-hidden bg-white/10 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-500 hover-glow">
              <img 
                src="lovable-uploads/MyphotoHD suit enhanced.webp" 
                alt="Omar Hussein" 
                className="object-contain w-full h-full"
                style={{ backgroundColor: "white", height: "300px" }}
              />
              <div className="absolute inset-0 ring-4 ring-purple-500/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-sm text-purple-300 mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-purple-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
