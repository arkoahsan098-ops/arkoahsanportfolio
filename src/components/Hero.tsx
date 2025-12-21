import { Mail, Phone, Linkedin, MapPin, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Arko Ahsan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                BBA Student | MIS & Marketing Enthusiast
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              A driven and result-oriented student at Independent University, Bangladesh, 
              passionate about data analysis, technology, and business solutions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:Arko.ahsan098@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
              <a 
                href="tel:+8801724347026" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm">Call</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/arko-ahsan0098" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Explore My Journey
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 scale-95" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-card border-4 border-card">
                <img 
                  src={profilePhoto} 
                  alt="Arko Ahsan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-card rounded-2xl shadow-card animate-float" style={{ animationDelay: '-2s' }}>
                <p className="text-sm font-medium">🎓 CGPA 3.26</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
