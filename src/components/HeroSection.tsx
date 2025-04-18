
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
      <div className="container mx-auto text-center z-10 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Omar Hussein</h1>
        <h2 className="text-xl md:text-2xl text-primary mb-6">Web Developer</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          ITI-Certified Web Developer with 2+ years of experience specializing in WordPress development and marketing solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" size="sm" className="gap-2">
            <MapPin size={16} /> Alexandria, Egypt
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Mail size={16} /> omar_hussein201014@hotmail.com
          </Button>
          <Button variant="outline" size="sm">
            (+20)11 116-09093
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/omar201014" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/omar-hussein-201014" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
