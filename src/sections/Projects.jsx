import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Flowlytics',
    desc: 'SaaS analytics landing page with Framer Motion animations, pricing toggle, and FAQ accordion.',
    tags: ['React', 'Tailwind v4', 'Framer Motion'],
    color: 'bg-violet-100 dark:bg-violet-950',
    accent: 'bg-violet-500',
    live: 'https://flowlytics-three.vercel.app/',
    github: 'https://github.com/Sohelspathan/Flowlytics',
  },
  {
    name: 'MenuBoard-La Maison',
    desc: 'Restaurant website with menu — built to demonstrate real-world React + Tailwind skills, clean code, and attention to detail.',
    tags: ['React', 'Formspree', 'Vercel'],
    color: 'bg-teal-100 dark:bg-teal-950',
    accent: 'bg-teal-500',
    live: 'https://la-maison-eight.vercel.app/',
    github: 'https://github.com/Sohelspathan/La-Maison',
  },
  {
    name: 'Basekit',
    desc: 'Tailwind v4 design system — 8 reusable components with variant APIs, dark mode, and full a11y.',
    tags: ['React', 'Tailwind v4', 'clsx'],
    color: 'bg-blue-100 dark:bg-blue-950',
    accent: 'bg-blue-500',
    live: 'https://basekit.vercel.app',
    github: 'https://github.com',
  },
  // {
  //   name: 'Nexify',
  //   desc: '6-page Next.js 15 marketing site with Sanity CMS, ISR, PortableText blog, and pixel-perfect Figma output.',
  //   tags: ['Next.js 15', 'Sanity', 'TypeScript'],
  //   color: 'bg-orange-100 dark:bg-orange-950',
  //   accent: 'bg-orange-500',
  //   live: 'https://nexify.vercel.app',
  //   github: 'https://github.com',
  // },
]

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33v-1.2C3.27 12.51 2.87 11 2.87 11c-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.08.72 1.08.72.63 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.94-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.86 0 0 .59-.19 1.93.72A6.69 6.69 0 0 1 7 3.56c.6 0 1.2.08 1.76.24 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.68.07 1.86.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.47.64.47 1.3v1.91c0 .18.13.4.48.33A7 7 0 0 0 7 0Z" fill="currentColor"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="font-mono text-xs text-brand-500">what I've shipped</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Selected projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-brand-300 dark:hover:border-brand-800 transition-all"
            >
              {/* Mock preview */}
              <div className={`h-44 ${p.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="flex gap-2">
                  <div className={`w-16 h-2 rounded-full ${p.accent} opacity-30`} />
                  <div className={`w-10 h-2 rounded-full ${p.accent} opacity-20`} />
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white dark:bg-zinc-900">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map(t => (
                    <span key={t}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex items-center gap-4">
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-brand-500 hover:text-brand-600 transition">
                    Live demo <ExternalIcon />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                    <GitHubIcon /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}