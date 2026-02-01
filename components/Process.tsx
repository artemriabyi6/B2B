// Process.tsx
"use client";

import { motion } from "framer-motion";

const steps = [
  "Отримуємо запит",
  "Підбираємо фабрики",
  "Фіксуємо умови",
  "Організовуємо доставку",
];

export default function Process() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-12 sm:mb-16 md:mb-20 text-center text-slate-900"
        >
          Як відбувається співпраця
        </motion.h2>

        <div className="relative">
          {/* Timeline line - показуємо тільки на великих екранах */}
          <div className="absolute left-0 right-0 top-6 sm:top-8 h-0.5 bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group text-center"
              >
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full border-2 sm:border-4 border-white shadow-md sm:shadow-lg flex items-center justify-center mb-4 mx-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-medium text-sm sm:text-base md:text-lg">
                      {i + 1}
                    </div>
                  </motion.div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-slate-400 mb-2 block">
                      Крок {i + 1}
                    </span>
                    <p className="text-base sm:text-lg md:text-xl font-light text-slate-800 group-hover:text-slate-900 transition-colors">
                      {step}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}