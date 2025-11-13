
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Users, MessageSquare } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": {
      icon: <Code className="h-5 w-5 text-primary" />,
      items: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "MySQL"]
    },
    "CRM Integration": {
      icon: <Database className="h-5 w-5 text-primary" />,
      items: ["Bitrix24", "Zoho", "Automation Tools"]
    },
    "Marketing Tools": {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      items: ["Landing Page Optimization", "Sales Funnels", "A/B Testing"]
    },
    "Collaboration": {
      icon: <Users className="h-5 w-5 text-primary" />,
      items: ["Agile Workflows", "Cross-Functional Team Coordination"]
    },
    "Communication": {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      items: ["Arabic (native speaker)", "English (fluent speaker)"]
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 parallax-section" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center text-gradient animate-fade-in">Skills</h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto px-4 leading-relaxed">
          Technical expertise and professional capabilities that drive project success
        </p>
        
        <div className="grid gap-6 md:gap-8 md:grid-cols-2" data-animate>
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <Card 
              key={category} 
              className="glass hover:bg-primary/5 dark:hover:bg-purple-500/10 transition-all duration-500 hover:scale-[1.03] group overflow-hidden relative border border-border"
              data-stagger
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/70 to-primary/50 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:w-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="flex flex-row items-center gap-4 p-5 md:p-6 relative z-10">
                <div className="p-2 rounded-lg bg-primary/15 group-hover:bg-primary/25 transition-colors duration-300">
                  {icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-all duration-300">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3 p-5 md:p-6 pt-0 relative z-10">
                {items.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-default py-2 px-4 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
