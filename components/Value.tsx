// Value.tsx
"use client";

import { motion } from "framer-motion";

const values = ["Без трейдерів", "Фіксація умов", "Масштабування під обʼєми"];

export default function Value() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-slate-900">
            Цінність
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Що отримуєте, обираючи пряме постачання
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-linear-to-b from-white to-slate-50 border border-slate-100 shadow-sm hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 mb-4 sm:mb-6 flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-slate-900 group-hover:text-slate-950 transition-colors text-center">
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