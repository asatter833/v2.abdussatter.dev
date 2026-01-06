import DottedGlowBackground from "@/components/DottedGlowBackground";
import { SectionHeader } from "@/components/SectionHeader";
// import ChatInterface from '@/components/ChatInterface';
import data from "@/data/personal.data.json";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <DottedGlowBackground />

      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

      <main className="relative z-[2] max-w-[1400px] mx-auto px-6 pt-16">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center">
          <div className="w-full">
            <div className="font-mono text-xs text-grey mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-grey"></span>
              OPERATIONAL STATUS:{" "}
              <span className="text-hazard animate-pulse">ACTIVE</span>
            </div>
            <h1 className="text-[12vw] font-black leading-[0.8] -tracking-[4px] uppercase">
              FRONTEND
            </h1>
            <h1 className="text-[12vw] font-black leading-[0.8] -tracking-[4px] uppercase text-transparent stroke-hazard stroke-1">
              ENGINEER
            </h1>
            <p className="mt-12 font-mono text-grey max-w-xl leading-relaxed">
              {data.summary}
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="infrastructure">
          <SectionHeader id="01" title="INFRASTRUCTURE" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
            {data.experience.map((exp, i) => (
              <div
                key={i}
                className="bg-dark p-10 hover:bg-hazard/5 transition-colors"
              >
                <div className="flex justify-between font-mono text-xs text-grey mb-4">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-6">{exp.role}</h3>
                <ul className="space-y-3 text-grey text-sm">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-hazard font-mono">⌞</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="components">
          <SectionHeader id="02" title="CORE COMPONENTS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-dark p-10 hover:bg-hazard/5 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                <p className="text-grey text-sm mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* AI TERMINAL */}
      {/* <ChatInterface resumeData={data} /> */}
    </div>
  );
}
