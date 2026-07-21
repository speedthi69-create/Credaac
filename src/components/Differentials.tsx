import { motion } from 'motion/react';
import { SearchX, Ban, HeartHandshake, Laptop, FileSignature, Handshake } from 'lucide-react';

const differentials = [
  {
    icon: SearchX,
    title: "Sem consulta ao SPC/Serasa",
    description: "Negativado? Sem problema. Aqui não fazemos consulta ao Serasa nem ao SPC. O que importa é a sua situação atual, não o passado."
  },
  {
    icon: Ban,
    title: "Sem taxa de adesão",
    description: "Nada de cobranças para você começar. Você só paga o que foi combinado, sem taxas escondidas nem surpresas na hora do pagamento."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description: "A Credaac não é agiota. Nossa equipe atende com respeito, ouve a sua situação e busca sempre a melhor condição - para você e para a gente."
  },
  {
    icon: Laptop,
    title: "100% online",
    description: "De qualquer lugar do Brasil. Sem precisar sair de casa, sem filas, sem perda de tempo."
  },
  {
    icon: FileSignature,
    title: "Contrato transparente",
    description: "Tudo documentado, assinado digitalmente e com clareza total sobre o que foi acordado. Segurança para você e para nós."
  },
  {
    icon: Handshake,
    title: "Negociação flexível",
    description: "Passou por uma dificuldade? A gente conversa. Buscamos um acordo que caiba no seu momento - porque entendemos que imprevistos acontecem."
  }
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Por que escolher a Credaac?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed opacity-90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
