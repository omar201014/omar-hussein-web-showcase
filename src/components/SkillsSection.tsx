
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "MySQL"],
    "CRM Integration": ["Bitrix24", "Zoho", "Automation Tools"],
    "Marketing Tools": ["Landing Page Optimization", "Sales Funnels", "A/B Testing"],
    "Collaboration": ["Agile Workflows", "Cross-Functional Team Coordination"],
    "Communication": ["Arabic (native speaker)", "English (fluent speaker)"]
  };

  return (
    <section className="py-16 px-4" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="glass">
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
