import { GraduationCap, BookOpen, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "Independent University, Bangladesh",
      degree: "Bachelor of Business Administration",
      details: "Major in MIS | Minor in Marketing",
      period: "Jan 2022 – Dec 2025",
      icon: GraduationCap,
    },
    {
      institution: "Cordova International School & College",
      degree: "A Level",
      details: "Business & Accounting",
      period: "June 2021",
      icon: BookOpen,
    },
    {
      institution: "IGCSE O'Level (Private)",
      degree: "O Level",
      details: "5 Subjects",
      period: "Jan-Nov 2020",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A strong academic foundation combined with practical experience in business and technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-20" />

            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative mb-12 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gradient-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shrink-0 group-hover:scale-110 transition-transform">
                          <edu.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                          <span className="text-sm text-primary font-medium">{edu.period}</span>
                          <h3 className="text-xl font-heading font-semibold">{edu.institution}</h3>
                          <p className="text-foreground font-medium">{edu.degree}</p>
                          <p className="text-muted-foreground text-sm">{edu.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
