import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

const strengths = [
  "API Reliability",
  "Distributed Systems Debugging",
  "Observability",
  "Production Performance",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-20 bottom-10 -z-10">
        <div className="absolute left-[6%] top-[6%] h-44 w-44 rounded-full bg-[hsl(172_66%_40%_/_0.14)] blur-3xl animate-orb-drift" />
        <div className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-[hsl(220_60%_20%_/_0.14)] blur-[100px] animate-orb-drift-reverse" />
        <div className="absolute left-[18%] bottom-[14%] h-64 w-64 rounded-full bg-[hsl(191_80%_62%_/_0.12)] blur-[90px] animate-orb-drift" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid xl:grid-cols-5 gap-12 xl:gap-16 items-center">
        {/* Text */}
        <div className="min-w-0 xl:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/75 shadow-[0_12px_40px_hsl(220_60%_20%_/_0.08)] backdrop-blur mb-5"
          >
            <Sparkles size={14} className="text-accent" />
            Backend Systems • Public Portfolio
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-5"
          >
            Harpreet <span className="gradient-text">Daurka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            Backend-focused engineer with 3+ years building and sustaining high-scale
            SaaS systems. I specialize in API reliability, distributed systems debugging,
            and production performance — designing services that stay up and scale
            gracefully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hero-terminal mb-8 max-w-xl"
          >
            <div className="hero-terminal-bar">
              <span className="hero-dot bg-[#ff5f57]" />
              <span className="hero-dot bg-[#febc2e]" />
              <span className="hero-dot bg-[#28c840]" />
            </div>
            <div className="space-y-2 font-mono text-sm text-foreground/80">
              <p>
                <span className="text-accent">$</span> build scalable-services --focus reliability
              </p>
              <p className="text-foreground/60">observability.enabled = true</p>
              <p className="text-foreground/60">incident-response.mttr = -35%</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Experience
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Strengths strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {strengths.map((s) => (
              <span
                key={s}
                className="bg-highlight text-highlight-foreground text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 xl:col-span-2 flex justify-center xl:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="hero-panel absolute inset-6 -z-10 rounded-[2rem] rotate-6 opacity-80" />
            <div className="hero-panel relative z-10 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto rounded-[2rem] border border-white/50 overflow-hidden">
              <div className="absolute inset-0 z-0 hero-panel-glow" />
              <div className="absolute inset-0 z-0 hero-photo-grid opacity-40" />
              <img
                src="/profile.jpg"
                alt="Portrait of Harpreet Daurka"
                className="relative z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[hsl(220_60%_20%_/_0.78)] via-[hsl(220_60%_20%_/_0.18)] to-transparent px-5 pb-5 pt-12">
                <span className="block text-xs uppercase tracking-[0.24em] text-white/75 font-semibold">
                  Software Engineer
                </span>
                <span className="block font-heading text-xl text-white">
                  Harpreet Daurka
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
