import { motion } from 'motion/react';
import { ShieldCheck, Clock } from 'lucide-react';
import SectionBackground from './SectionBackground';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white relative overflow-hidden z-0">
      <SectionBackground variant="white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-blue-50 text-blue-700 font-medium text-sm">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Quem Somos
              </div>
              <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-500 font-medium text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Leitura: 1 min
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Crédito com respeito. Do jeito que deveria ser.
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                A Credaac nasceu de um propósito simples: oferecer crédito de verdade para quem mais precisa - e com o tratamento que todo cliente merece.
              </p>
              <p>
                Somos uma securitizadora em funcionamento em todo o Brasil, especializada em microcrédito para motoristas de aplicativo, motoboys, comerciantes e trabalhadores com carteira assinada. Operamos de forma 100% online, com contrato digital e processo transparente do início ao fim.
              </p>
              <p>
                Sabemos que muita gente enfrenta dificuldades para conseguir crédito no mercado formal - nome sujo, burocracia, juros absurdos. A Credaac existe para mudar isso. Aqui, o cliente é tratado com seriedade, honestidade e, acima de tudo, respeito.
              </p>
              <p className="font-semibold text-gray-900 pt-2 text-xl">
                Porque crédito não deveria ser sinônimo de problema.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 relative">
              <img 
                src="https://i.imgur.com/PBo2dDo.png" 
                alt="Atendimento humanizado e online" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Seguro & Transparente</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
