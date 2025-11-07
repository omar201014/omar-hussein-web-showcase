import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, ExternalLink, PlayCircle, ArrowRight, Star } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

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
      siteLink: "#",
      demoLink: "#",
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
      title: "Dawenha.store",
      description: "Rebuilt Dawenha.net with WordPress for streamlined CMS functionality.",
      image: "lovable-uploads/dawenha store.webp",
      siteLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
      demoLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
      tech: ["WordPress", "WooCommerce", "Elementor"]
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
      title: "Al Qada Al Mutamayzoon Institute",
      description: "Delivered tailored learning solutions in AI, Business, and English.",
      image: "lovable-uploads/Al Qada Al Mutamayzoon Institute Certified Language Courses & AI Learning for Kids.webp",
      video: "lovable-uploads/AlQada showcase.mp4",
      siteLink: "https://leadersinstitutes.com",
      demoLink: "https://demo.leadersinstitutes.com",
      tech: ["WordPress", "LMS", "Multilingual"]
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    
    const cards = containerRef.current.querySelectorAll('.project-card');
    
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const cardElement = card as HTMLElement;
      if (rect.left <= e.clientX && e.clientX <= rect.right && 
          rect.top <= e.clientY && e.clientY <= rect.bottom) {
        cardElement.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 25}deg) rotateX(${-(y - rect.height / 2) / 25}deg) scale3d(1.02, 1.02, 1.02)`;
        cardElement.style.transition = 'transform 0.1s ease';
      } else {
        cardElement.style.transform = '';
        cardElement.style.transition = 'transform 0.5s ease';
      }
    });
  };
  
  const handleMouseLeave = () => {
    if (!containerRef.current || isMobile) return;
    const cards = containerRef.current.querySelectorAll('.project-card');
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      cardElement.style.transform = '';
      cardElement.style.transition = 'transform 0.5s ease';
    });
  };

  const renderProjectCard = (project: Project, index: number) => (
    <Card 
      key={index} 
      className={`group project-card transform transition-all duration-500 hover:rotate-1 glass overflow-hidden ${
        hoveredIndex === index ? 'ring-2 ring-purple-500/50' : ''
      } ${
        project.featured ? 'border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20' : ''
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <CardHeader className="pb-2 p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-gradient ${project.featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
            {project.title}
          </CardTitle>
          {project.featured && (
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 flex items-center gap-1">
              <Star className="h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0 p-3 sm:p-4 md:p-6">
        <AspectRatio ratio={16/9} className="image-zoom-container">
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover image-zoom"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.log(`Image failed to load: ${target.src}`);
                target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
              }}
            />
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-primary hover:bg-black/50 rounded-full transition-all duration-300 hover:scale-110 h-16 w-16 sm:h-20 sm:w-20"
                  onClick={() => setOpenVideo(project.video)}
                >
                  <PlayCircle className="drop-shadow-lg h-12 w-12 sm:h-16 sm:w-16" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            )}
          </div>
        </AspectRatio>
        
        <CardDescription className="text-muted-foreground font-medium text-xs sm:text-sm">
          {project.description}
        </CardDescription>
        
        {project.tech && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 sm:py-1 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex flex-col xs:flex-row gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            asChild 
            className="group transition-all duration-300 hover:bg-purple-500/20 hover:text-foreground text-xs sm:text-sm"
          >
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Link className="mr-1 group-hover:rotate-12 transition-transform duration-300" size={14} />
              <span>Visit Site</span>
              <ArrowRight className="ml-1 h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            asChild 
            className="group transition-all duration-300 hover:bg-pink-500/20 hover:text-foreground text-xs sm:text-sm"
          >
            {project.video ? (
              <a onClick={(e) => {
                e.preventDefault();
                setOpenVideo(project.video);
              }} href="#" className="flex items-center">
                <PlayCircle className="mr-1 group-hover:rotate-12 transition-transform duration-300" size={14} />
                <span>Live Demo</span>
              </a>
            ) : (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-1 group-hover:rotate-12 transition-transform duration-300" size={14} />
                <span>Live Demo</span>
                <ArrowRight className="ml-1 h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300" />
              </a>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 px-2 sm:px-4 bg-secondary/50" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto px-2">
          Explore my recent work crafting responsive, high-performing websites for businesses across different industries
        </p>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8" 
          data-animate
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>

      <Dialog open={!!openVideo} onOpenChange={() => setOpenVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden rounded-lg">
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
