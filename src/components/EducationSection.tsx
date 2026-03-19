import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      title: "Web Development with CMS",
      institution: "Information Technology Institute (ITI)",
      period: "03/2023 — 06/2023",
      description: "Building web Application with Content Management Systems, along with utilizing the necessary soft skills needed for web developing market.",
      logo: "/omar-hussein-web-showcase/lovable-uploads/logo-iti.png"
    },
    {
      title: "Bachelor's degree in Communication Engineering",
      institution: "Alexandria Higher Institute of Engineering & Technology",
      period: "09/2013 — 06/2018",
      logo: "/omar-hussein-web-showcase/lovable-uploads/logo-aiet.png"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative" id="education">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <GraduationCap className="h-3.5 w-3.5" />
            Academic
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent section-header-line">Education</h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto px-4 text-base md:text-lg leading-relaxed">
            Academic qualifications forming the foundation of my technical knowledge
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 relative" data-animate>
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
          
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="spotlight group transition-all duration-500 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-primary/30 overflow-hidden relative rounded-2xl hover:shadow-xl hover:shadow-primary/5 md:ml-12"
              data-stagger
            >
              {/* Timeline dot */}
              <div className="absolute -left-[3.25rem] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-background shadow-lg shadow-primary/30 hidden md:block group-hover:scale-125 transition-transform duration-300" />
              
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between p-6 md:p-8 gap-4 relative z-10">
                <div className="flex items-start md:items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-lg md:text-xl mb-1.5 font-bold group-hover:text-gradient transition-all duration-300">{edu.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground flex-wrap gap-1">
                      <School className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span className="break-words">{edu.institution}</span>
                    </div>
                  </div>
                  {edu.logo && (
                    <div className="hidden md:block ml-2 mt-3 md:mt-0">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`} 
                        className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between w-full md:w-auto">
                  {edu.logo && (
                    <div className="md:hidden">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`} 
                        className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                  <div className="bg-primary/10 text-primary dark:text-purple-300 py-1.5 px-4 rounded-full text-xs flex items-center w-fit border border-primary/20 font-semibold">
                    <Calendar className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent className="p-6 md:p-8 pt-0 relative z-10">
                  <div className="pl-4 md:pl-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 to-pink-500/30 rounded-full"></div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">{edu.description}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
