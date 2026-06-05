import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Navbar, ScrollProgress, BackToTop, QuickTipsBanner } from "@/components/Chrome";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academics } from "@/components/sections/Academics";
import { Clubs } from "@/components/sections/Clubs";
import { Campus } from "@/components/sections/Campus";
import { Survival } from "@/components/sections/Survival";
import { Resources } from "@/components/sections/Resources";
import { Gallery, FAQ, AdmissionsPlacements, Footer } from "@/components/sections/Misc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freshers' Companion — Amrita Vishwa Vidyapeetham, Amaravati" },
      { name: "description", content: "Your complete guide to surviving, thriving, and excelling at Amrita Amaravati — academics, clubs, hostel life, resources and more." },
      { property: "og:title", content: "Freshers' Companion — Amrita Amaravati" },
      { property: "og:description", content: "Modern onboarding platform for newly admitted Amrita Amaravati students." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Academics />
          <Clubs />
          <Campus />
          <Survival />
          <Resources />
          <Gallery />
          <AdmissionsPlacements />
          <FAQ />
        </main>
        <Footer />
        <BackToTop />
        <QuickTipsBanner />
      </div>
    </ThemeProvider>
  );
}
