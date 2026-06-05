import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Briefcase, Rocket, Target, Sparkles } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";
import students from "@/assets/students-coding.jpg";
import ai from "@/assets/ai-innovation.jpg";
import campus from "@/assets/amrita-campus.jpg";
import hostel from "@/assets/hostel-canteen.png";

const FAQS = [
  { q: "What is CIA?", a: "Continuous Internal Assessment — tests, assignments and lab work spread across the semester that contribute to your final grade." },
  { q: "What is ESE?", a: "End Semester Examination — the final comprehensive exam at the end of each semester." },
  { q: "How do I maintain attendance?", a: "Attend every class, track yourself on the Amrita Student Portal, and stay above 75%. Medical leaves need proper documentation." },
  { q: "How do I join clubs?", a: "Attend the club orientations in weeks 2–3, fill the recruitment form for your chosen club, and show up for the first activity." },
  { q: "How do hostel passes work?", a: "Both Home Pass and Out Pass require a parent email request, faculty approval and proper authorization." },
  { q: "What is the slab system?", a: "Scholarship slabs: Slab 1 (CGPA 8.5+), Slab 2 (7.5+), Slab 3 (7.0+). Slabs downgrade if CGPA falls below the threshold." },
  { q: "What coding language should I learn first?", a: "Python is highly recommended — especially if you're targeting AI / ML / Data Science." },
];

const GALLERY = [
  { src: campus, span: "row-span-2", caption: "Academic Block" },
  { src: students, span: "", caption: "Hackathons" },
  { src: ai, span: "", caption: "Innovation Labs" },
  { src: hostel, span: "col-span-2", caption: "Campus Life" },
];

export function Gallery() {
  return (
    <Section id="gallery">
      <SectionHeader
        eyebrow="Gallery"
        title="Moments at Amrita"
        subtitle="Flash mobs, tournaments, hackathons and graduations — campus life never stops."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
        {GALLERY.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-3xl overflow-hidden group shadow-glow ${g.span}`}
          >
            <img src={g.src} alt={g.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-sm font-semibold">{g.caption}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {["Flash Mobs", "Inter-Campus Cricket", "Inter-Campus Handball", "Graduation Day", "Club Activities", "Hackathons", "Cultural Events"].map((t) => (
          <span key={t} className="text-xs px-3 py-1.5 rounded-full glass border border-border">{t}</span>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <motion.a
          href="https://www.collegebatch.com/21928-amrita-vishwa-vidyapeetham-in-amaravati"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hero-gradient text-white text-sm font-semibold shadow-glow"
        >
          Take a virtual classroom tour →
        </motion.a>
      </div>
    </Section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader eyebrow="FAQ" title="Quick Answers" subtitle="Everything new students ask in week one." />
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }}>
                  <Plus className="w-5 h-5 text-primary" />
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground mt-3">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AdmissionsPlacements() {
  return (
    <Section id="admissions" className="bg-mesh">
      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal>
          <GlassCard className="h-full">
            <Target className="w-9 h-9 text-primary mb-3" />
            <h3 className="text-3xl font-bold mb-2">Admissions</h3>
            <p className="text-muted-foreground mb-6 text-sm">Two pathways into Amrita Amaravati's B.Tech programs.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "AEEE", desc: "Amrita Entrance Examination — Engineering" },
                { name: "JEE", desc: "Joint Entrance Examination based admission" },
              ].map((a) => (
                <motion.div
                  key={a.name}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 bg-gradient-to-br from-primary/10 to-accent/10 border border-border"
                >
                  <div className="text-2xl font-bold text-gradient">{a.name}</div>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <Briefcase className="w-9 h-9 text-accent mb-3" />
            <h3 className="text-3xl font-bold mb-2">Placements</h3>
            <p className="text-muted-foreground mb-6 text-sm">Centralized placement process backed by a strong coding culture.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Sparkles, t: "Centralized Process" },
                { icon: Rocket, t: "Skill Development" },
                { icon: Target, t: "Coding Culture" },
                { icon: Briefcase, t: "Industry Readiness" },
              ].map((p) => (
                <div key={p.t} className="rounded-xl p-4 bg-muted/40 flex items-center gap-2">
                  <p.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{p.t}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const cols = [
    {
      title: "Quick Links",
      items: [
        { label: "About Campus", href: "#about" },
        { label: "Academics", href: "#academics" },
        { label: "Clubs", href: "#clubs" },
        { label: "Hostel & Campus", href: "#campus" },
        { label: "Gallery", href: "#gallery" },
      ],
    },
    {
      title: "Student Resources",
      items: [
        { label: "Amrita Student Portal", href: "https://students.amrita.edu/", external: true },
        { label: "AUMS Login", href: "https://amrita.edu/aums", external: true },
        { label: "Amrita Library", href: "https://www.amrita.edu/amrita-central-library/", external: true },
        { label: "NPTEL Courses", href: "https://nptel.ac.in/", external: true },
        { label: "LeetCode Practice", href: "https://leetcode.com/", external: true },
      ],
    },
    {
      title: "Campus Life",
      items: [
        { label: "Official Amrita Site", href: "https://www.amrita.edu/campus/amaravati/", external: true },
        { label: "Classroom Tour", href: "https://www.collegebatch.com/21928-amrita-vishwa-vidyapeetham-in-amaravati", external: true },
        { label: "Admissions (AEEE)", href: "https://www.amrita.edu/admissions/btech/", external: true },
        { label: "Chakravyuha Club", href: "#clubs" },
        { label: "Survival Guide", href: "#survival" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Amaravati, Andhra Pradesh", href: "https://maps.google.com/?q=Amrita+Vishwa+Vidyapeetham+Amaravati", external: true },
        { label: "admissions@av.amrita.edu", href: "mailto:admissions@av.amrita.edu", external: true },
        { label: "+91 8067-082-100", href: "tel:+918067082100", external: true },
        { label: "amrita.edu", href: "https://www.amrita.edu/", external: true },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-1">
          <h4 className="font-bold text-lg">
            <span className="text-gradient">Freshers' Companion</span>
          </h4>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            By students, for students — your unofficial onboarding guide to Amrita Vishwa Vidyapeetham, Amaravati.
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Not an official university website.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider">{col.title}</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.items.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    target={i.external ? "_blank" : undefined}
                    rel={i.external ? "noreferrer" : undefined}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Freshers' Companion · Crafted with ♥ for the Class of 2026
      </div>
    </footer>
  );
}
