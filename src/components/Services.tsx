import { motion } from 'motion/react';
import { Wallet, Car, Briefcase, Store } from 'lucide-react';
import SectionBackground from './SectionBackground';

const services = [
  {
    id: 1,
    icon: Wallet,
    title: "Microcrédito",
    subtitle: "Para quem precisa de capital rápido",
    description: "Liberamos crédito de forma ágil e sem burocracia. Ideal para quem tem nome negativado e precisa de uma solução real.",
    bullets: [
      "Processo 100% online",
      "Aprovação rápida",
      "Análise justa"
    ]
  },
  {
    id: 2,
    icon: Car,
    title: "Motoristas e Motoboys",
    subtitle: "Você trabalha duro. Seu crédito não pode ser diferente.",
    description: "Somos especializados no perfil de quem trabalha por conta própria. Sem exigências impossíveis, sem enrolação - direto ao ponto.",
    bullets: [
      "Atende autônomos",
      "Documentação simples",
      "Dinheiro na conta rapidinho"
    ]
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Crédito para CLT",
    subtitle: "Tem carteira assinada? Ainda melhor.",
    description: "Para trabalhadores com vínculo empregatício, oferecemos condições especiais com as melhores taxas do mercado.",
    bullets: [
      "Para quem tem carteira assinada",
      "Condições diferenciadas",
      "Contrato digital e seguro"
    ]
  },
  {
    id: 4,
    icon: Store,
    title: "Comerciantes",
    subtitle: "Sua loja precisa girar. A gente ajuda.",
    description: "Capital de giro para pequenos e médios comerciantes com loja física. Sem complicação, sem taxa de adesão.",
    bullets: [
      "Para lojistas e pequenos empreendedores",
      "Sem taxa de adesão",
      "Atendimento personalizado"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">
      <SectionBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            O que a Credaac oferece para você
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Soluções pensadas para a sua realidade, sem exigências irreais.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{service.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
