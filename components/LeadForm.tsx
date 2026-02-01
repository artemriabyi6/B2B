// LeadForm.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Handle form submission
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-6 text-slate-900">
            Почніть співпрацю
          </h2>
          <p className="text-slate-500">
            Заповніть форму та отримайте індивідуальний підбір
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {[
            { label: "Категорія товарів", placeholder: "Наприклад: електроніка, одяг, іграшки" },
            { label: "Орієнтовна ціна за одиницю", placeholder: "USD" },
            { label: "Обʼєм поставок", placeholder: "Наприклад: 1000 од./місяць" },
            { label: "Контакт (Telegram / WhatsApp)", placeholder: "@username або +380..." },
          ].map((field, index) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-300"
              />
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
                Обробка запиту...
              </span>
            ) : (
              "Надіслати запит"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}