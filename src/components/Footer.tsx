import { Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-80">Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span className="text-sm opacity-80">by Arko Ahsan</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:Arko.ahsan098@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arko-ahsan0098"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
