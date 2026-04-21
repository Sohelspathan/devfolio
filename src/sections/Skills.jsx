import { motion } from "framer-motion";

const categories = [
  {
    name: "Core",
    skills: ["React 18", "JavaScript ES2024", "HTML5", "CSS3"],
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS ", "Framer Motion", "CSS Modules"],
  },
  {
    name: "Backend & DB",
    skills: [
      "Next.js 15",
      "Supabase",
      "Sanity CMS",
      "Firebase",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "Tooling",
    skills: ["Vite", "Git", "Figma", "Vercel", "Postman"],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-brand-500">
            what I work with
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Skills & stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5"
            >
              <p className="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-4">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Stats card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: categories.length * 0.07 }}
            className="bg-brand-500 rounded-2xl p-5 flex flex-col justify-between"
          >
            <p className="text-xs font-semibold text-brand-100 uppercase tracking-widest mb-4">
              By the numbers
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "6+", label: "Months freelancing" },
                { val: "5+", label: "Projects shipped" },
                { val: "100%", label: "On-time delivery" },
                { val: "< 48h", label: "Response time" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{val}</p>
                  <p className="text-xs text-brand-200 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
