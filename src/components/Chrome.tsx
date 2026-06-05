import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, ArrowUp, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import logo from "@/assets/amrita-logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Clubs", href: "#clubs" },
  { label: "Campus", href: "#campus" },
  { label: "Survival", href: "#survival" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-hero-gradient origin-left z-[100]"
    />
  );
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Amrita Vishwa Vidyapeetham" className="h-9 w-auto" />
          <span className="hidden md:block font-display font-semibold text-sm leading-tight">
            Freshers' <br /> <span className="text-gradient">Companion</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg glass hover:scale-110 transition-transform"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden p-2 rounded-lg glass"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border px-4 py-3"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-hero-gradient text-white shadow-glow"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}

export function QuickTipsBanner() {
  const tips = [
    "💡 Maintain 75% attendance — it's mandatory!",
    "🚀 Join Chakravyuha for hackathons and innovation",
    "📚 Start coding from Day 1 — Python is a great first pick",
    "🏠 Hostel entry closes at 8:40 PM, don't be late!",
    "⭐ Slab 1 needs CGPA 8.5+ — aim high from semester one",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % tips.length), 4000);
    return () => clearInterval(id);
  }, [tips.length]);
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block max-w-xs">
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass rounded-2xl px-4 py-3 text-xs font-medium shadow-glow-accent"
      >
        {tips[i]}
      </motion.div>
    </div>
  );
}
