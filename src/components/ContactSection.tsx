import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm always open to discussing backend engineering, new opportunities, or
            interesting technical challenges. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:durkaey.hs@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              durkaey.hs@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/hs713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/HSDaurka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <MapPin size={18} />
              Brampton, ON
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
