import { motion } from "framer-motion";
import { Check, X, Quote, Brain, Clock, Activity, HeartHandshake, Smile } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";

const DOS = [
  "Carry ID card",
  "Attend classes",
  "Join clubs",
  "Build connections",
  "Explore opportunities",
  "Participate confidently",
];
const DONTS = [
  "Ignore attendance",
  "Delay assignments",
  "Skip classes",
  "Avoid events",
];

const ADVICE = [
  "Never be afraid to showcase your talent.",
  "Participate actively in events and competitions.",
  "Start coding early and learn to use AI effectively.",
];

const MENTAL = [
  { icon: Clock, t: "Time Management" },
  { icon: Brain, t: "Stress Management" },
  { icon: Smile, t: "Healthy Study Habits" },
  { icon: Activity, t: "Physical Fitness" },
  { icon: HeartHandshake, t: "Seeking Support" },
];

const WEEKS = [
  { w: "Week 1", t: "Settling In", desc: "Move in, get your ID, learn the campus layout." },
  { w: "Week 2", t: "Making Friends", desc: "Connect with classmates and hostel-mates." },
  { w: "Week 3", t: "Exploring Clubs", desc: "Attend orientations and pick 1–2 clubs." },
  { w: "Week 4", t: "Academic Adjustment", desc: "Build study routines before CIA 1." },
];

export function Survival() {
  return (
    <Section id="survival">
      <SectionHeader
        eyebrow="Survival Kit"
        title="Thrive From Day One"
        subtitle="The dos, don'ts, mental-health essentials and a first-month roadmap to keep you on track."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Reveal>
          <GlassCard className="border-2 border-secondary/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-secondary" />
              </span>
              <h3 className="text-2xl font-bold">Do's</h3>
            </div>
            <ul className="space-y-2">
              {DOS.map((d) => (
                <li key={d} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {d}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="border-2 border-destructive/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              <h3 className="text-2xl font-bold">Don'ts</h3>
            </div>
            <ul className="space-y-2">
              {DONTS.map((d) => (
                <li key={d} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  {d}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      {/* Senior advice */}
      <Reveal>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {ADVICE.map((a, i) => (
            <motion.div
              key={a}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-2" />
              <p className="font-medium">{a}</p>
              <div className="text-xs text-muted-foreground mt-3">— Senior #{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* Mental Health */}
      <Reveal>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-5 text-center">Mental Health Essentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MENTAL.map((m, i) => (
              <motion.div
                key={m.t}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <m.icon className="w-7 h-7 mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium">{m.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* First month timeline */}
      <Reveal>
        <div className="rounded-3xl bg-mesh p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center">Your First Month</h3>
          <div className="grid md:grid-cols-4 gap-4 relative">
            {WEEKS.map((w, i) => (
              <motion.div
                key={w.w}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 relative"
              >
                <div className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-hero-gradient text-white text-xs font-bold shadow-glow">
                  {w.w}
                </div>
                <h4 className="font-bold mt-3">{w.t}</h4>
                <p className="text-xs text-muted-foreground mt-1">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
