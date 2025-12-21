import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Arko.ahsan098@gmail.com",
      href: "mailto:Arko.ahsan098@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1724347026",
      href: "tel:+8801724347026",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "arko-ahsan0098",
      href: "https://www.linkedin.com/in/arko-ahsan0098",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bashundhara R/A, Dhaka",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-6 bg-gradient-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-6 bg-gradient-card rounded-2xl shadow-soft">
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                      <contact.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="mailto:Arko.ahsan098@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <Send className="w-5 h-5" />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
