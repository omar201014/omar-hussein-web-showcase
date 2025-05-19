
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Users, MessageSquare } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": {
      icon: <Code className="h-5 w-5 text-purple-400" />,
      items: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "MySQL"]
    },
    "CRM Integration": {
      icon: <Database className="h-5 w-5 text-blue-400" />,
      items: ["Bitrix24", "Zoho", "Automation Tools"]
    },
    "Marketing Tools": {
      icon: <BarChart className="h-5 w-5 text-pink-400" />,
      items: ["Landing Page Optimization", "Sales Funnels", "A/B Testing"]
    },
    "Collaboration": {
      icon: <Users className="h-5 w-5 text-green-400" />,
      items: ["Agile Workflows", "Cross-Functional Team Coordination"]
    },
    "Communication": {
      icon: <MessageSquare className="h-5 w-5 text-yellow-400" />,
      items: ["Arabic (native speaker)", "English (fluent speaker)"]
    }
  };

  return (
    <section className="py-16 px-2 sm:px-4" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-gradient">Skills</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Technical expertise and professional capabilities that drive project success
        </p>
        
        <div className="grid gap-6 md:grid-cols-2" data-animate>
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <Card 
              key={category} 
              className="glass hover:bg-purple-500/10 transition-all duration-500 hover:scale-[1.03] group overflow-hidden"
              data-stagger
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                  {icon}
                </div>
                <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow cursor-default py-1.5 text-foreground"
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
