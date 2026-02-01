// ForWho.tsx
"use client";

import { motion } from "framer-motion";

const items = ["Офлайн-магазини", "Онлайн-бізнес", "Маркетплейси"];

export default function ForWho() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-light mb-16 text-slate-900 text-center"
        >
          Для кого ми працюємо
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  </div>
                  <p className="text-xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
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