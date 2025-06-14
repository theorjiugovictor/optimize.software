import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import PainPointsSection from '@/components/sections/pain-points-section';
import FeaturesSection from '@/components/sections/features-section';
import BusinessBenefitsSection from '@/components/sections/business-benefits-section';
import CtaSection from '@/components/sections/cta-section';
import AboutSection from '@/components/sections/about-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PainPointsSection />
        <FeaturesSection />
        <BusinessBenefitsSection />
        <CtaSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
