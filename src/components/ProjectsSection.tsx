
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  siteLink: string;
  demoLink: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Dawenha.store",
      description: "Rebuilt Dawenha.net with WordPress for streamlined CMS functionality.",
      image: "/lovable-uploads/71b099fb-a972-4875-aaaa-56da84e54706.png",
      siteLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
      demoLink: "https://drive.google.com/file/d/16XVFU601uSs25OL3eeAZVtuRbZma3s4r/view",
    },
    {
      title: "As Clinic",
      description: "UAE's premier dental care platform, offering comprehensive services.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      siteLink: "https://asclinic.ae",
      demoLink: "https://demo.asclinic.ae",
    },
    {
      title: "FARBARY",
      description: "Luxury travel agency specializing in bespoke 5-star experiences.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      siteLink: "https://farbary.com",
      demoLink: "https://demo.farbary.com",
    },
    {
      title: "Leaders Institute",
      description: "Delivered tailored learning solutions in AI, Business, and English.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
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
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-md object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log(`Image failed to load: ${target.src}`);
                      target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                    }}
                  />
                </AspectRatio>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2" />
                      Visit Site
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
