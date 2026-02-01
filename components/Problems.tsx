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
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-slate-900">
            Типові проблеми бізнесу
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Які ми допомагаємо вирішити
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-4xl mx-auto px-2">
          {problems.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start gap-3 sm:gap-4 md:gap-6 group cursor-pointer"
            >
              <motion.div
                className="shrink-0 w-2 h-2 sm:w-3 sm:h-3 mt-2 sm:mt-3 rounded-full bg-linear-to-r from-red-400 to-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
              />
              <div className="flex-1">
                <motion.p
                  className="font-medium text-base sm:text-lg md:text-lg text-slate-900 mb-1 sm:mb-2 group-hover:text-red-500 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  {p.title}
                </motion.p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}