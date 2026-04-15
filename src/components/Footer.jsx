export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
        <span className="font-mono">© {new Date().getFullYear()} Sohel Pathan</span>
        <span>Made by Sohel, assisted by AI · </span>
      </div>
    </footer>
  )
}