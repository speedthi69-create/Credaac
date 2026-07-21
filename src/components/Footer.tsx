import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-blue-900 border-t border-blue-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div className="text-center md:text-left md:col-span-1">
            <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight block mb-2">
              Credaac<span className="text-green-400">.</span>
            </span>
            <p className="text-blue-200 text-sm">
              Credaac Soluções Financeiras - Crédito com respeito, do jeito que deveria ser.
            </p>
          </div>
          
          <div className="text-center md:col-span-1 flex flex-col items-center">
            <h4 className="text-sm font-semibold text-white mb-3 text-center">Ofertas exclusivas</h4>
            <form onSubmit={handleSubmit} className="relative w-full max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full bg-blue-800 border border-blue-700/50 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-blue-300/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all pr-12"
              />
              <button
                type="submit"
                disabled={submitted}
                className="absolute right-1 top-1 bottom-1 aspect-square bg-green-500 hover:bg-green-400 text-blue-900 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Inscrever-se na newsletter"
              >
                {submitted ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4 ml-0.5" />}
              </button>
            </form>
            <p className="text-xs text-blue-300 mt-2">
              Receba novidades e oportunidades de crédito.
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-blue-200 space-y-2 md:col-span-1">
            <p>CNPJ: [Inserir quando disponível]</p>
            <p>Atendimento: (11) 99999-9999 | contato@credaac.com.br</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Credaac Soluções Financeiras. Todos os direitos reservados.</p>
          <p>Copy produzida por Comunique-se Mais para Credaac Soluções Financeiras.</p>
        </div>
      </div>
    </footer>
  );
}
