import { motion } from "framer-motion";
import { Cpu, Brain, Radio, Database, CheckCircle2, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";

const BRANCHES = [
  { code: "CSE", name: "Computer Science & Engineering", icon: Cpu, gradient: "from-primary to-accent" },
  { code: "CAI", name: "Artificial Intelligence", icon: Brain, gradient: "from-accent to-secondary" },
  { code: "CCE", name: "Computation & Communication Engg.", icon: Radio, gradient: "from-secondary to-primary" },
  { code: "AIDS", name: "AI & Data Science", icon: Database, gradient: "from-highlight to-accent" },
];

const TIMELINE = ["Semester Start", "CIA 1", "CIA 2", "CIA 3", "Lab Exams", "ESE"];

const SLABS = [
  { name: "Slab 1", req: "CGPA 8.5+", tier: 1, color: "from-highlight to-accent" },
  { name: "Slab 2", req: "CGPA 7.5+", tier: 2, color: "from-accent to-primary" },
  { name: "Slab 3", req: "CGPA 7.0+", tier: 3, color: "from-primary to-secondary" },
];

const CGPA_TIPS = [
  "Follow faculty resources",
  "Complete assignments early",
  "Revise regularly",
  "Maintain consistency",
  "Balance academics and health",
  "Learn at least one programming language from year one",
  "Python recommended for AI & ML aspirants",
];

export function Academics() {
  return (
    <Section id="academics">
      <SectionHeader
        eyebrow="Academic Life"
        title="Your B.Tech Roadmap"
        subtitle="Four future-focused programs, a structured assessment system, and the support to help you excel."
      />

      {/* Branches */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {BRANCHES.map((b, i) => (
          <Reveal key={b.code} delay={i * 0.08}>
            <GlassCard className="h-full">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-white mb-4`}>
                <b.icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-1">{b.code}</div>
              <h3 className="font-semibold text-lg leading-tight">{b.name}</h3>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Assessment + Timeline */}
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        <Reveal>
          <GlassCard className="h-full">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-2xl font-bold mb-4">Academic Structure</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">CIA</h4>
                <p className="text-sm text-muted-foreground">Continuous Internal Assessment — tests, assignments and lab work spread across the semester.</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent">ESE</h4>
                <p className="text-sm text-muted-foreground">End Semester Examination — the final comprehensive exam that defines your grade.</p>
              </div>
              <div className="pt-2 mt-2 border-t border-border">
                <h4 className="font-semibold mb-1">Attendance Rules</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />Minimum 75% attendance required</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />Tracked through the Amrita Student Portal</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />Hostel stay during class hours needs medical approval</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <GraduationCap className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-6">Semester Timeline</h3>
            <ol className="relative border-l-2 border-dashed border-primary/40 ml-3 space-y-5">
              {TIMELINE.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-6"
                >
                  <span className="absolute -left-3 w-6 h-6 rounded-full bg-hero-gradient text-white text-xs font-bold flex items-center justify-center shadow-glow">
                    {i + 1}
                  </span>
                  <span className="font-medium">{t}</span>
                </motion.li>
              ))}
            </ol>
          </GlassCard>
        </Reveal>
      </div>

      {/* CGPA & Slabs */}
      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal>
          <GlassCard className="lg:col-span-2 h-full">
            <TrendingUp className="w-8 h-8 text-highlight mb-3" />
            <h3 className="text-2xl font-bold mb-4">CGPA Success Guide</h3>
            <ul className="space-y-2.5">
              {CGPA_TIPS.map((t) => (
                <li key={t} className="flex gap-2 text-sm">
                  <span className="text-highlight mt-1">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
          {SLABS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotate: -1 }}
                className={`rounded-3xl p-6 h-full bg-gradient-to-br ${s.color} text-white shadow-glow-accent relative overflow-hidden`}
              >
                <div className="absolute -right-6 -top-6 text-[8rem] font-bold opacity-15 leading-none">
                  {s.tier}
                </div>
                <div className="relative">
                  <div className="text-sm opacity-80 font-semibold uppercase tracking-wider">{s.name}</div>
                  <div className="text-3xl font-bold mt-1">{s.req}</div>
                  <p className="text-sm opacity-90 mt-6">
                    Scholarship tier {s.tier}. Slabs downgrade if your CGPA falls below the threshold.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
