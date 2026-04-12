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
    <div className="pointer-events-none absolute inset-0 z-0 hero-mesh" />

    {/* Ambient background orbs */}
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'hsl(172 66% 40% / 0.16)' }} />
      <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full blur-[100px] animate-orb-drift-reverse" style={{ background: 'hsl(220 60% 20% / 0.08)' }} />
      <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full blur-[100px] animate-orb-drift" style={{ background: 'hsl(172 66% 40% / 0.1)' }} />
      <div className="absolute top-[70%] left-[30%] w-[300px] h-[300px] rounded-full blur-[80px] animate-orb-drift" style={{ background: 'hsl(220 60% 40% / 0.06)' }} />
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
