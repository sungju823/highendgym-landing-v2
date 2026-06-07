import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCtaBar from "@/components/layout/StickyCtaBar";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DiffSection from "@/components/sections/DiffSection";
import FacilitySection from "@/components/sections/FacilitySection";
import SolutionSection from "@/components/sections/SolutionSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import UrgencySection from "@/components/sections/UrgencySection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main>
        <HeroSection />
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="diff">
          <DiffSection />
        </section>
        <section id="facility">
          <FacilitySection />
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
