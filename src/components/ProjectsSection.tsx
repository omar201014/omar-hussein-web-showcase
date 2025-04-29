
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink, PlayCircle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  siteLink: string;
  demoLink: string;
}

const ProjectsSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Dawenha.store",
      description: "Rebuilt Dawenha.net with WordPress for streamlined CMS functionality.",
      image: "lovable-uploads/dawenha store.webp",
      siteLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
      demoLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
    },
    {
      title: "As Clinic",
      description: "UAE's premier dental care platform, offering comprehensive services.",
      image: "lovable-uploads/As Clinic.webp",
      video: "lovable-uploads/showcase AS.mp4",
      siteLink: "https://asclinic.ae",
      demoLink: "https://demo.asclinic.ae",
    },
    {
      title: "FARBARY",
      description: "Luxury travel agency specializing in bespoke 5-star experiences.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      video: "lovable-uploads/Farbary showcase.mp4",
      siteLink: "https://farbary.com",
      demoLink: "https://demo.farbary.com",
    },
    {
      title: "Leaders Institute",
      description: "Delivered tailored learning solutions in AI, Business, and English.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      video: "lovable-uploads/AlQada showcase.mp4",
      siteLink: "https://leaders-institute.com",
      demoLink: "https://demo.leaders-institute.com",
    },
    {
      title: "Primal Fitness UAE",
      description: "Fitness hub offering personalized wellness programs for individuals/businesses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      siteLink: "https://primalfitness.ae",
      demoLink: "https://demo.primalfitness.ae",
    },
    {
      title: "Arcave Interior Design",
      description: "Abu Dhabi-based commercial interior design studio for clinics, offices, and cafes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      video: "lovable-uploads/Arcave showcase.mp4",
      siteLink: "https://arcave.ae",
      demoLink: "https://demo.arcave.ae",
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/50" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass transform transition-all duration-500 hover:scale-105 hover:rotate-1" 
              data-stagger
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AspectRatio ratio={16/9}>
                  <div className="relative w-full h-full rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.log(`Image failed to load: ${target.src}`);
                        target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                      }}
                    />
                    {project.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:text-primary hover:bg-black/50 rounded-full h-20 w-20 animate-pulse hover:animate-none"
                          onClick={() => setOpenVideo(project.video)}
                        >
                          <PlayCircle className="h-16 w-16" />
                          <span className="sr-only">Play video</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </AspectRatio>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2" />
                      Visit Site
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={project.video ? () => setOpenVideo(project.video) : undefined}
                    asChild={!project.video}
                  >
                    {project.video ? (
                      <>
                        <span>
                          <PlayCircle className="mr-2" />
                          Live Demo
                        </span>
                      </>
                    ) : (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!openVideo} onOpenChange={() => setOpenVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
          {openVideo && (
            <video 
              controls
              className="w-full h-full"
              preload="metadata"
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
