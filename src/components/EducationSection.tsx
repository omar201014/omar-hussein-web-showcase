
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
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-secondary/50 parallax-section" id="education">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">Education</h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto px-4 leading-relaxed">
          Academic qualifications forming the foundation of my technical knowledge
        </p>
        
        <div className="grid gap-6 md:gap-8" data-animate>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass group hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden relative"
              data-stagger
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between p-5 md:p-8 gap-4 relative z-10">
                <div className="flex items-start md:items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-lg md:text-xl mb-1 group-hover:text-gradient transition-all duration-300">{edu.title}</CardTitle>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground flex-wrap">
                      <School className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1 inline text-purple-400 flex-shrink-0" />
                      <span className="break-words">{edu.institution}</span>
                    </div>
                  </div>
                  {edu.logo && (
                    <div className="hidden md:block ml-2 mt-3 md:mt-0">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`} 
                        className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
                        className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                  <div className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs flex items-center w-fit">
                    <Calendar className="mr-1 h-3.5 w-3.5 flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent className="p-5 md:p-8 pt-0 relative z-10">
                  <div className="pl-4 md:pl-10 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 to-pink-500/40"></div>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{edu.description}</p>
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
