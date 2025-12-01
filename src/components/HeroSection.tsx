import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Mouse, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTypewriter } from '@/hooks/useTypewriter';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

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

  const scrollToNextSection = () => {
    // Find the element after the hero section (next section)
    const nextSection = document.querySelector('.section-divider')?.nextElementSibling;
    
    if (nextSection) {
      // Scroll to the next section with a smooth animation
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden"
    >
      {/* Semi-transparent overlay for content readability */}
      <div className="absolute inset-0 bg-background/40 dark:bg-background/50 backdrop-blur-[1px]"></div>
      
      {/* Header with Logo and Theme Toggle */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
        <div>
          <img 
            src="lovable-uploads/logo white.png" 
            alt="Omar Hussein Logo" 
            className="h-12 md:h-16 block dark:hidden" 
          />
          <img 
            src="lovable-uploads/Logo Dark.png" 
            alt="Omar Hussein Logo" 
            className="h-12 md:h-16 hidden dark:block" 
          />
        </div>
        <ThemeToggle />
      </div>
      
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
              <a 
                href="mailto:omar.hussein201014@outlook.com"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow"
                >
                  <Mail className="h-5 w-5 text-purple-300" /> omar.hussein201014@outlook.com
                </Button>
              </a>
              <a 
                href="tel:+201111609093"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow"
                >
                  <Phone className="h-5 w-5 text-purple-300" /> (+20)11 116-09093
                </Button>
              </a>
            </div>

            {/* Resume Download Button */}
            <div className="pt-2">
              <a 
                href="https://drive.google.com/file/d/19-3BaZZDfB4Wk9XeNCovSc7gbzwE7_Rp/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-2" /> Download Resume
                </Button>
              </a>
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

        {/* Scroll Indicator - now clickable with mouse icon */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 cursor-pointer hover:scale-110"
          style={{ opacity: scrollIndicatorOpacity }}
          onClick={scrollToNextSection}
        >
          <div className="flex items-center gap-2 mb-2">
            <Mouse className="h-5 w-5 text-primary" />
            <span className="text-sm text-primary font-medium">Scroll Down</span>
          </div>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
