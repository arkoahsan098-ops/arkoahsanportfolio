import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arko Ahsan | BBA Student & MIS Specialist</title>
        <meta 
          name="description" 
          content="Portfolio of Arko Ahsan - A driven BBA student at IUB majoring in MIS and Marketing. Skilled in data analysis, Excel, SQL, and business tools." 
        />
        <meta name="keywords" content="Arko Ahsan, BBA, MIS, Marketing, Data Analysis, Portfolio, IUB, Bangladesh" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
