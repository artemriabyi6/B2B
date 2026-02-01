// Value.tsx
"use client";

import { motion } from "framer-motion";

const values = ["Без трейдерів", "Фіксація умов", "Масштабування під обʼєми"];

export default function Value() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-6 text-slate-900">
            Цінність
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Що отримуєте, обираючи пряме постачання
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-light text-slate-900 group-hover:text-slate-950 transition-colors">
                    {value}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}