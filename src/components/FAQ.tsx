import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';
import { useState, useMemo, useTransition, memo } from 'react';
import SectionBackground from './SectionBackground';
import { trackEvent } from '../utils/analytics';

const faqs = [
  {
    question: "Consigo crédito mesmo com o nome sujo?",
    answer: "Sim! O processo de análise é feito com base em vários critérios, permitindo que negativados também possam ter acesso ao crédito."
  },
  {
    question: "Preciso ir a algum lugar pessoalmente?",
    answer: "Não. Todo o processo é feito online - do envio dos documentos à assinatura do contrato. Atendemos em todo o Brasil."
  },
  {
    question: "Existe taxa de adesão ou taxa de cadastro?",
    answer: "Não cobramos taxa de adesão. Você não paga nada antes de receber o crédito."
  },
  {
    question: "Quais documentos são necessários?",
    answer: "Basicamente um documento com foto (como CNH ou RG) e alguns dados pessoais. Nossa equipe te orienta em todo o processo."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "As condições de pagamento são definidas de forma clara antes da contratação. Caso você enfrente dificuldades, nossa equipe está disponível para renegociar e encontrar a melhor solução."
  },
  {
    question: "Qual o prazo para aprovação?",
    answer: "A análise é feita de forma ágil. Após o envio da documentação, nossa equipe entra em contato o mais rápido possível."
  }
];

const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    startTransition(() => {
      setSearchQuery(val);
    });
    trackEvent({ event: 'faq_search', query: val });
  };

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const lowerQuery = searchQuery.toLowerCase();
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(lowerQuery) || 
      faq.answer.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">
      <SectionBackground variant="light" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Ficou com alguma dúvida?
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar perguntas frequentes..."
              defaultValue={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-gray-400 shadow-sm"
            />
          </div>
        </motion.div>

        <div className={`space-y-4 ${isPending ? 'opacity-50 transition-opacity' : ''}`}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:bg-gray-50 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              Nenhuma pergunta encontrada para "{searchQuery}".
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
});

export default FAQ;
