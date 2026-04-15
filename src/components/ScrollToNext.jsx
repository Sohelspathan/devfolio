import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

export default function FloatingScrollButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is within 100px of the bottom of the page
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setIsAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to check initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      // Scroll back to the very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Find the next section and scroll to it
      const sections = Array.from(document.querySelectorAll("section, footer"));
      const scrollPosition = window.scrollY + 100;
      const nextSection = sections.find(
        (section) => section.offsetTop > scrollPosition,
      );

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback: If no section is found below, just scroll to the bottom
        const maxScrollHeight = Math.max(
          document.body.scrollHeight, 
          document.documentElement.scrollHeight
        );
        
        window.scrollTo({ 
          top: maxScrollHeight, 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "fixed bottom-8      z-40 flex items-center justify-center overflow-hidden rounded-full shadow-lg transition-all duration-300",
        "bg-brand-500 text-white hover:bg-brand-600 hover:scale-105 active:scale-95",
        "dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
        // Expand the width if we are at the bottom to fit the text
        isAtBottom ? "px-4 py-3 gap-2" : "p-3",
      )}
      aria-label={isAtBottom ? "Back to top" : "Scroll to next section"}
    >
      {isAtBottom ? (
        <>
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">
            Back to top
          </span>
        </>
      ) : (
        <ChevronDown className="w-6 h-6 animate-bounce" />
      )}
    </button>
  );
}
