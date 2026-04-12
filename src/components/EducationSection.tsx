import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Enterprise Software Development",
    type: "Post-Graduate Certificate",
    school: "Humber College of Applied Technology",
    period: "Sep 2017 – Jun 2018",
  },
  {
    degree: "Mobile Application Development",
    type: "Post-Graduate Certificate",
    school: "Northern College",
    period: "Jan 2017 – Sep 2017",
  },
  {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    type: "Undergraduate Degree",
    school: "Punjab Technical University",
    period: "Jul 2012 – Jun 2016",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-card border border-border rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-foreground text-base">
                  {edu.degree}
                </h3>
                <p className="text-sm text-accent font-semibold">{edu.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.type} · {edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
