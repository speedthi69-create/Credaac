import { motion } from 'motion/react';

interface Props {
  variant?: 'light' | 'white';
}

export default function SectionBackground({ variant = 'light' }: Props) {
  const isLight = variant === 'light';
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base background color */}
      <div className={`absolute inset-0 ${isLight ? 'bg-slate-50' : 'bg-white'}`} />

      {/* Subtle dotted grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating soft gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] bg-blue-300/20"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] bg-green-300/20"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[90px] bg-cyan-300/20"
      />
      
      {/* Soft gradient mask to ensure text in the center remains highly readable */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isLight ? 'from-slate-50/50 via-transparent to-slate-50/50' : 'from-white/50 via-transparent to-white/50'}`} />
    </div>
  );
}
