import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ScrollToNext from "../components/ScrollToNext";

const socials = [
  { label: "GitHub", href: "https://github.com/Sohelspathan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sohelpathan1/" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(139 92 246 / 0.08) 1px, transparent 1px)",
             backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl -z-10"
      />

      <motion.div
        className="max-w-3xl w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-brand-500 mb-5"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 leading-tight"
        >
          Sohel Pathan
        </motion.h1>

        {/* Typewriter effect */}
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 leading-tight">
          <div>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Specialist",
                  "UI Engineer",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 50,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </div>
        </h1>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          I build fast, accessible, pixel-perfect interfaces for startups and
          product teams. React + Tailwind is my stack. Clean code is my
          standard.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto bg-brand-500 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-brand-600 transition"
          >
            See my work
          </a>
          <a
            href="/SOHEL_SWE.pdf"
            target="_blank"
            className="w-full sm:w-auto border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2h7l3 3v7H2V2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 2v3h3M4.5 7.5h5M4.5 9.5h3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-400 hover:text-brand-500 transition"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-zinc-300 dark:text-zinc-700"
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <ScrollToNext />
    </section>
  );
}
