import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = memo(function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-950 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 opacity-90 transform-gpu" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] transform-gpu"
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[100px] transform-gpu will-change-transform" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] -left-20 w-[600px] h-[600px] rounded-full bg-green-500/20 blur-[100px] transform-gpu will-change-transform" 
        />

        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[80px] transform-gpu will-change-transform" 
        />

        {/* Animated flow lines */}
        <div className="absolute inset-0 opacity-20 transform-gpu">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent w-full transform-gpu will-change-transform"
              style={{ top: `${20 + i * 15}%`, left: '-100%' }}
              animate={{
                left: ['100%', '-100%'],
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          <div className="max-w-3xl flex flex-col justify-center py-10 lg:py-0 text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Crédito rápido e sem <span className="text-green-400">burocracia</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              A Credaac oferece microcrédito para motoristas de aplicativo,
              comerciantes e trabalhadores CLT - mesmo com nome negativado. Tudo online,
              com segurança e atendimento humanizado.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full"
            >
              <a 
                href="#contato"
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
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base text-blue-200"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block h-full"
          >
            <div className="relative z-10 w-full h-full flex items-center justify-end">
              <img 
                src="https://i.imgur.com/mINuDjZ.webp" 
                alt="Pessoa sorrindo com celular" 
                fetchPriority="high"
                loading="eager"
                className="w-auto h-full max-w-full max-h-[600px] object-contain rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" 
                referrerPolicy="no-referrer" 
              />
            </div>
            {/* Decorative background element behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-800/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
