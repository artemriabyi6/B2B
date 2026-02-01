// Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 overflow-hidden pt-16 md:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-medium text-blue-500 uppercase tracking-wider mb-4 sm:mb-6 px-3 py-1 bg-blue-50 rounded-full"
          >
            B2B Supply from China
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light tracking-tight text-slate-900 leading-snug md:leading-tight"
          >
            Постачання товарів з Китаю{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block sm:inline">
              напряму з фабрик
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            Для магазинів, онлайн-продавців та маркетплейсів,
            яким потрібна стабільність і контроль.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
           
          </motion.div>
        </motion.div>

        {/* Decorative elements - адаптивні розміри */}
        <div className="absolute top-10 right-4 sm:top-20 sm:right-10 md:right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-2xl sm:blur-3xl opacity-30" />
        <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-10 md:left-20 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-slate-100 to-blue-50 rounded-full blur-2xl sm:blur-3xl opacity-40" />
      </div>
    </section>
  );
}