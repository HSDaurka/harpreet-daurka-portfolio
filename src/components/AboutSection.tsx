import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a backend-focused software engineer who thrives in the messy middle of
            production systems — debugging distributed failures, hardening APIs, and
            building the observability that makes complex architectures understandable.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Over the past three years I've worked hands-on with service-oriented
            platforms processing thousands of daily transactions, collaborating with
            engineering teams to resolve incidents, improve system reliability, and ship
            features that hold up under real-world load.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I care deeply about elegant API design, meaningful monitoring, and
            reducing the time between "something's wrong" and "here's the fix."
            When I'm not working, I'm usually reading about scalable architectures
            or tinkering with side projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
