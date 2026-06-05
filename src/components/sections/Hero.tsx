import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Code2, Brain, Trophy, Heart } from "lucide-react";
import { Counter, Section } from "@/components/Primitives";
import campus from "@/assets/amrita-campus.jpg";

const STATS = [
  { icon: Code2, label: "B.Tech Programs", value: 4, suffix: "" },
  { icon: Sparkles, label: "Student Clubs", value: 9, suffix: "+" },
  { icon: Heart, label: "Medical Support", value: 24, suffix: "/7" },
  { icon: Trophy, label: "Centralized Placements", value: 100, suffix: "%" },
];

const FLOATING = [
  { label: "Coding", icon: Code2, x: "8%", y: "20%", delay: 0 },
  { label: "AI", icon: Brain, x: "85%", y: "25%", delay: 0.5 },
  { label: "Innovation", icon: Sparkles, x: "12%", y: "70%", delay: 1 },
  { label: "Campus Life", icon: Heart, x: "82%", y: "72%", delay: 1.5 },
];

export function Hero() {
  return (
    <Section id="home" className="!pt-32 !pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={campus}
          alt="Amrita Amaravati campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70 dark:from-background/95 dark:via-background/90 dark:to-background/75" />
        <div className="absolute inset-0 bg-mesh opacity-60" />
      </div>

      {/* Floating elements */}
      {FLOATING.map((f) => (
        <motion.div
          key={f.label}
          className="absolute hidden md:flex glass rounded-2xl px-4 py-2 items-center gap-2 text-xs font-medium shadow-glow"
          style={{ left: f.x, top: f.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: f.delay + 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: f.delay }}
            className="flex items-center gap-2"
          >
            <f.icon className="w-4 h-4 text-primary" />
            {f.label}
          </motion.div>
        </motion.div>
      ))}

      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-highlight" />
            Class of 2026 · Onboarding Guide
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]">
            Welcome to <br />
            <span className="text-gradient animate-gradient">Amrita Amaravati</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your complete guide to surviving, thriving, and excelling during your college journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#campus"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full bg-hero-gradient text-white font-semibold shadow-glow inline-flex items-center justify-center gap-2"
            >
              Explore Campus Life <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#academics"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full glass font-semibold inline-flex items-center justify-center gap-2 border border-border"
            >
              Start Your Journey
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 text-center shadow-glow"
            >
              <s.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
