import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

const stats = [
  { id: 1, name: 'Empréstimos Concedidos', value: 15000, suffix: '+' },
  { id: 2, name: 'Clientes Satisfeitos', value: 5000, suffix: '+' },
  { id: 3, name: 'Anos de Experiência', value: 10, suffix: '+' },
  { id: 4, name: 'Aprovação Rápida', value: 98, suffix: '%' },
];

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(0, value, {
          duration,
          onUpdate(val) {
            node.textContent = Math.floor(val).toLocaleString('pt-BR') + suffix;
          },
        });
        return () => controls.stop();
      }
    }
  }, [value, duration, inView, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function Metrics() {
  return (
    <section className="bg-blue-900 py-16 relative overflow-hidden z-10 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col mx-auto"
            >
              <dt className="text-sm md:text-base font-medium text-blue-200 mt-2">{stat.name}</dt>
              <dd className="order-first text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
