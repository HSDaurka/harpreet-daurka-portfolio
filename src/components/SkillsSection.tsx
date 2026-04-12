import { motion } from "framer-motion";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript"] },
  { category: "Backend & APIs", items: ["REST", "API Design", "OAuth 2.0", "Webhooks", "HTTP/HTTPS"] },
  { category: "Databases", items: ["PostgreSQL", "SQL Server"] },
  { category: "Systems & Concepts", items: ["Distributed Systems", "Service-Oriented Architecture", "Scalability", "System Reliability"] },
  { category: "Tools", items: ["Datadog (APM, Logs, Dashboards)", "Git", "Postman", "Sentry"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding backdrop-blur-sm" style={{ backgroundColor: 'hsl(220 20% 97% / 0.7)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Skills
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-heading font-bold text-foreground text-sm mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-highlight text-highlight-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
