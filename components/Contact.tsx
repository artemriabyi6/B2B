// Contacts.tsx
"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiSend } from "react-icons/fi";

export default function Contacts() {
  const socials = [
    { 
      name: "Instagram", 
      icon: <FiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />, 
      href: "https://www.instagram.com/seasupplyhub?igsh=MTBqd2hybXNiNDFzbw==" 
    },
    // { 
    //   name: "Telegram", 
    //   icon: <FiSend className="w-5 h-5 sm:w-6 sm:h-6" />, 
    //   href: "#" 
    // },
  ];

  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 md:mb-8">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto px-4">
            Обговоримо ваші потреби та запропонуємо рішення
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-slate-800 rounded-lg sm:rounded-xl group-hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {social.icon}
                </span>
                <span className="font-medium text-sm sm:text-base">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-slate-400 pt-6 sm:pt-8 border-t border-slate-800"
        >
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Пряме постачання з Китаю. Всі права захищені.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements - адаптивні розміри */}
      <div className="absolute bottom-0 left-4 sm:left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-linear-to-r from-blue-900/20 to-cyan-900/10 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute top-0 right-4 sm:right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-linear-to-r from-slate-800/20 to-blue-900/10 rounded-full blur-2xl sm:blur-3xl" />
    </footer>
  );
}