import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="grid gap-6" data-animate>
          {experiences.map((exp, index) => (
            <Card key={index} className="glass transform transition-all duration-500 hover:scale-[1.02]" data-stagger>
              <CardHeader>
                <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p>{exp.company}</p>
                  <p>{exp.location}</p>
                  <p className="text-primary">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{achievement}</li>
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
