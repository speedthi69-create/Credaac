/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import { trackEvent } from './utils/analytics';

// Code Splitting (Carregamento Inteligente)
const About = lazy(() => import('./components/About'));
const Metrics = lazy(() => import('./components/Metrics'));
const Services = lazy(() => import('./components/Services'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Differentials = lazy(() => import('./components/Differentials'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    trackEvent({ event: 'page_view', page_path: window.location.pathname });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-200 selection:text-green-900 scroll-smooth transform-gpu">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-green-500 origin-left z-50 transform-gpu will-change-transform"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Metrics />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Differentials />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24" />}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
