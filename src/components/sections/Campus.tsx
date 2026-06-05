import { motion } from "framer-motion";
import { Wind, FlaskConical, BookMarked, Presentation, Dumbbell, HeartPulse, Wifi, Shirt, Sparkles, Building2, Utensils, Clock, ShieldAlert, Moon, IdCard, Ban } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeader } from "@/components/Primitives";
import hostel from "@/assets/hostel-canteen.png";

const CAMPUS = [
  { icon: Wind, label: "AC Classrooms" },
  { icon: FlaskConical, label: "Equipped Labs" },
  { icon: BookMarked, label: "Library" },
  { icon: Presentation, label: "Seminar Halls" },
  { icon: Dumbbell, label: "Sports Facilities" },
  { icon: HeartPulse, label: "Medical Centre" },
];

const HOSTEL_FACS = [
  { icon: Wind, label: "AC & Non-AC Rooms" },
  { icon: Building2, label: "2 / 3 / 4 Sharing" },
  { icon: Wifi, label: "Wi-Fi in Every Room" },
  { icon: Shirt, label: "Weekly Laundry" },
  { icon: Sparkles, label: "Regular Cleaning" },
  { icon: Dumbbell, label: "Gym in Both Hostels" },
  { icon: Utensils, label: "Night Canteen (Boys)" },
];

const MESS = [
  { meal: "Breakfast", time: "7:00 – 9:00 AM" },
  { meal: "Lunch", time: "12:15 – 2:00 PM" },
  { meal: "Snacks", time: "5:15 – 6:15 PM" },
  { meal: "Dinner", time: "7:30 – 9:00 PM" },
];

const RULES = [
  { icon: Clock, text: "Hostel entry before 8:40 PM" },
  { icon: Ban, text: "No outside food" },
  { icon: Utensils, text: "No food delivery after 8 PM" },
  { icon: ShieldAlert, text: "No electrical appliances" },
  { icon: Moon, text: "Quiet hours 11 PM – 5:30 AM" },
  { icon: Ban, text: "No roaming after 9 PM" },
  { icon: IdCard, text: "ID card mandatory" },
];

export function Campus() {
  return (
    <Section id="campus">
      <SectionHeader
        eyebrow="Campus & Hostel"
        title="Your Home Away From Home"
        subtitle="Modern facilities, vibrant residences, and a campus designed for student success."
      />

      {/* Hostel showcase */}
      <Reveal>
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-glow">
          <img src={hostel} alt="Amrita Amaravati hostels and canteen" className="w-full h-[280px] md:h-[460px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 grid md:grid-cols-3 gap-4">
            {[
              { title: "Girls Hostel", info: "10 floors · 2 lifts", c: "from-accent to-primary" },
              { title: "Canteen", info: "9:00 AM – 8:30 PM", c: "from-highlight to-accent" },
              { title: "Boys Hostel", info: "10 floors · 3–4 lifts", c: "from-primary to-secondary" },
            ].map((b) => (
              <motion.div
                key={b.title}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-4"
              >
                <div className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${b.c}`}>
                  {b.title}
                </div>
                <div className="font-semibold mt-1">{b.info}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Campus overview */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
        {CAMPUS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-4 text-center">
              <c.icon className="w-7 h-7 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">{c.label}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Hostel facilities + Mess + Rules */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <Reveal>
          <GlassCard className="h-full">
            <h3 className="text-xl font-bold mb-4">Hostel Facilities</h3>
            <ul className="space-y-2.5">
              {HOSTEL_FACS.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-primary">
                    <f.icon className="w-4 h-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Utensils className="w-5 h-5 text-highlight" />Mess Timings</h3>
            <div className="space-y-3">
              {MESS.map((m) => (
                <div key={m.meal} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <span className="font-semibold">{m.meal}</span>
                  <span className="text-sm text-muted-foreground font-mono">{m.time}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="h-full">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-destructive" />Hostel Rules</h3>
            <ul className="space-y-2">
              {RULES.map((r) => (
                <li key={r.text} className="flex gap-2 text-sm">
                  <r.icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {r.text}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      {/* Pass system */}
      <Reveal>
        <div className="rounded-3xl p-8 bg-accent-gradient text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Pass System</h3>
          <p className="opacity-90 max-w-2xl mx-auto">
            Home Pass and Out Pass approvals require a <strong>parent email request</strong>,
            <strong> faculty approval</strong>, and <strong>proper authorization</strong>.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
