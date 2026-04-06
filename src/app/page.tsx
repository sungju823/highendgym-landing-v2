import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCtaBar from "@/components/layout/StickyCtaBar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DiffSection from "@/components/sections/DiffSection";
import SolutionSection from "@/components/sections/SolutionSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import UrgencySection from "@/components/sections/UrgencySection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="diff">
          <DiffSection />
        </section>
        <section id="solution">
          <SolutionSection />
        </section>
        <section id="authority">
          <AuthoritySection />
        </section>
        <section id="urgency">
          <UrgencySection />
        </section>
        <CtaSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
