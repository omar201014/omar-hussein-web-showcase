import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Mouse, Phone, Briefcase } from 'lucide-react';
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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover dark:opacity-100 opacity-40"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="lovable-uploads/dark galaxy blue.mp4"
      />

      {/* Multi-layer cinematic overlay for richer visuals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base readability tint */}
        <div className="absolute inset-0 bg-white/55 dark:bg-black/55" />

        {/* Animated colorful gradient mesh */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-80 mix-blend-soft-light dark:mix-blend-screen hero-mesh"
          aria-hidden="true"
        />

        {/* Floating color blobs */}
        <div className="absolute -top-32 -left-24 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-fuchsia-500/40 via-purple-500/30 to-transparent blur-3xl hero-blob-a" />
        <div className="absolute -bottom-40 -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-500/30 to-transparent blur-3xl hero-blob-b" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-gradient-to-r from-pink-500/30 via-violet-500/25 to-indigo-500/30 blur-3xl hero-blob-c" />

        {/* Subtle grid sheen (light mode pop) */}
        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground)/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Vignette for focus */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 55%, hsl(var(--background)/0.55) 100%)',
          }}
        />

        <style>{`
          .hero-mesh {
            background:
              radial-gradient(at 18% 22%, hsl(280 90% 65% / 0.55) 0px, transparent 45%),
              radial-gradient(at 82% 18%, hsl(195 95% 60% / 0.5) 0px, transparent 45%),
              radial-gradient(at 75% 82%, hsl(330 90% 65% / 0.5) 0px, transparent 45%),
              radial-gradient(at 22% 78%, hsl(255 90% 65% / 0.55) 0px, transparent 45%),
              radial-gradient(at 50% 50%, hsl(160 80% 55% / 0.35) 0px, transparent 55%);
            background-size: 200% 200%;
            animation: heroMeshShift 18s ease-in-out infinite alternate;
            filter: saturate(1.15);
          }
          @keyframes heroMeshShift {
            0%   { background-position: 0% 0%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 20% 100%; }
          }
          .hero-blob-a { animation: heroBlobA 16s ease-in-out infinite; }
          .hero-blob-b { animation: heroBlobB 20s ease-in-out infinite; }
          .hero-blob-c { animation: heroBlobC 24s ease-in-out infinite; }
          @keyframes heroBlobA {
            0%,100% { transform: translate(0,0) scale(1); }
            50%     { transform: translate(40px,30px) scale(1.1); }
          }
          @keyframes heroBlobB {
            0%,100% { transform: translate(0,0) scale(1); }
            50%     { transform: translate(-50px,-20px) scale(1.08); }
          }
          @keyframes heroBlobC {
            0%,100% { transform: translate(-50%,0) scale(1); }
            50%     { transform: translate(-50%,-40px) scale(1.05); }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-mesh, .hero-blob-a, .hero-blob-b, .hero-blob-c { animation: none !important; }
          }
        `}</style>
      </div>
      
      {/* Header with Logo and Theme Toggle */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
        <div>
          <img 
            src="lovable-uploads/logo white.png" 
            alt="Omar Hussein Logo" 
            className="h-12 md:h-16 block dark:hidden"
            loading="eager"
            width="64"
            height="64"
          />
          <img 
            src="lovable-uploads/Logo Dark.png" 
            alt="Omar Hussein Logo" 
            className="h-12 md:h-16 hidden dark:block"
            loading="eager"
            width="64"
            height="64"
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
              className="text-muted-foreground/90 max-w-2xl text-lg leading-relaxed glass p-6 animate-fade-in delay-500 hover:bg-white/20 transition-all duration-300 rounded-xl backdrop-blur-lg shadow-lg card-3d !border-white/20 dark:!border-white/15"
            >
              With over 2 years of WordPress expertise, I've designed and developed 20+ websites for diverse industries, including healthcare, travel, and e-commerce. My work focuses on creating responsive, conversion-driven layouts, integrating CRMs like Bitrix24 for streamlined workflows, and collaborating with cross-functional teams to align design with business goals. This approach has consistently improved client engagement by 30%+ and accelerated project delivery timelines.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-wrap gap-4 pt-4 opacity-100 visible">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow !border-white/25 dark:!border-white/15"
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
                  className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow !border-white/25 dark:!border-white/15"
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
                  className="gap-2 glass hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg button-glow !border-white/25 dark:!border-white/15"
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
                <Button variant="outline" size="icon" className="glass hover:bg-white/20 shadow-lg hover-glow !border-white/25 dark:!border-white/15">
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
              <a 
                href="https://www.upwork.com/freelancers/~0127c70a7dce1e5102?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
              >
                <Button variant="outline" size="sm" className="gap-2 glass hover:bg-white/20 shadow-lg hover-glow button-glow font-medium">
                  <Briefcase className="h-4 w-4" />
                  Hire Me
                </Button>
              </a>
            </div>
          </div>
          
          {/* Photo Column */}
          <div className="md:w-1/3 flex justify-center md:justify-end animate-fade-in">
            <div className="relative rounded-full w-64 h-64 border-4 border-purple-500/30 overflow-hidden bg-white/10 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-500 hover-glow">
              <img 
                src="lovable-uploads/MyphotoHD suit enhanced.webp" 
                alt="Omar Hussein - Web Developer" 
                className="object-contain w-full h-full"
                style={{ backgroundColor: "white", height: "300px" }}
                loading="eager"
                width="256"
                height="256"
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
