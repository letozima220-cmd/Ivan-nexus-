"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-nexus-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-nexus-emerald/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        <p className="text-nexus-emerald text-sm tracking-[0.3em] uppercase mb-4">
          NEXUS Protocol
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Иван
          <span className="block text-nexus-red">Шипарнев</span>
        </h1>

        <p className="text-lg md:text-xl text-nexus-gray/80 mb-10 max-w-xl mx-auto leading-relaxed">
          AI · Smart Space · Multi-Agent Systems · Design
          <br />
          <span className="text-sm text-nexus-gray/60">
            Максимизация ценности через технологии
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-nexus-red hover:bg-nexus-red/90 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
            Смотреть проекты
          </button>
          <button className="px-8 py-3.5 glass text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10">
            Связаться
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 text-nexus-gray/40 text-sm tracking-widest"
      >
        SCROLL
      </motion.div>
    </main>
  );
}
