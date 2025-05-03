
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      title: "Web Development with CMS",
      institution: "Information Technology Institute (ITI)",
      period: "03/2023 — 06/2023",
      description: "Building web Application with Content Management Systems, along with utilizing the necessary soft skills needed for web developing market."
    },
    {
      title: "Bachelor's degree in Communication Engineering",
      institution: "Alexandria Higher Institute of Engineering & Technology",
      period: "09/2013 — 06/2018",
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-secondary/50" id="education">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</h2>
        <p className="text-sm md:text-base text-center text-purple-300/80 mb-6 md:mb-10 max-w-2xl mx-auto">
          Academic qualifications forming the foundation of my technical knowledge
        </p>
        
        <div className="grid gap-4 md:gap-6" data-animate>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass group hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-[1.02] card-3d"
              data-stagger
            >
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 gap-3">
                <div className="flex items-start md:items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl mb-1 group-hover:text-gradient transition-all duration-300">{edu.title}</CardTitle>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground flex-wrap">
                      <School className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1 inline text-purple-400 flex-shrink-0" />
                      <span className="break-words">{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs flex items-center w-fit md:w-auto">
                  <Calendar className="mr-1 h-3.5 w-3.5 flex-shrink-0" />
                  <span>{edu.period}</span>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="pl-4 md:pl-10 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 to-pink-500/40"></div>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{edu.description}</p>
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
