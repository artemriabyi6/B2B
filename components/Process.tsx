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
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-light mb-20 text-center text-slate-900"
        >
          Як відбувається співпраця
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-medium text-lg">
                      {i + 1}
                    </div>
                  </motion.div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-slate-400 mb-3 block">
                      Крок {i + 1}
                    </span>
                    <p className="text-xl font-light text-slate-800 group-hover:text-slate-900 transition-colors">
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