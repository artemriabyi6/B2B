// Cases.tsx
"use client";

import { motion } from "framer-motion";

export default function Cases() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-6 text-slate-900">
            Кейси
          </h2>
          <p className="text-slate-500 text-lg">
            Реальні результати наших клієнтів
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-slate-900 mb-4">
                    Роздрібна мережа одягу
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Економія 22% після заміни постачальника з ЄС на фабрику в Китаї
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    -22%
                  </div>
                  <div className="text-sm text-slate-500 mt-2">собівартість</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}