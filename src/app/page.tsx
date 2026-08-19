"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Multi-Agent Systems", level: 95 },
  { name: "AI Concierge / Smart Space", level: 90 },
  { name: "Vibe-coding + MCP + n8n", level: 92 },
  { name: "UI/UX системного уровня", level: 88 },
  { name: "Стратегический дизайн", level: 85 },
  { name: "Переговоры & Бартер", level: 90 },
];

const cases = [
  {
    title: "NEXUS Villa OS",
    desc: "AI-консьерж для премиальных вилл. Автоматизация гостевого опыта + умное пространство.",
    tag: "Smart Space",
  },
  {
    title: "Personal OS Architecture",
    desc: "Цифровой двойник и система максимизации ценности. Оркестрация агентов.",
    tag: "AI Systems",
  },
  {
    title: "Avatar Lab",
    desc: "Интерактивный 3D-аватар + lipsync + геймификация навыков.",
    tag: "3D + AI",
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-nexus-black text-nexus-gray">
      {/* ========== HERO ========== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-nexus-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-nexus-emerald/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 bg-nexus-red hover:bg-nexus-red/90 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Смотреть проекты
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 glass text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Связаться
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 text-nexus-gray/40 text-sm tracking-widest">
          SCROLL
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ценность = Навыки × Упаковка × Результат
          </h2>
          <p className="text-lg text-nexus-gray/80 leading-relaxed mb-6">
            NEXUS — это живая интеллектуальная экосистема, которая постоянно повышает рыночную и реальную ценность Ивана Сергеевича.
          </p>
          <p className="text-nexus-gray/70 leading-relaxed">
            AI-агенты, умные пространства, системный дизайн и переговоры высокого уровня. Всё работает на одну цель — максимальный коэффициент обмена ценности.
          </p>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="py-24 px-6 bg-nexus-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Навыки
          </h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-nexus-emerald">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-nexus-red to-nexus-emerald rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Проекты & Кейсы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-xs text-nexus-emerald tracking-wider uppercase">
                  {item.tag}
                </span>
                <h3 className="text-xl font-semibold text-white mt-3 mb-3">
                  {item.title}
                </h3>
                <p className="text-nexus-gray/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="py-24 px-6 bg-nexus-dark/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Связаться
          </h2>
          <p className="text-nexus-gray/70 mb-10">
            Готов обсудить пилоты, бартер и партнёрства
          </p>

          <div className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-nexus-gray/40 focus:outline-none focus:border-nexus-emerald transition"
            />
            <textarea
              placeholder="Сообщение"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-nexus-gray/40 focus:outline-none focus:border-nexus-emerald transition resize-none"
            />
            <button
              onClick={() => alert("Сообщение отправлено (демо)")}
              className="w-full py-3.5 bg-nexus-red hover:bg-nexus-red/90 text-white font-medium rounded-full transition-all duration-300"
            >
              Отправить
            </button>
          </div>

          <p className="mt-10 text-sm text-nexus-gray/50">
            Или напишите напрямую
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-10 text-center text-nexus-gray/40 text-sm">
        NEXUS Protocol · 2026
      </footer>
    </main>
  );
}
