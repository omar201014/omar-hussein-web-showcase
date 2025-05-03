
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "VAM Consulting LLC",
      location: "Abu Dhabi, United Arab Emirates (Remote)",
      period: "10/2024 — Present",
      achievements: [
        "Developed 20+ WordPress websites, including landing pages and sales funnels, boosting client conversion rates by 25%.",
        "Integrated Bitrix24 CRM with WordPress platforms to automate lead tracking and client workflows.",
        "Collaborated with cross-functional teams to deliver projects 15% faster than deadlines."
      ]
    },
    {
      title: "WordPress Developer",
      company: "Trillsites.com",
      location: "Orlando, Florida, USA (Remote)",
      period: "7/2023 — 10/2024",
      achievements: [
        "Utilize strong development skills to customize themes, plugins, and functionality",
        "Provide ongoing maintenance and support to ensure website functionality and security"
      ]
    }
  ];

  return (
    <section className="py-16 px-4" id="experience">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-purple-300/80 mb-10 max-w-2xl mx-auto">
          Professional journey leveraging web development expertise across international projects
        </p>
        
        <div className="grid gap-6" data-animate>
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass transform transition-all duration-500 hover:scale-[1.01] group hover:bg-purple-500/10 card-3d"
              data-stagger
            >
              <CardHeader className="relative">
                <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                
                <CardTitle className="text-xl mb-1 group-hover:text-gradient transition-all duration-300">{exp.title}</CardTitle>
                <div className="text-sm text-muted-foreground space-y-0.5">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-purple-400" />
                    <p className="group-hover:text-white/90 transition-colors duration-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                    <p className="group-hover:text-white/90 transition-colors duration-300">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex group-hover:text-white/80 transition-colors duration-300">
                      <ChevronRight className="h-5 w-5 mr-1 text-purple-400 flex-shrink-0 mt-0 group-hover:translate-x-1 transition-transform duration-300" /> 
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
