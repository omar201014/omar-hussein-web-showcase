
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
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 parallax-section" id="experience">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          Experience
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto px-4 leading-relaxed">
          Professional journey leveraging web development expertise across international projects
        </p>
        
        <div className="grid gap-6 md:gap-8" data-animate>
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass transform transition-all duration-500 hover:scale-[1.02] group hover:bg-purple-500/10 overflow-hidden"
              data-stagger
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-5 md:p-8 z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <CardTitle className="text-lg md:text-xl group-hover:text-gradient transition-all duration-300">{exp.title}</CardTitle>
                  <div className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs flex items-center w-fit">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0" />
                    <p className="group-hover:text-foreground transition-colors duration-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0" />
                    <p className="group-hover:text-foreground transition-colors duration-300 break-words">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-5 md:p-8 relative z-10">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs md:text-sm text-muted-foreground flex group-hover:text-foreground transition-colors duration-300">
                      <ChevronRight className="h-4 w-4 mr-1 text-purple-400 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" /> 
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
