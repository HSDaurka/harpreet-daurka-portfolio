import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const strengths = [
  "API Reliability",
  "Distributed Systems Debugging",
  "Observability",
  "Production Performance",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-3">
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
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
          >
            Harpreet Daurka
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
          className="lg:col-span-2 flex justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl border-2 border-dashed border-border bg-secondary flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-muted-foreground">HD</span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Photo coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
