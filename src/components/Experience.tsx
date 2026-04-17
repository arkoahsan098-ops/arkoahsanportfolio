import { Calendar, Megaphone, Shield, Palette, Briefcase } from "lucide-react";
import araLogo from "@/assets/ara-logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Digital Marketing & Marketing Intern",
      organization: "Azizur Rahman & Associates Chartered Secretaries (ARA)",
      period: "December 2025 – April 2026",
      description: "Social Media Manager (Facebook, Instagram, X), News Portal Admin (B24 News), and YouTube channel manager. Designed social media posts and promotional content.",
      icon: Briefcase,
      color: "primary",
      logo: araLogo,
    },
    {
      title: "Marketing & Design Contributor",
      organization: "Make Yours (Clothing Brand)",
      period: "Present",
      description: "Designed social media creatives, promotional visuals, and campaign content to boost brand awareness. Supported marketing campaigns with visual content aligned to brand strategy.",
      icon: Palette,
      color: "secondary",
    },
    {
      title: "Campus Ambassador",
      organization: "Mind Leap, YouthBees, H & I Council",
      period: "Spring 2023 - Summer 2025",
      description: "Organized on-campus events, encouraged participation in skill-building courses, and assisted students interested in studying abroad.",
      icon: Megaphone,
      color: "secondary",
    },
    {
      title: "Volunteer - Guest & Security Management",
      organization: "WE SUMMIT 2023",
      period: "October 2023",
      description: "Ensured smooth operations for 100+ attendees, resolving conflicts and maintaining safety protocols.",
      icon: Shield,
      color: "accent",
    },
    {
      title: "Event Coordinator",
      organization: "SBE Fest 2023",
      period: "January 2023",
      description: "Collaborated with 3 event heads to streamline schedules, vendor setups, and participant registrations. Addressed 5+ last-minute changes to ensure on-time delivery.",
      icon: Calendar,
      color: "primary",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-primary opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leadership roles and volunteer experiences that shaped my professional development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-full bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-border/50">
                {exp.logo ? (
                  <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mb-6 overflow-hidden shadow-soft p-1.5 group-hover:scale-110 transition-transform">
                    <img src={exp.logo} alt={`${exp.organization} logo`} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className={`w-14 h-14 rounded-2xl bg-${exp.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <exp.icon className={`w-7 h-7 text-${exp.color}`} />
                  </div>
                )}
                
                <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                <h3 className="text-xl font-heading font-semibold mt-2 mb-1">{exp.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{exp.organization}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
