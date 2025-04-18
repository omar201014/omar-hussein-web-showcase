
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="glass">
              <CardHeader>
                <CardTitle className="text-xl mb-1">{edu.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p>{edu.institution}</p>
                  <p className="text-primary">{edu.period}</p>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
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
