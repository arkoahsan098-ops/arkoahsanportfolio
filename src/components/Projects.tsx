import { Database, Users, TrendingUp, CheckCircle } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Advanced IoT in Stadium Management",
    course: "MIS401: Database Managements",
    institution: "Independent University, Bangladesh",
    semester: "Spring 2025",
    score: "88/100",
    highlights: [
      "Conducted primary research through a 120+ participant survey",
      "Assessed public perceptions of IoT implementation in stadiums",
      "Revealed insights into user concerns and adoption barriers",
      "Reviewed 12+ academic and industry sources",
      "Delivered actionable strategies for crowd management and energy use",
    ],
  };

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Research</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Academic <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combining technology with business insights through rigorous research.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto animate-scale-in">
          <div className="bg-gradient-card rounded-3xl shadow-card overflow-hidden border border-border/50">
            {/* Header */}
            <div className="bg-gradient-primary p-8 text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-primary-foreground/80 text-sm font-medium">{project.course}</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mt-1">{project.title}</h3>
                  <p className="text-primary-foreground/90 mt-2">{project.institution} | {project.semester}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold">{project.score}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Stats */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-heading font-bold text-primary">120+</p>
                      <p className="text-muted-foreground text-sm">Survey Participants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                      <Database className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <p className="text-3xl font-heading font-bold text-secondary">12+</p>
                      <p className="text-muted-foreground text-sm">Sources Reviewed</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold mb-4">Key Highlights</h4>
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
