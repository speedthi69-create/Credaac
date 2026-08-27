import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/modern_empty_bank_credaac_1787704604012.jpg';

const Hero = memo(function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-950 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-blue-950/80" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        {/* Glowing orbs using static radial gradients instead of expensive CSS blur */}
        <div 
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full" 
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
        />
        
        <div 
          className="absolute bottom-[-20%] -left-20 w-[600px] h-[600px] rounded-full" 
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)' }}
        />

        <div 
          className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full" 
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }}
        />

        {/* Animated flow lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent w-full"
              style={{ top: `${20 + i * 15}%`, left: 0 }}
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl py-10 lg:py-20">
          <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Crédito rápido e sem <span className="text-green-400">burocracia</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed mx-auto"
            >
              A Credaac oferece microcrédito para motoristas de aplicativo,
              comerciantes e trabalhadores CLT - mesmo com nome negativado. Tudo online,
              com segurança e atendimento humanizado.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full"
            >
              <a 
                href="https://wa.me/554791279298?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20cr%C3%A9dito."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-blue-950 font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-lg"
              >
                Quero meu crédito agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-blue-200"
            >
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
                <span>Análise justa</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
                <span>Sem complicação</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
