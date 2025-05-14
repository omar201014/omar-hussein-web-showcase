
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
    <section className="py-12 md:py-16 px-2 sm:px-4" id="experience">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-sm md:text-base text-center text-purple-300/80 mb-6 md:mb-10 max-w-2xl mx-auto">
          Professional journey leveraging web development expertise across international projects
        </p>
        
        <div className="grid gap-4 md:gap-6" data-animate>
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass transform transition-all duration-500 hover:scale-[1.01] group hover:bg-purple-500/10 card-3d"
              data-stagger
            >
              <CardHeader className="relative p-4 md:p-6">
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
                    <p className="group-hover:text-white/90 transition-colors duration-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0" />
                    <p className="group-hover:text-white/90 transition-colors duration-300 break-words">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-4 md:p-6">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs md:text-sm text-muted-foreground flex group-hover:text-white/80 transition-colors duration-300">
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
