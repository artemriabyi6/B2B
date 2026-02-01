// Cases.tsx
"use client";

import { motion } from "framer-motion";

export default function Cases() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-slate-900">
            Кейси
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg">
            Реальні результати наших клієнтів
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl md:rounded-3xl blur opacity-20 sm:opacity-30 group-hover:opacity-30 sm:group-hover:opacity-50 transition duration-500" />
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-slate-900 mb-3 sm:mb-4">
                    Роздрібна мережа одягу
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Економія 22% після заміни постачальника з ЄС на фабрику в Китаї
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    -22%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">собівартість</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}