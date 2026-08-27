import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, FileText, BadgeDollarSign, ArrowRight } from 'lucide-react';
import SectionBackground from './SectionBackground';

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Entre em contato",
    description: "Clique no botão abaixo, preencha o formulário ou fale diretamente com a nossa equipe pelo WhatsApp. Rápido e sem enrolação."
  },
  {
    id: 2,
    icon: FileText,
    title: "Envie sua documentação",
    description: "Solicitamos apenas o básico: um documento com foto e as informações necessárias para analisar seu perfil. Tudo feito online, com total segurança."
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Receba seu crédito",
    description: "Após a análise, você assina o contrato digitalmente e o valor é liberado. Sem surpresas, sem cobranças escondidas."
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white relative overflow-hidden z-0">
      <SectionBackground variant="white" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Simples assim. Em 3 passos.
          </motion.h2>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Background Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-gray-100 -translate-x-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-green-500 origin-top -translate-x-1/2 rounded-full"
            style={{ scaleY }}
          />
          
          <div className="space-y-12 lg:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between">
                  {/* Step Number Circle (Center on Desktop, Left on Mobile) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center z-20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-blue-900"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="relative z-10 font-bold text-gray-400"
                      whileInView={{ color: "#ffffff" }}
                      viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.id}
                    </motion.span>
                  </div>

                  {/* Content - alternating left/right on desktop */}
                  <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-blue-50 transition-colors group"
                    >
                      <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform ${isEven ? 'md:ml-auto' : ''}`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://wa.me/554791279298?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20cr%C3%A9dito."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg"
          >
            Solicitar crédito agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
