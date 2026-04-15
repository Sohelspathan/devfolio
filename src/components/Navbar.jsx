import { useState, useEffect } from 'react'
import clsx from 'clsx'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={clsx(
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? ' dark:bg-zinc-950/80 backdrop-blur-md '
        : 'bg-transparent'
    )}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="font-mono text-sm font-medium text-brand-500 hover:text-brand-600 transition">
          &lt;Sohel.dev /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact"
            className="text-sm font-medium bg-brand-500 text-white px-4 py-2 rounded-xl hover:bg-brand-600 transition">
            Hire me
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(o => !o)}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            aria-label="Toggle menu"
          >
            <span className={clsx('block w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 transition-all origin-center',
              open && 'rotate-45 translate-y-1')} />
            <span className={clsx('block w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 mt-1.5 transition-all origin-center',
              open && '-rotate-45 -translate-y-0.5')} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-zinc-600 dark:text-zinc-400 py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="text-sm font-medium bg-brand-500 text-white px-4 py-2.5 rounded-xl text-center">
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}