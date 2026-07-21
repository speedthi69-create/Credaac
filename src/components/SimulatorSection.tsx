import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Download, Info } from 'lucide-react';
import { jsPDF } from 'jspdf';
import SectionBackground from './SectionBackground';

export default function SimulatorSection() {
  const [amount, setAmount] = useState(2500);
  const [months, setMonths] = useState(6);

  // Simple estimated interest rate: 3.5% per month for microcredit
  const interestRate = 0.035; 
  
  // Calculate PMT (Monthly Payment)
  const calculateInstallment = () => {
    if (interestRate === 0) return amount / months;
    const pmt = amount * interestRate * Math.pow(1 + interestRate, months) / (Math.pow(1 + interestRate, months) - 1);
    return pmt;
  };

  const monthlyPayment = calculateInstallment();
  const totalPayment = monthlyPayment * months;

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(22);
    doc.setTextColor(30, 58, 138); // blue-900
    doc.text('Credaac - Resumo da Simulacao', 20, 30);
    
    doc.setFontSize(14);
    doc.setTextColor(75, 85, 99); // gray-600
    doc.text('Confira abaixo os detalhes da sua simulacao de credito:', 20, 45);

    // Add details
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55); // gray-800
    
    const formattedAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
    const formattedInstallment = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlyPayment);
    const formattedTotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPayment);

    let y = 65;
    doc.text(`Valor Solicitado: ${formattedAmount}`, 20, y);
    y += 10;
    doc.text(`Prazo: ${months} parcelas`, 20, y);
    y += 10;
    doc.text(`Valor da Parcela: ${formattedInstallment}`, 20, y);
    y += 10;
    doc.text(`Taxa de Juros (Estimada): 3,5% a.m.`, 20, y);
    y += 10;
    doc.text(`Total a Pagar: ${formattedTotal}`, 20, y);

    y += 20;
    doc.setFontSize(10);
    doc.setTextColor(156, 163, 175);
    doc.text('* Valores aproximados. A aprovacao e as taxas finais estao sujeitas a analise de credito.', 20, y);

    doc.save('credaac-simulacao.pdf');
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden z-0" id="simulador">
      <SectionBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-900 mb-4">
              Simule seu Crédito
            </h2>
            <p className="text-lg text-gray-600">
              Ajuste o valor e o prazo para encontrar a parcela ideal para o seu bolso.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="p-8 md:p-10 bg-white">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-gray-700">De quanto você precisa?</label>
                  <span className="text-2xl font-bold text-blue-600">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>R$ 500</span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-gray-700">Em quantas parcelas?</label>
                  <span className="text-2xl font-bold text-blue-600">
                    {months}x
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>3x</span>
                  <span>24x</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-blue-900 text-white flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold">Resumo da Simulação</h3>
                </div>
                <button
                  onClick={exportToPDF}
                  className="p-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors text-blue-200 hover:text-white"
                  title="Baixar resumo em PDF"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Valor da Parcela</p>
                  <p className="text-4xl md:text-5xl font-bold text-green-400">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlyPayment)}
                  </p>
                </div>

                <div className="pt-6 border-t border-blue-800">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-blue-200">Total a pagar:</span>
                    <span className="font-semibold">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-200">Taxa de juros (estimada):</span>
                      <div className="group relative flex items-center">
                        <Info className="w-4 h-4 text-blue-300 hover:text-white cursor-help transition-colors" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-gray-900 text-white text-xs text-center rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-10 shadow-lg leading-relaxed font-normal">
                          Calculado com base na Tabela Price, aplicando juros compostos sobre o saldo devedor.
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold">3,5% a.m.</span>
                  </div>
                </div>

                <a 
                  href="#contato"
                  className="block w-full bg-green-500 hover:bg-green-400 text-blue-950 font-bold text-center py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-6"
                >
                  Solicitar este valor
                </a>
                
                <p className="text-xs text-blue-300 text-center mt-4 opacity-80">
                  * Valores aproximados. A aprovação e as taxas finais estão sujeitas à análise de crédito.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
