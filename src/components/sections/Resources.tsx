import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code, Trophy, Youtube } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";

const LEARNING = [
  { name: "NPTEL", url: "https://nptel.ac.in/" },
  { name: "Coursera", url: "https://www.coursera.org/" },
  { name: "Udemy", url: "https://www.udemy.com/" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
  { name: "LeetCode", url: "https://leetcode.com/" },
  { name: "CodeChef", url: "https://www.codechef.com/" },
  { name: "HackerRank", url: "https://www.hackerrank.com/" },
];
const TOOLS = [
  { name: "VS Code", url: "https://code.visualstudio.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "ChatGPT", url: "https://chat.openai.com/" },
  { name: "Canva", url: "https://www.canva.com/" },
  { name: "Figma", url: "https://www.figma.com/" },
];

const YT = [
  {
    name: "Striver — take U forward",
    handle: "@takeUforward",
    url: "https://www.youtube.com/@takeUforward",
    desc: "The go-to channel for mastering algorithmic problem-solving and cracking top-tier product-based interviews.",
    gradient: "from-primary to-accent",
  },
  {
    name: "Love Babbar",
    handle: "@LoveBabbar",
    url: "https://www.youtube.com/@LoveBabbar",
    desc: "Highly popular among Indian engineering students for structured Data Structures & Algorithms preparation.",
    gradient: "from-accent to-highlight",
  },
  {
    name: "Programming with Mosh",
    handle: "@programmingwithmosh",
    url: "https://www.youtube.com/@programmingwithmosh",
    desc: "Clear, step-by-step beginner tutorials on Python, C++, JavaScript and modern web stacks.",
    gradient: "from-secondary to-primary",
  },
  {
    name: "3Blue1Brown",
    handle: "@3blue1brown",
    url: "https://www.youtube.com/@3blue1brown",
    desc: "Unmatched visual intuition for linear algebra, calculus and probability — the math behind AI and ML.",
    gradient: "from-highlight to-accent",
  },
];

const SPORTS = ["Cricket", "Football", "Volleyball", "Basketball", "Handball", "Box Cricket", "Chess", "Carrom", "Table Tennis"];

export function Resources() {
  return (
    <Section id="resources" className="bg-mesh">
      <SectionHeader
        eyebrow="Resources & Sports"
        title="Level Up Your Skills"
        subtitle="The platforms, tools, mentors and communities that will shape your engineering journey."
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <Reveal>
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Learning Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {LEARNING.map((l) => (
                <motion.a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-sm font-medium border border-border cursor-pointer inline-flex items-center gap-1.5"
                >
                  {l.name}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Development Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <motion.a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-br from-accent/15 to-secondary/15 text-sm font-medium border border-border cursor-pointer inline-flex items-center gap-1.5"
                >
                  {t.name}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>

      {/* YouTube Channels */}
      <Reveal>
        <div className="mb-6 flex items-center gap-2">
          <Youtube className="w-7 h-7 text-highlight" />
          <h3 className="text-2xl md:text-3xl font-bold">Effective YouTube Channels</h3>
        </div>
        <p className="text-muted-foreground mb-8 text-sm max-w-2xl">
          Curated mentors who teach the way college lectures often can't — from DSA mastery to AI intuition.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {YT.map((y, i) => (
            <motion.a
              key={y.name}
              href={y.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-5 shadow-glow border border-border block relative overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${y.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${y.gradient} flex items-center justify-center mb-4 shadow-glow`}>
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold leading-tight mb-1">{y.name}</h4>
              <span className="text-[11px] text-muted-foreground font-mono">{y.handle}</span>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{y.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
                Watch on YouTube <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </Reveal>

      {/* Sports */}
      <Reveal>
        <div className="mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-highlight" />
          <h3 className="text-2xl font-bold">Sports & Activities</h3>
        </div>
        <p className="text-muted-foreground mb-6 text-sm">
          Active student communities and regular inter-campus tournaments — pick your game.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {SPORTS.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass rounded-2xl p-4 text-center text-xs md:text-sm font-medium"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
