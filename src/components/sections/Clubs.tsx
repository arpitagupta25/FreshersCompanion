import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Trophy, Code2, Brain, Bot, Music, Mic, Palette, BookOpen, Users, Sparkles, ChevronRight } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";

const CLUBS = [
  { name: "Relu", tag: "Refining Logic & Unleashing AI", icon: Brain, color: "from-accent to-primary" },
  { name: "Prachurya", tag: "Coding Club", icon: Code2, color: "from-primary to-secondary" },
  { name: "Robotics Club", tag: "Robotics & Automation", icon: Bot, color: "from-secondary to-accent" },
  { name: "Raksha", tag: "Student Voice & Representation", icon: Users, color: "from-highlight to-accent" },
  { name: "NrityaSparsh", tag: "Dance Club", icon: Sparkles, color: "from-accent to-highlight" },
  { name: "Saptaswara", tag: "Singing Club", icon: Music, color: "from-primary to-accent" },
  { name: "Avinya", tag: "Literary Club", icon: BookOpen, color: "from-secondary to-primary" },
  { name: "Advika", tag: "Art & Craft Club", icon: Palette, color: "from-highlight to-secondary" },
];

const QUIZ_OPTIONS = [
  { label: "Coding", icon: Code2, club: "Prachurya & Chakravyuha" },
  { label: "AI", icon: Brain, club: "Relu" },
  { label: "Robotics", icon: Bot, club: "Robotics Club" },
  { label: "Dance", icon: Sparkles, club: "NrityaSparsh" },
  { label: "Music", icon: Music, club: "Saptaswara" },
  { label: "Public Speaking", icon: Mic, club: "Raksha" },
  { label: "Art", icon: Palette, club: "Advika" },
  { label: "Writing", icon: BookOpen, club: "Avinya" },
];

export function Clubs() {
  const [pick, setPick] = useState<string | null>(null);

  const handlePick = (label: string, club: string) => {
    setPick(club);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <Section id="clubs" className="bg-mesh">
      <SectionHeader
        eyebrow="Communities"
        title="Find Your Tribe"
        subtitle="From hackathons to dance floors — there's a club for every passion."
      />

      {/* Featured */}
      <Reveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative rounded-3xl overflow-hidden mb-12 bg-hero-gradient text-white p-8 md:p-12 shadow-glow-accent"
        >
          <div className="absolute inset-0 bg-mesh opacity-30" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest bg-white/20 rounded-full px-3 py-1 mb-3">
                <Trophy className="w-3 h-3" /> Featured Club
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">Chakravyuha</h3>
              <p className="text-lg opacity-90 mb-4">Hackathons. Innovation. Problem Solving.</p>
              <div className="flex flex-wrap gap-2">
                {["Hackathons", "Coding Challenges", "Problem Solving", "Team Collab", "Technical Growth"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/15 backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="hidden md:flex w-40 h-40 mx-auto rounded-full border-2 border-dashed border-white/40 items-center justify-center"
            >
              <Trophy className="w-16 h-16" />
            </motion.div>
          </div>
        </motion.div>
      </Reveal>

      {/* Other clubs grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {CLUBS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-5 h-full cursor-pointer relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-3 group-hover:bg-white/20`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold group-hover:text-white transition-colors">{c.name}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-white/90 mt-1">{c.tag}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Club finder quiz */}
      <Reveal>
        <GlassCard className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Club Finder Quiz</span>
            <h3 className="text-3xl font-bold mt-2">What interests you the most?</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {QUIZ_OPTIONS.map((o) => (
              <motion.button
                key={o.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handlePick(o.label, o.club)}
                className="p-4 rounded-2xl glass border border-border hover:border-primary transition-colors text-center"
              >
                <o.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">{o.label}</div>
              </motion.button>
            ))}
          </div>
          <AnimatePresence>
            {pick && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-5 rounded-2xl bg-hero-gradient text-white text-center"
              >
                <Sparkles className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">We recommend joining</p>
                <p className="text-2xl font-bold mt-1">{pick}</p>
                <a href="#campus" className="inline-flex items-center gap-1 mt-3 text-sm opacity-90 hover:opacity-100">
                  Explore campus next <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
