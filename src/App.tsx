/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimulatorSection from './components/SimulatorSection';
import About from './components/About';
import Metrics from './components/Metrics';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-200 selection:text-green-900 scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-green-500 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <SimulatorSection />
        <About />
        <Metrics />
        <Services />
        <HowItWorks />
        <Differentials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
