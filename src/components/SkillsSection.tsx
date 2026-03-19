import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Users, MessageSquare, Sparkles } from "lucide-react";

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
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative" id="skills">
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient section-header-line">Skills</h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto px-4 text-base md:text-lg leading-relaxed">
            Technical expertise and professional capabilities that drive project success
          </p>
        </div>
        
        <div className="grid gap-5 md:gap-6 md:grid-cols-2" data-animate>
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <Card 
              key={category} 
              className="spotlight group transition-all duration-500 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-primary/30 overflow-hidden relative rounded-2xl hover:shadow-xl hover:shadow-primary/5"
              data-stagger
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-transparent opacity-40 group-hover:opacity-100 transition-all duration-500" />
              
              <CardHeader className="flex flex-row items-center gap-4 p-5 md:p-6 relative z-10">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 p-5 md:p-6 pt-0 relative z-10">
                {items.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="bg-primary/8 text-foreground border border-primary/15 hover:bg-primary/15 hover:border-primary/25 transition-all duration-300 transform hover:scale-105 cursor-default py-1.5 px-3.5 text-sm font-medium rounded-lg"
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
