// ForWho.tsx
"use client";

import { motion } from "framer-motion";

const items = ["Офлайн-магазини", "Онлайн-бізнес", "Маркетплейси"];

export default function ForWho() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-8 sm:mb-12 md:mb-16 text-slate-900 text-center"
        >
          Для кого ми працюємо
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-100 to-cyan-50 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full" />
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                    {item}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}