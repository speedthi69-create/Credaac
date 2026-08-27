import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-100 shadow-sm py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="transition-opacity hover:opacity-80 flex items-center">
              <img src="https://i.imgur.com/tRooJ49.png" alt="Credaac Logo" className={`h-8 md:h-10 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`} />
            </a>
          </div>
          
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#sobre" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Quem Somos</a>
            <a href="#servicos" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Serviços</a>
            <a href="#como-funciona" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Como Funciona</a>
            <a href="#diferenciais" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Diferenciais</a>
            <a href="#depoimentos" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Depoimentos</a>
            <a href="#faq" className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>FAQ</a>
            <a 
              href="https://wa.me/554791279298?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20cr%C3%A9dito."
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md whitespace-nowrap ${
                isScrolled 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-500 hover:bg-green-400 text-blue-950 hover:-translate-y-0.5'
              }`}
            >
              Solicitar Crédito
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                isOpen ? 'text-gray-600' : (isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-blue-200')
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Quem Somos</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Serviços</a>
            <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Como Funciona</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Diferenciais</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Depoimentos</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">FAQ</a>
            <div className="pt-4 pb-2">
              <a 
                href="https://wa.me/554791279298?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20cr%C3%A9dito."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium"
              >
                Solicitar Crédito
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
