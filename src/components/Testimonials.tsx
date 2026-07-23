import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import SectionBackground from './SectionBackground';

const testimonials = [
  {
    id: 1,
    name: 'Leandro Meireles',
    role: 'Motorista de Aplicativo',
    content: 'Consegui o crédito que precisava para consertar meu carro e voltar a trabalhar. O processo foi sem burocracia e muito rápido! Recomendo a todos.',
    rating: 5,
    highlight: true,
  },
  {
    id: 2,
    name: 'Isadora Ribeiro',
    role: 'Empreendedora',
    content: 'Atendimento excelente! Estava com o nome restrito e achei que não conseguiria, mas a Credaac confiou no meu trabalho e me ajudou a investir no meu negócio.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fábio Junqueira',
    role: 'Autônomo',
    content: 'Processo 100% online e muito transparente. Não teve taxa antecipada e o dinheiro caiu na minha conta no mesmo dia. Empresa super confiável.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Vanessa Medeiros',
    role: 'Comerciante',
    content: 'Precisava de capital de giro rápido para aproveitar uma oportunidade de estoque. A Credaac foi ágil e me atendeu super bem. Sem dor de cabeça!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Roberto Vasconcelos',
    role: 'Entregador',
    content: 'Estava precisando trocar o pneu da moto e não tinha limite no cartão. O microcrédito me salvou e as parcelas couberam direitinho no meu bolso.',
    rating: 5,
    highlight: true,
  },
  {
    id: 6,
    name: 'Elaine Moura',
    role: 'Professora Particular',
    content: 'Gostei muito da transparência do processo. Explicaram todas as taxas direitinho e recebi o valor exato que tinha sido combinado, no mesmo dia.',
    rating: 5,
  }
];

const Testimonials = memo(function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-white relative overflow-hidden z-0">
      <SectionBackground variant="light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Histórias reais de pessoas que transformaram suas vidas com o apoio da Credaac.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 border shadow-xl shadow-gray-200/40 relative transition-all duration-300 bg-gradient-to-br from-blue-900 to-blue-950 text-white border-blue-800"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 rotate-180 opacity-20 text-blue-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-green-400" />
                ))}
              </div>
              
              <p className="leading-relaxed mb-8 relative z-10 text-blue-100">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t pt-6 border-blue-800/50">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-blue-800 text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
