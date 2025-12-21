import { Database, BarChart3, Presentation, Globe, Users, Lightbulb, MessageSquare, Trophy } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Excel", detail: "Financial Modeling, Pivot Tables", icon: BarChart3 },
    { name: "SQL", detail: "Basic Queries", icon: Database },
    { name: "STATA", detail: "Regression, Correlation, VIF", icon: BarChart3 },
    { name: "HTML & CSS", detail: "Web Development", icon: Globe },
    { name: "SEO", detail: "Search Optimization", icon: Globe },
    { name: "Power BI", detail: "Data Visualization", icon: BarChart3 },
    { name: "Google Ads", detail: "Digital Marketing", icon: Presentation },
    { name: "Canva", detail: "Professional Presentations", icon: Presentation },
  ];

  const softSkills = [
    { name: "Team Leadership", icon: Users },
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Data-Driven Decisions", icon: BarChart3 },
  ];

  const languages = [
    { name: "English", level: "Fluent", percentage: 95 },
    { name: "Bangla", level: "Fluent", percentage: 100 },
    { name: "Chinese", level: "Conversational", percentage: 40 },
  ];

  const achievements = [
    "SDG Policy Challenge (Participation)",
    "KUET BizzBattle (Campus Ambassador)",
    "WE Colorful Fest (Volunteer)",
    "IUB SBE Alumni Fest (Volunteer)",
    "Hult Prize (Volunteer)",
  ];

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Skills & Achievements</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What I <span className="text-gradient">Bring</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-foreground" />
              </span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-foreground" />
                </span>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                  >
                    <skill.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-secondary" />
                </span>
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </span>
                Achievements
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-card rounded-xl hover:shadow-soft transition-shadow"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
