import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2 } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { trackEvent } from '../utils/analytics';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Permite apenas letras e espaços (incluindo acentos)
    const val = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    setName(val);
    if (val.trim().length < 3 && val.trim().length > 0) {
      setErrors(prev => ({ ...prev, name: 'Nome deve ter pelo menos 3 letras' }));
    } else {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Permite apenas números e aplica a máscara (00) 0 0000-0000
    const raw = e.target.value.replace(/\D/g, '').substring(0, 11);
    let formatted = '';
    
    if (raw.length === 0) formatted = '';
    else if (raw.length <= 2) formatted = `(${raw}`;
    else if (raw.length <= 3) formatted = `(${raw.slice(0,2)}) ${raw.slice(2)}`;
    else if (raw.length <= 7) formatted = `(${raw.slice(0,2)}) ${raw.slice(2,3)} ${raw.slice(3)}`;
    else formatted = `(${raw.slice(0,2)}) ${raw.slice(2,3)} ${raw.slice(3,7)}-${raw.slice(7,11)}`;
    
    setPhone(formatted);
    if (raw.length > 0 && raw.length < 10) {
      setErrors(prev => ({ ...prev, phone: 'Número de telefone inválido' }));
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (val.length > 0 && !validateEmail(val)) {
      setErrors(prev => ({ ...prev, email: 'E-mail inválido' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const nameValid = name.trim().length >= 3;
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    if (!nameValid || !emailValid || !phoneValid) {
      setErrors({
        name: nameValid ? '' : 'Nome deve ter pelo menos 3 letras',
        email: emailValid ? '' : 'E-mail inválido',
        phone: phoneValid ? '' : 'Número de telefone inválido'
      });
      return;
    }

    setIsSubmitting(true);
    trackEvent({ event: 'lead_form_submit', name: nameValid, email: emailValid });
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
        setErrors({ name: '', email: '', phone: '' });
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-display font-bold text-gray-900">Solicitar Crédito</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Fechar formulário"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                  >
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      />
                    </svg>
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 border-4 border-green-400 rounded-full"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    />
                  </motion.div>
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-bold text-gray-900 mb-2"
                  >
                    Formulário Enviado!
                  </motion.h4>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600"
                  >
                    Nossa equipe entrará em contato em breve para dar continuidade ao seu crédito.
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Digite seu nome (apenas letras)"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-600 focus:border-blue-600'} focus:ring-2 outline-none transition-all placeholder:text-gray-400`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Digite seu e-mail"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-600 focus:border-blue-600'} focus:ring-2 outline-none transition-all placeholder:text-gray-400`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Ex: (11) 9 9999-9999"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-600 focus:border-blue-600'} focus:ring-2 outline-none transition-all placeholder:text-gray-400`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Solicitação'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
