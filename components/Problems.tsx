// Problems.tsx
"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Завищена собівартість",
    desc: "Посередники значно підвищують фінальну ціну.",
  },
  {
    title: "Нестабільні поставки",
    desc: "Відсутність контролю над строками та логістикою.",
  },
  {
    title: "Обмежений асортимент",
    desc: "Складно знайти потрібні позиції під запит.",
  },
];

export default function Problems() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-light mb-4 text-slate-900">
            Типові проблеми бізнесу
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Які ми допомагаємо вирішити
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {problems.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 group cursor-pointer"
            >
              <motion.div
                className="flex-shrink-0 w-3 h-3 mt-3 rounded-full bg-gradient-to-r from-red-400 to-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
              />
              <div className="flex-1">
                <motion.p
                  className="font-medium text-lg text-slate-900 mb-2 group-hover:text-red-500 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {p.title}
                </motion.p>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}