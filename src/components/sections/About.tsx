import { motion } from "framer-motion";
import { MapPin, Trees, Plane, GraduationCap, Building2, Sparkles } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";
import campus from "@/assets/amrita-campus.jpg";

const HIGHLIGHTS = [
  { icon: Trees, title: "100-acre Green Campus", text: "Sprawling lawns, mature trees and sustainable architecture in the new greenfield capital." },
  { icon: MapPin, title: "Krishna River City", text: "Located in Amaravati — surrounded by natural wonders, heritage sites and modern infrastructure." },
  { icon: Plane, title: "Multimodal Connectivity", text: "Easily reachable by road, rail and air from the IT and business hubs of AP and Telangana." },
  { icon: Building2, title: "Modern Labs & Tools", text: "Industry-grade laboratories, design software and research facilities across departments." },
];

const PROGRAMS = [
  "B.Tech (CSE, CAI, CCE, AIDS)",
  "Integrated M.Sc. Physics",
  "M.Sc. Physics",
  "M.Sc. Data Science",
  "MBA",
];

export function About() {
  return (
    <Section id="about" className="bg-mesh">
      <SectionHeader
        eyebrow="About the Campus"
        title="Amrita Vishwa Vidyapeetham · Amaravati"
        subtitle="A research-intensive, multi-disciplinary university in the new capital of Andhra Pradesh — built around sustainability, innovation and service to society."
      />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden shadow-glow h-full min-h-[360px]"
          >
            <img src={campus} alt="Amrita Amaravati academic block" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[10px] font-semibold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-accent" /> Greenfield Capital
              </span>
              <h3 className="font-bold text-2xl mt-3">Amaravati Campus</h3>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              Amrita Vishwa Vidyapeetham is a leading multi-disciplinary, research-intensive
              university establishing its campus in Amaravati. Nestled amidst the scenic beauty
              of the <span className="text-gradient font-semibold">Krishna River</span> and
              surrounded by natural wonders and historical sites, the city embodies
              sustainability and liveability.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
              We are building one of the most buoyant centres of research, education and
              technological advancement in this new capital. Equipped with modern laboratories
              and software tools, our departments shape graduates with a solution-oriented
              mindset and strong ethical standards — quality engineers dedicated to serving
              society and the nation.
            </p>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">Programs Offered</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROGRAMS.map((p) => (
                  <span key={p} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-border font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 h-full border border-border"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-glow">
                <h.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold mb-1">{h.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
