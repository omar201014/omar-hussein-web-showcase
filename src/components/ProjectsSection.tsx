import { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, ExternalLink, PlayCircle, ArrowRight, Star, Sparkles } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  siteLink: string;
  demoLink: string;
  tech?: string[];
  featured?: boolean;
}

const ProjectsSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useScrollAnimation();

  const projects: Project[] = [
    {
      title: "Sheelan Designs",
      description: "Elegant interior design portfolio showcasing luxury residential and commercial projects.",
      image: "lovable-uploads/sheelandesign.com_.png",
      video: "lovable-uploads/sheelandesign website demo.mp4",
      siteLink: "https://sheelandesign.com",
      demoLink: "https://sheelandesign.com",
      tech: ["WordPress", "Portfolio", "Custom Design", "Gallery"],
      featured: true
    },
    {
      title: "Psychology Vibes",
      description: "Modern mental health platform offering professional psychological services and resources.",
      image: "lovable-uploads/psycology vibes website.png",
      video: "lovable-uploads/psycology vibes website demo.mp4",
      siteLink: "https://psychologyvibes.com",
      demoLink: "https://psychologyvibes.com",
      tech: ["WordPress", "Booking System", "Custom Theme", "Future Project"],
      featured: true
    },
    {
      title: "NV Interior",
      description: "Premium interior design solutions for luxury residential and commercial spaces in the UAE.",
      image: "lovable-uploads/nvuae.ae.png",
      video: "lovable-uploads/nvuae website demo.mp4",
      siteLink: "https://nvuae.ae",
      demoLink: "https://nvuae.ae",
      tech: ["WordPress", "Portfolio", "Custom Design", "Responsive"],
      featured: true
    },
    {
      title: "ZED Gaming Center",
      description: "Abu Dhabi's premier gaming destination featuring state-of-the-art gaming stations and VR experiences.",
      image: "lovable-uploads/ZED Gaming Center Abu Dhabi cover.png",
      video: "lovable-uploads/Zed Gaming Center Showcase Demo HECx256.mp4",
      siteLink: "https://zedae.ae",
      demoLink: "https://zedae.ae",
      tech: ["WordPress", "Gaming Platform", "Custom Design", "Booking System"]
    },
    {
      title: "EVE Design",
      description: "Contemporary design studio specializing in innovative branding and digital experiences.",
      image: "lovable-uploads/evedesign.net.png",
      video: "lovable-uploads/evedesign website demo.mp4",
      siteLink: "https://evedesign.net",
      demoLink: "https://evedesign.net",
      tech: ["WordPress", "Branding", "Portfolio", "Custom Design"]
    },
    {
      title: "Escrow Real Estate",
      description: "Premier real estate platform showcasing luxury properties in the UAE.",
      image: "lovable-uploads/Escrow website Home.png",
      video: "lovable-uploads/Escrow demo showcase.mp4",
      siteLink: "https://escrowrealestate.ae",
      demoLink: "https://escrowrealestate.ae",
      tech: ["WordPress", "Property Management", "Custom Design"]
    },
    {
      title: "Primal Fitness",
      description: "Professional fitness website for training programs and health guidance.",
      image: "lovable-uploads/Primal fitness website.png",
      video: "lovable-uploads/Primal fitness demo showcase.mp4",
      siteLink: "https://primalfitness.ae",
      demoLink: "https://primalfitness.ae",
      tech: ["WordPress", "Scheduling System", "Responsive Design"]
    },
    {
      title: "As Clinic",
      description: "UAE's premier dental care platform, offering comprehensive services.",
      image: "lovable-uploads/As Clinic.webp",
      video: "lovable-uploads/showcase AS.mp4",
      siteLink: "https://asclinic.ae",
      demoLink: "https://demo.asclinic.ae",
      tech: ["WordPress", "Custom Theme", "Appointment System"]
    },
    {
      title: "FARBARY",
      description: "Luxury travel agency specializing in bespoke 5-star experiences.",
      image: "lovable-uploads/Farbary Travel & Tourism – Luxury Trips 5-Star Services.webp",
      video: "lovable-uploads/Farbary showcase.mp4",
      siteLink: "https://farbary.ae",
      demoLink: "https://demo.farbary.com",
      tech: ["WordPress", "Booking System", "Custom Design"]
    },
    {
      title: "Arcave",
      description: "Creative design studio specializing in innovative digital solutions and brand experiences.",
      image: "lovable-uploads/arcave.webp",
      video: "lovable-uploads/Arcave showcase.mp4",
      siteLink: "https://design.arcave.ae",
      demoLink: "https://design.arcave.ae",
      tech: ["WordPress", "Creative Agency", "Custom Design"]
    },
    {
      title: "Eng. Abdullah Taj",
      description: "Personal portfolio website for a professional civil engineer showcasing expertise and projects.",
      image: "lovable-uploads/abdullahtaj.com_.webp",
      video: "lovable-uploads/Eng Abdullah website showcase.mp4",
      siteLink: "https://abdullahtaj.com",
      demoLink: "https://abdullahtaj.com",
      tech: ["WordPress", "Portfolio", "Responsive Design"]
    }
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    if (isMobile) return;
    
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * -4;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    
    // Set spotlight position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, [isMobile]);
  
  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    
    const card = e.currentTarget as HTMLElement;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    setHoveredIndex(null);
  }, [isMobile]);

  const renderProjectCard = (project: Project, index: number) => (
    <Card 
      key={index} 
      className={`group project-card spotlight transition-all duration-500 ease-out bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-primary/40 overflow-hidden relative rounded-2xl ${
        hoveredIndex === index ? 'ring-1 ring-primary/20 shadow-xl shadow-primary/10' : 'shadow-md'
      } ${
        project.featured ? 'border-primary/20 shadow-lg shadow-primary/5' : ''
      }`}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.4s ease' }}
      onMouseMove={(e) => handleMouseMove(e, index)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
      
      {/* Top accent line with shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-line" />

      <CardHeader className="pb-3 p-5 md:p-6 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-gradient ${project.featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-bold`}>
            {project.title}
          </CardTitle>
          {project.featured && (
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 flex items-center gap-1 shadow-lg transition-shadow duration-300 text-xs">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0 p-5 md:p-6 relative z-10 reveal-children">
        <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary/10 to-pink-500/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
              }}
            />
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-primary hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 h-14 w-14 sm:h-16 sm:w-16 shadow-2xl backdrop-blur-md bg-white/10 border border-white/20"
                  onClick={() => setOpenVideo(project.video)}
                >
                  <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10 drop-shadow-lg" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            )}
          </div>
        </AspectRatio>
        
        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500 font-medium text-sm leading-relaxed">
          {project.description}
        </CardDescription>
        
        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary dark:text-purple-300 border border-primary/15 text-[11px] font-semibold uppercase tracking-wider hover:bg-primary/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex flex-col xs:flex-row gap-2.5 pt-3">
          <Button 
            variant="outline" 
            size="sm"
            asChild 
            className="group/btn transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md text-sm font-medium rounded-xl border-border/50"
          >
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Link className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" size={14} />
              <span>Visit Site</span>
              <ArrowRight className="ml-2 h-3.5 w-0 opacity-0 group-hover/btn:w-3.5 group-hover/btn:opacity-100 transition-all duration-300" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            asChild 
            className="group/btn transition-all duration-300 hover:bg-pink-500/10 hover:border-pink-500/30 hover:shadow-md text-sm font-medium rounded-xl border-border/50"
          >
            {project.video ? (
              <a onClick={(e) => {
                e.preventDefault();
                setOpenVideo(project.video);
              }} href="#" className="flex items-center">
                <PlayCircle className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" size={14} />
                <span>Live Demo</span>
              </a>
            ) : (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" size={14} />
                <span>Live Demo</span>
                <ArrowRight className="ml-2 h-3.5 w-0 opacity-0 group-hover/btn:w-3.5 group-hover/btn:opacity-100 transition-all duration-300" />
              </a>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative" id="projects">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Modern section header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent section-header-line">
            Projects
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto px-4 text-base md:text-lg leading-relaxed">
            Explore my recent work crafting responsive, high-performing websites for businesses across different industries
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8" 
          {...(!isMobile && { 'data-animate': true })}
        >
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>

      <Dialog open={!!openVideo} onOpenChange={() => setOpenVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden rounded-2xl border-0">
          {openVideo && (
            <video 
              controls
              className="w-full h-full"
              preload="none"
              poster={projects.find(p => p.video === openVideo)?.image}
            >
              <source src={openVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
