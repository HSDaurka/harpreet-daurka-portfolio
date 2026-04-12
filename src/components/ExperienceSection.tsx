import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    title: "Application Support Developer (Backend-Focused)",
    company: "TouchBistro",
    location: "Remote, Canada",
    period: "May 2021 – Present",
    highlights: [
      "Support a high-scale, service-oriented POS platform handling thousands of merchant transactions daily, with a focus on API reliability and system stability.",
      "Triage and resolve 150–200+ monthly production incidents across microservices, reducing mean time to resolution (MTTR) by approximately 35% through structured debugging and root-cause analysis.",
      "Leverage Datadog (APM, Logs, Dashboards) and Sentry for end-to-end observability, proactively identifying latency spikes, error-rate anomalies, and service degradation.",
      "Investigate RESTful API failures and PostgreSQL data consistency issues across distributed services, collaborating with engineering and QA teams to implement lasting fixes.",
      "Analyze recurring incident patterns and contribute findings to internal knowledge bases, driving systemic improvements and reducing repeat escalations.",
      "Validate fixes through CI/CD pipelines and staging environments to ensure production-grade reliability before deployment.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Blue Link",
    location: "Vaughan, ON",
    period: "Aug 2016 – Nov 2016",
    highlights: [
      "Built and integrated RESTful web services connecting mobile applications to SQL Server backends, enabling real-time data exchange.",
      "Designed API response structures with consistent HTTP status codes and JSON formatting, improving client-side reliability.",
      "Authored API documentation to support team onboarding and cross-team collaboration.",
    ],
  },
  {
    title: "Technician",
    company: "Bell Technical Solutions",
    location: "Ontario, Canada",
    period: "Mar 2019 – May 2021",
    highlights: [
      "Diagnosed and resolved connectivity issues across TCP/IP and DHCP networks, applying root-cause analysis to minimize service disruption.",
      "Translated complex customer-reported issues into technical resolutions, developing strong diagnostic and communication skills.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-highlight items-center justify-center">
                  <Briefcase size={18} className="text-accent" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-accent font-semibold text-sm">
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {role.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
