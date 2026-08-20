"use client";

/**
 * NEXUS Visual Boost v2 — single file → Ivan-nexus- src/app/page.tsx
 * Premium glass · audit funnel · Instagram-only · reduced-motion safe
 */

import { useEffect, useMemo, useState } from "react";

const IG = "https://www.instagram.com/vnutry888";

const SKILLS = [
  { t: "Оркестрация", d: "n8n · Pathfinder · один runtime" },
  { t: "MCP / руки", d: "Коннекторы без второго мозга" },
  { t: "Vibe coding", d: "Лендинги и прототипы под оффер" },
  { t: "Personal OS", d: "Память Notion · HITL · делегация" },
  { t: "AI-аудит", d: "Карта хаоса · план 14 дней" },
  { t: "Интеграции", d: "Telegram · CRM · GitHub · Hub" },
];

const PACKS = [
  {
    name: "Диагностика",
    price: "$149",
    items: ["Карта системного хаоса", "Приоритеты 14 дней", "Что автоматизировать первым"],
    featured: false,
  },
  {
    name: "OS Setup",
    price: "$790",
    items: ["n8n + Telegram + Notion", "3–5 сценариев", "Реестр рук + HITL"],
    featured: true,
  },
  {
    name: "Под ключ",
    price: "custom",
    items: ["Полный контур NEXUS", "Витрина + агенты", "Обучение команды"],
    featured: false,
  },
];

const AUDIT_STEPS = [
  { n: "01", t: "Сбор", d: "Цели, каналы, инструменты, где ручной труд" },
  { n: "02", t: "Карта", d: "Потоки данных · разрывы · дубли мозгов" },
  { n: "03", t: "Риск", d: "Деньги, доступы, HITL-точки" },
  { n: "04", t: "План", d: "P0/P1 на 14 дней · быстрые победы" },
];

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!auditOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAuditOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [auditOpen]);

  function openIg() {
    const text = [name && `Имя: ${name}`, task && `Задача: ${task}`, "Диагностика"]
      .filter(Boolean)
      .join(" · ");
    void text;
    window.open(IG, "_blank", "noopener,noreferrer");
    setAuditOpen(false);
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #05060a;
          --card: rgba(16, 18, 28, 0.78);
          --line: rgba(255, 255, 255, 0.09);
          --line-strong: rgba(255, 255, 255, 0.16);
          --text: #f4f6fb;
          --muted: #9aa3b8;
          --red: #e63946;
          --emerald: #2a9d8f;
          --emerald-2: #1f7a6f;
          --glow: rgba(42, 157, 143, 0.38);
          --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font);
          background:
            radial-gradient(1000px 560px at 8% -12%, rgba(230, 57, 70, 0.11), transparent 52%),
            radial-gradient(900px 520px at 100% -5%, rgba(42, 157, 143, 0.13), transparent 48%),
            radial-gradient(700px 400px at 50% 100%, rgba(42, 157, 143, 0.06), transparent 50%),
            var(--bg);
          color: var(--text);
          line-height: 1.55;
          min-height: 100%;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        .wrap { width: min(1120px, 100%); margin: 0 auto; padding: 20px 16px 110px; }
        .nav {
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
          padding: 12px 14px; margin-bottom: 28px; border: 1px solid var(--line);
          border-radius: 16px; background: rgba(8, 10, 16, 0.8); backdrop-filter: blur(18px);
          position: sticky; top: 12px; z-index: 40;
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }
        .brand { font-weight: 800; letter-spacing: -0.03em; display: flex; align-items: center; gap: 10px; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%; background: var(--emerald);
          box-shadow: 0 0 0 4px rgba(42, 157, 143, 0.18);
          animation: ${mounted ? "pulse 2.4s ease-out infinite" : "none"};
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(42, 157, 143, 0.35); }
          70% { box-shadow: 0 0 0 10px rgba(42, 157, 143, 0); }
          100% { box-shadow: 0 0 0 0 rgba(42, 157, 143, 0); }
        }
        .nav-links { display: flex; flex-wrap: wrap; gap: 4px; justify-content: flex-end; align-items: center; }
        .nav a.lnk { font-size: 0.86rem; color: var(--muted); font-weight: 600; padding: 8px 10px; border-radius: 999px; }
        .nav a.lnk:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .cta {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 44px; padding: 0 16px; border-radius: 12px; font-weight: 800;
          background: linear-gradient(180deg, #3ecfbc, var(--emerald-2)); color: #041512;
          border: none; cursor: pointer; box-shadow: 0 12px 32px var(--glow);
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .cta:hover { filter: brightness(1.05); transform: translateY(-1px); }
        .cta:active { transform: translateY(0); }
        .cta.ghost {
          background: transparent; color: var(--text); border: 1px solid var(--line-strong);
          box-shadow: none;
        }
        .cta.sm { min-height: 36px; padding: 0 12px; font-size: 0.85rem; }
        .hero { display: grid; gap: 28px; margin-bottom: 56px; }
        @media (min-width: 900px) {
          .hero { grid-template-columns: 1.15fr 0.85fr; align-items: center; }
        }
        .eyebrow {
          display: inline-flex; gap: 8px; align-items: center; font-size: 0.72rem; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--emerald);
          border: 1px solid rgba(42, 157, 143, 0.35); background: rgba(42, 157, 143, 0.1);
          border-radius: 999px; padding: 6px 12px; margin-bottom: 14px;
        }
        h1 {
          font-size: clamp(2.1rem, 5vw, 3.35rem); line-height: 1.05; letter-spacing: -0.045em;
          margin-bottom: 14px; max-width: 14ch;
        }
        h1 em { font-style: normal; color: var(--emerald); }
        .lead { color: var(--muted); font-size: 1.05rem; max-width: 42ch; margin-bottom: 22px; }
        .row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
        .note { color: var(--muted); font-size: 0.84rem; }
        .panel {
          border: 1px solid var(--line); border-radius: 22px; background: var(--card);
          backdrop-filter: blur(14px); padding: 18px; min-height: 280px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          position: relative; overflow: hidden;
        }
        .panel::before {
          content: ""; position: absolute; inset: auto -20% -30% auto; width: 60%; height: 60%;
          background: radial-gradient(circle, rgba(230,57,70,0.16), transparent 70%); pointer-events: none;
        }
        .kpis { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; }
        .kpi {
          border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px;
          background: rgba(0,0,0,0.28);
        }
        .kpi b { display: block; font-size: 1.05rem; letter-spacing: -0.02em; }
        .kpi span { font-size: 0.75rem; color: var(--muted); }
        .stage {
          height: 168px; border-radius: 16px;
          background:
            radial-gradient(circle at 50% 80%, rgba(42,157,143,0.28), transparent 45%),
            linear-gradient(180deg, #0c1018, #07090e);
          border: 1px solid rgba(42,157,143,0.28);
          display: grid; place-items: center; position: relative;
        }
        .avatar {
          width: 72px; height: 118px; border-radius: 18px 18px 12px 12px;
          background: linear-gradient(180deg, #2a9d8f, #12352f);
          box-shadow: 0 16px 40px rgba(42,157,143,0.35);
          animation: ${mounted ? "floatY 5s ease-in-out infinite" : "none"};
        }
        .avatar::before {
          content: ""; display: block; width: 40px; height: 40px; margin: 12px auto 8px;
          border-radius: 50%; background: linear-gradient(145deg, #dfe8e6, #7a9a94);
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .avatar, .dot { animation: none !important; }
        }
        .section { margin-top: 56px; }
        .section h2 { font-size: clamp(1.4rem, 3vw, 1.85rem); letter-spacing: -0.03em; margin-bottom: 8px; }
        .section p.sub { color: var(--muted); margin-bottom: 18px; max-width: 56ch; }
        .grid { display: grid; gap: 12px; }
        @media (min-width: 720px) {
          .cols-3 { grid-template-columns: repeat(3, 1fr); }
          .cols-4 { grid-template-columns: repeat(4, 1fr); }
        }
        .card {
          border: 1px solid var(--line); border-radius: 18px; padding: 16px;
          background: rgba(12, 14, 22, 0.88);
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .card:hover { border-color: var(--line-strong); transform: translateY(-2px); }
        .card h3 { font-size: 1rem; margin-bottom: 6px; }
        .card p, .card li { color: var(--muted); font-size: 0.9rem; }
        .card ul { padding-left: 18px; }
        .card li + li { margin-top: 4px; }
        .card.feat {
          border-color: rgba(42, 157, 143, 0.5);
          box-shadow: 0 16px 40px rgba(42, 157, 143, 0.12);
        }
        .price { font-size: 1.5rem; font-weight: 900; color: var(--emerald); margin: 8px 0 12px; }
        .num {
          font-size: 0.75rem; font-weight: 800; color: var(--red); letter-spacing: 0.06em;
          margin-bottom: 8px; display: block;
        }
        .flow {
          display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
          margin-bottom: 16px; font-size: 0.8rem; color: var(--muted); font-weight: 700;
        }
        .flow i {
          font-style: normal; padding: 4px 10px; border-radius: 999px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.03);
        }
        .footer {
          margin-top: 64px; padding-top: 18px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
          color: var(--muted); font-size: 0.84rem;
        }
        .mobile-cta {
          position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 50;
          display: flex; gap: 8px; padding: 10px; border-radius: 16px;
          background: rgba(8,10,16,0.94); border: 1px solid var(--line); backdrop-filter: blur(14px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        @media (min-width: 880px) { .mobile-cta { display: none; } }
        .mobile-cta .cta { flex: 1; }
        .modal-bg {
          position: fixed; inset: 0; background: rgba(0,0,0,0.68); z-index: 60;
          display: grid; place-items: end center; padding: 16px;
        }
        @media (min-width: 700px) { .modal-bg { place-items: center; } }
        .modal {
          width: min(480px, 100%); border-radius: 20px; border: 1px solid var(--line);
          background: #0c0e16; padding: 20px; max-height: 85vh; overflow: auto;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }
        .modal h3 { margin-bottom: 8px; }
        .modal label { display: grid; gap: 6px; font-size: 0.84rem; font-weight: 700; margin-bottom: 12px; color: #c5cbe0; }
        .modal input, .modal textarea {
          width: 100%; min-height: 44px; border-radius: 12px; border: 1px solid var(--line);
          background: #080a10; color: var(--text); padding: 10px 12px; outline: none;
        }
        .modal input:focus, .modal textarea:focus {
          border-color: rgba(42, 157, 143, 0.55);
          box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.12);
        }
        .modal textarea { min-height: 90px; resize: vertical; }
      `}</style>

      <main className="wrap">
        <nav className="nav" aria-label="Основная">
          <div className="brand"><span className="dot" aria-hidden /> NEXUS · Иван</div>
          <div className="nav-links">
            <a className="lnk" href="#audit">Аудит</a>
            <a className="lnk" href="#skills">Навыки</a>
            <a className="lnk" href="#packs">Пакеты</a>
            <a className="cta sm" href={IG} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">Personal AI OS · not a chatbot</div>
            <h1>
              Собираю <em>операционную систему</em> вокруг вас
            </h1>
            <p className="lead">
              Архитектор NEXUS: один вход, один runtime, память и руки. Ценность — в контуре
              исполнения, не в красивых ответах модели.
            </p>
            <div className="row">
              <a className="cta" href={IG} target="_blank" rel="noreferrer">
                Написать @vnutry888
              </a>
              <button type="button" className="cta ghost" onClick={() => setAuditOpen(true)}>
                Заявка на диагностику
              </button>
            </div>
            <p className="note">Связь только через Instagram · диагностика от $149</p>
          </div>

          <div className="panel">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span className="note" style={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Live system
              </span>
              <span style={{ color: "var(--emerald)", fontWeight: 900 }}>NEXUS</span>
            </div>
            <div className="kpis">
              <div className="kpi"><b>1</b><span>runtime-мозг</span></div>
              <div className="kpi"><b>HITL</b><span>контроль риска</span></div>
              <div className="kpi"><b>OS</b><span>не чат</span></div>
              <div className="kpi"><b>$149</b><span>вход</span></div>
            </div>
            <div className="stage" aria-hidden>
              <div className="avatar" />
            </div>
            <p className="note" style={{ marginTop: 12, textAlign: "center" }}>
              Стенд · audit funnel · Lab-ready
            </p>
          </div>
        </section>

        <section className="section" id="audit">
          <h2>AI-аудит системы</h2>
          <p className="sub">
            Метод NEXUS: карта хаоса → риски → P0 на 14 дней. Не «ещё чат с GPT».
          </p>
          <div className="flow" aria-hidden>
            <i>Сбор</i> → <i>Карта</i> → <i>Риск</i> → <i>План</i>
          </div>
          <div className="grid cols-4">
            {AUDIT_STEPS.map((s) => (
              <article key={s.n} className="card">
                <span className="num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Компетенции</h2>
          <p className="sub">То, что используется в контуре — не список buzzwords.</p>
          <div className="grid cols-3">
            {SKILLS.map((s) => (
              <article key={s.t} className="card">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="packs">
          <h2>Пакеты</h2>
          <p className="sub">Вход доступный · сборка дорогая по сути.</p>
          <div className="grid cols-3">
            {PACKS.map((p) => (
              <article key={p.name} className={`card${p.featured ? " feat" : ""}`}>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="row" style={{ marginTop: 16 }}>
            <button type="button" className="cta" onClick={() => setAuditOpen(true)}>
              Запросить диагностику
            </button>
            <a className="cta ghost" href={IG} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>© {year} Иван Сергеевич · NEXUS</span>
          <a href={IG} target="_blank" rel="noreferrer">
            @vnutry888
          </a>
        </footer>
      </main>

      <div className="mobile-cta">
        <button type="button" className="cta ghost" onClick={() => setAuditOpen(true)}>
          Диагностика
        </button>
        <a className="cta" href={IG} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>

      {auditOpen && (
        <div
          className="modal-bg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-title"
          onClick={() => setAuditOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3 id="audit-title">Заявка на диагностику</h3>
            <p className="note" style={{ marginBottom: 14 }}>
              Откроется Instagram — единственный канал. Напишите «Диагностика» и кратко задачу.
            </p>
            <label>
              Имя
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как обращаться"
                autoComplete="name"
              />
            </label>
            <label>
              Задача одной фразой
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Где сейчас ручной хаос"
              />
            </label>
            <div className="row">
              <button type="button" className="cta" onClick={openIg}>
                Открыть @vnutry888
              </button>
              <button type="button" className="cta ghost" onClick={() => setAuditOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
