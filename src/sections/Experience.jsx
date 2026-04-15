import { motion } from "framer-motion";

const timeline = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 — Present",
    bullets: [
      "Built 3+ React projects in the last 6 Months",
      "Specialize in landing pages, and CMS-backed sites",
    ],
    current: true,
  },
  {
    role: "Cyber Security Analyst",
    company: "Wipro Ltd.",
    period: "2022 — 2023",
    bullets: [
      "Conducted security audits and vulnerability assessments ",
      "Implemented security best practices",
      "Collaborated with cross-functional teams to enhance security posture",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Sparks Foundation",
    period: "2019 — 2020",
    bullets: [
      "Built and maintained marketing pages and internal tools",
      "Migrated legacy jQuery codebase to React",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-brand-500">
            where I've been
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pl-10 relative"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    item.current
                      ? "border-brand-500 bg-brand-50 dark:bg-brand-950"
                      : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950"
                  }`}
                >
                  {item.current && (
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-brand-500 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full self-start sm:self-center ${
                      item.current
                        ? "bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
