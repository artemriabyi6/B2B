// Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 relative">
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
            className="inline-block text-sm font-medium text-blue-500 uppercase tracking-wider mb-6 px-3 py-1 bg-blue-50 rounded-full"
          >
            B2B Supply from China
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-7xl font-light tracking-tight max-w-4xl text-slate-900 leading-tight"
          >
            Постачання товарів з Китаю{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              напряму з фабрик
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed"
          >
            Для магазинів, онлайн-продавців та маркетплейсів,
            яким потрібна стабільність і контроль.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Отримати підбір товарів
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-100 to-blue-50 rounded-full blur-3xl opacity-40" />
      </div>
    </section>
  );
}