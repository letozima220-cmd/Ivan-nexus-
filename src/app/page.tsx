"use client";

import { motion } from "framer-motion";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows, Text } from "@react-three/drei";
import * as THREE from "three";

// ===================== DATA =====================
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

// ===================== 3D COMPONENTS =====================
function Avatar() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={group} position={[0, -0.8, 0]}>
      {/* Body */}
      <mesh position={[0, 0.9, 0]}>
        <capsuleGeometry args={[0.35, 0.9, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.85, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.1, 1.9, 0.22]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#e63946" emissive="#e63946" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.1, 1.9, 0.22]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#e63946" emissive="#e63946" emissiveIntensity={0.8} />
      </mesh>

      {/* Core glow */}
      <mesh position={[0, 0.9, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#2a9d8f" emissive="#2a9d8f" emissiveIntensity={1.2} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function Room() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#050505" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Accent light panels */}
      <mesh position={[-3.5, 2.5, -3.9]}>
        <planeGeometry args={[1.5, 0.08]} />
        <meshStandardMaterial color="#e63946" emissive="#e63946" emissiveIntensity={2} />
      </mesh>
      <mesh position={[3.5, 2.5, -3.9]}>
        <planeGeometry args={[1.5, 0.08]} />
        <meshStandardMaterial color="#2a9d8f" emissive="#2a9d8f" emissiveIntensity={2} />
      </mesh>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, 3, 2]} intensity={0.6} color="#e63946" />
      <pointLight position={[3, 3, 2]} intensity={0.6} color="#2a9d8f" />

      <Room />
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Avatar />
      </Float>

      <ContactShadows position={[0, -1.19, 0]} opacity={0.5} scale={10} blur={2} />
      <Environment preset="night" />
      <OrbitControls enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.1} minDistance={3} maxDistance={8} />
    </>
  );
}

// ===================== MAIN PAGE =====================
export default function Home() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [bciConnected, setBciConnected] = useState(false);
  const [bciSignal, setBciSignal] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Mock BCI signal
  const toggleBci = () => {
    setBciConnected((prev) => !prev);
    if (!bciConnected) {
      const interval = setInterval(() => {
        setBciSignal(Math.floor(Math.random() * 40) + 60);
      }, 800);
      (window as any).__bciInterval = interval;
    } else {
      clearInterval((window as any).__bciInterval);
      setBciSignal(0);
    }
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
              onClick={() => scrollTo("room")}
              className="px-8 py-3.5 bg-nexus-red hover:bg-nexus-red/90 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Войти в 3D-комнату
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 glass text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Связаться
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========== 3D ROOM + BCI ========== */}
      <section id="room" className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            NEXUS Room · Digital Twin
          </h2>
          <p className="text-center text-nexus-gray/60 mb-8">
            3D-пространство + BCI Ready Layer
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* 3D Canvas */}
            <div className="lg:col-span-2 h-[420px] md:h-[520px] rounded-2xl overflow-hidden glass relative">
              <Suspense fallback={<div className="flex items-center justify-center h-full text-nexus-gray/50">Загрузка 3D...</div>}>
                <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 45 }}>
                  <Scene />
                </Canvas>
              </Suspense>
            </div>

            {/* BCI Panel */}
            <div className="glass rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">BCI Layer</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Статус</span>
                    <span className={bciConnected ? "text-nexus-emerald" : "text-nexus-gray/50"}>
                      {bciConnected ? "CONNECTED" : "STANDBY"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Signal Quality</span>
                    <span className="text-white">{bciSignal}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-nexus-red to-nexus-emerald transition-all duration-500"
                      style={{ width: `${bciSignal}%` }}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={toggleBci}
                className={`mt-8 w-full py-3 rounded-full font-medium transition-all ${
                  bciConnected
                    ? "bg-nexus-emerald/20 text-nexus-emerald border border-nexus-emerald/40"
                    : "bg-nexus-red hover:bg-nexus-red/90 text-white"
                }`}
              >
                {bciConnected ? "Отключить BCI" : "Подключить BCI (Demo)"}
              </button>

              <p className="text-xs text-nexus-gray/40 mt-4 leading-relaxed">
                Заготовка под Web Serial / Web Bluetooth.  
                Реальные драйверы (OpenBCI, Emotiv и др.) подключаются отдельно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ценность = Навыки × Упаковка × Результат
          </h2>
          <p className="text-lg text-nexus-gray/80 leading-relaxed mb-6">
            NEXUS — живая интеллектуальная экосистема, которая постоянно повышает рыночную и реальную ценность Ивана Сергеевича.
          </p>
          <p className="text-nexus-gray/70 leading-relaxed">
            AI-агенты, умные пространства, системный дизайн и переговоры высокого уровня. Всё работает на одну цель — максимальный коэффициент обмена ценности.
          </p>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="py-24 px-6 bg-nexus-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Навыки</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Проекты & Кейсы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div key={item.title} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <span className="text-xs text-nexus-emerald tracking-wider uppercase">{item.tag}</span>
                <h3 className="text-xl font-semibold text-white mt-3 mb-3">{item.title}</h3>
                <p className="text-nexus-gray/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="py-24 px-6 bg-nexus-dark/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Связаться</h2>
          <p className="text-nexus-gray/70 mb-10">Готов обсудить пилоты, бартер и партнёрства</p>

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
        </div>
      </section>

      <footer className="py-10 text-center text-nexus-gray/40 text-sm">
        NEXUS Protocol · Digital Twin · BCI Ready · 2026
      </footer>
    </main>
  );
}
