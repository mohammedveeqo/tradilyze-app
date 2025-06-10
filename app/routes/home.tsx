// app/page.tsx
import { useEffect } from 'react';
import { Navbar } from 'app/components/homepage/navbar';
import { Hero } from 'app/components/homepage/hero';
import  Features  from 'app/components/homepage/features';
import { HowItWorks } from 'app/components/homepage/howItWorks';
import { Pricing } from 'app/components/homepage/pricing';
import { CTA } from 'app/components/homepage/CTA';
import { Footer } from 'app/components/homepage/footer';
import { ScrollToTop } from 'app/components/shared/ScrollToTop';
import { useScroll } from 'app/hooks/useScroll';

export default function HomePage() {
  const scrollY = useScroll();

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
