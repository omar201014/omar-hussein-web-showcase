
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
    <section className="py-16 px-4 bg-secondary/50" id="education">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</h2>
        <p className="text-center text-purple-300/80 mb-10 max-w-2xl mx-auto">
          Academic qualifications forming the foundation of my technical knowledge
        </p>
        
        <div className="grid gap-6" data-animate>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass group hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-[1.02] card-3d"
              data-stagger
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1 group-hover:text-gradient transition-all duration-300">{edu.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <School className="h-4 w-4 mr-1 inline text-purple-400" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs flex items-center shrink-0">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  <span>{edu.period}</span>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <div className="pl-10 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 to-pink-500/40"></div>
                    <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{edu.description}</p>
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
