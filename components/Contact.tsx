// Contacts.tsx
"use client";

import { motion } from "framer-motion";

export default function Contacts() {
  const socials = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "WhatsApp", icon: "💬", href: "#" },
    { name: "Telegram", icon: "📨", href: "#" },
  ];

  return (
    <footer className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light mb-8">Зв&apos;яжіться з нами</h2>
          <p className="text-slate-300 max-w-md mx-auto">
            Обговоримо ваші потреби та запропонуємо рішення
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative px-8 py-4 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors duration-300 flex items-center gap-3">
                <span className="text-2xl">{social.icon}</span>
                <span className="font-medium">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 pt-8 border-t border-slate-800"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Пряме постачання з Китаю. Всі права захищені.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/20 to-blue-900/10 rounded-full blur-3xl" />
    </footer>
  );
}