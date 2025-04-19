
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Omar Hussein
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold">
            Web Developer
          </h2>
          <p className="text-muted-foreground/90 max-w-2xl text-lg leading-relaxed">
            With over 2 years of WordPress expertise, I've designed and developed 20+ websites for diverse industries, including healthcare, travel, and e-commerce. My work focuses on creating responsive, conversion-driven layouts, integrating CRMs like Bitrix24 for streamlined workflows, and collaborating with cross-functional teams to align design with business goals. This approach has consistently improved client engagement by 30%+ and accelerated project delivery timelines.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="lg" className="gap-2 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
              <MapPin className="h-5 w-5" /> Alexandria, Egypt
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
              <Mail className="h-5 w-5" /> omar_hussein201014@hotmail.com
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
              (+20)11 116-09093
            </Button>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/omar201014" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/omar-hussein-201014" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
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
