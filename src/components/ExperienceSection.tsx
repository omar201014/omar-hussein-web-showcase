import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase, ChevronRight, Sparkles } from "lucide-react";

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
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative" id="experience">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Briefcase className="h-3.5 w-3.5" />
            Career
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent section-header-line">
            Experience
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto px-4 text-base md:text-lg leading-relaxed">
            Professional journey leveraging web development expertise across international projects
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 relative" data-animate>
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
          
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="spotlight group transition-all duration-500 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-primary/30 overflow-hidden relative rounded-2xl hover:shadow-xl hover:shadow-primary/5 md:ml-12"
              data-stagger
            >
              {/* Timeline dot */}
              <div className="absolute -left-[3.25rem] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-pink-500 border-4 border-background shadow-lg shadow-primary/30 hidden md:block group-hover:scale-125 transition-transform duration-300" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-pink-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative p-6 md:p-8 z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                  <CardTitle className="text-lg md:text-xl font-bold group-hover:text-gradient transition-all duration-300">{exp.title}</CardTitle>
                  <div className="bg-primary/10 text-primary dark:text-purple-300 py-1.5 px-4 rounded-full text-xs flex items-center w-fit border border-primary/20 font-semibold">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-primary/10">
                      <Briefcase className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors duration-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-primary/10">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors duration-300 break-words">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-6 md:p-8 relative z-10">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex group-hover:text-foreground/80 transition-colors duration-300">
                      <ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" /> 
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
