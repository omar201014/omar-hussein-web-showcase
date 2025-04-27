
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link, FileVideo, Image } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dawenha.store",
      description: "Rebuilt Dawenha.net with WordPress for streamlined CMS functionality.",
      link: "https://dawenha.store",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "As Clinic",
      description: "UAE's premier dental care platform, offering comprehensive services.",
      link: "https://asclinic.ae",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
    {
      title: "FARBARY",
      description: "Luxury travel agency specializing in bespoke 5-star experiences.",
      link: "https://farbary.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Leaders Institute",
      description: "Delivered tailored learning solutions in AI, Business, and English.",
      link: "https://leaders-institute.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Primal Fitness UAE",
      description: "Fitness hub offering personalized wellness programs for individuals/businesses.",
      link: "https://primalfitness.ae",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Arcave Interior Design",
      description: "Abu Dhabi-based commercial interior design studio for clinics, offices, and cafes.",
      link: "https://arcave.ae",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
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
                  />
                </AspectRatio>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2" />
                      Visit Site
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Image className="mr-2" />
                    Photos
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileVideo className="mr-2" />
                    Demo
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

