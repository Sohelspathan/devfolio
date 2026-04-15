import { useState } from 'react'
import { motion } from 'framer-motion'

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdayakpk'

const details = [
  { label: 'Email',      value: 'sohelpathan2700@gmail.com',        href: 'mailto:sohelpathan2700@gmail.com' },
  { label: 'LinkedIn',   value: '/in/sohelpathan1/',         href: 'https://www.linkedin.com/in/sohelpathan1/'   },
  { label: 'GitHub',     value: 'github.com/Sohelspathan',  href: 'https://github.com/Sohelspathan'     },
  { label: 'Timezone',   value: 'GMT+5:30 (flexible)',        href: null                     },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-xl px-4 py-3 text-sm placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition'

  return (
    <section id="contact" className="py-28 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="font-mono text-xs text-brand-500">let's work together</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Open to freelance projects, contract roles, and interesting collaborations.
            I typically reply within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Details */}
          <motion.div className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {details.map(d => (
              <div key={d.label}>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">
                  {d.label}
                </p>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-brand-500 transition font-mono">
                    {d.value}
                  </a>
                ) : (
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 font-mono">{d.value}</p>
                )}
              </div>
            ))}

            {/* Availability badge */}
            <div className="mt-4 inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-full px-4 py-2 self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name"    required placeholder="Your name"  className={inputCls} />
              <input name="email"   required type="email" placeholder="your@email.com" className={inputCls} />
            </div>
            <input name="subject" placeholder="Project type (landing page, dashboard…)" className={inputCls} />
            <textarea name="message" required rows={5} placeholder="Tell me about your project…"
              className={`${inputCls} resize-none`} prefix='Hi' aria-placeholder='Tell me about your project...' />

            <button type="submit" disabled={status === 'loading'}
              className="bg-brand-500 text-white text-sm font-medium py-3.5 rounded-xl hover:bg-brand-600 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity=".25" strokeWidth="2"/>
                    <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Sending…
                </>
              ) : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                Message sent! I'll get back to you within 24h.
              </p>
            )}
            {status === 'error' && (
              <a href={`mailto:${details[0].value}`} className="text-sm text-red-500 text-center">
                Something went wrong. Email me directly at {details[0].value }.
              </a>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}