import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Ambient background orbs */}
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[100px] animate-orb-drift" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[90px] animate-orb-drift-reverse" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/[0.05] blur-[80px] animate-orb-drift" />
    </div>

    {/* Grid overlay */}
    <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-[0.35]" />

    <div className="relative z-10">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
