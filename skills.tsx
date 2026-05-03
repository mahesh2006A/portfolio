import { createFileRoute } from "@tanstack/react-router";
import { CircuitBoard, Wrench, Layers, Calculator, Cpu } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Kotamahanti Mahesh" },
      { name: "description", content: "PCB design, embedded simulation, and engineering tools — KiCad, AutoCAD, EasyEDA, MATLAB, Wokwi." },
      { property: "og:title", content: "Skills — Kotamahanti Mahesh" },
      { property: "og:description", content: "KiCad, AutoCAD, EasyEDA, MATLAB, Wokwi & embedded systems expertise." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { name: "KiCad", level: 88, icon: CircuitBoard, desc: "Schematic capture, layout, and custom footprints." },
  { name: "EasyEDA", level: 92, icon: Layers, desc: "Custom PCB design, JLC integration, fabrication-ready." },
  { name: "AutoCAD", level: 78, icon: Wrench, desc: "Mechanical drawings and enclosure design." },
  { name: "MATLAB", level: 75, icon: Calculator, desc: "Signal processing, simulation, and algorithm prototyping." },
  { name: "Wokwi", level: 90, icon: Cpu, desc: "Embedded simulation for ESP32, Arduino, and peripherals." },
];

const stack = [
  "ESP32", "Arduino Uno", "Arduino Nano", "NodeMCU", "FreeRTOS",
  "Adafruit IO", "OLED Displays", "MAX30102", "MQ-Series", "I2C / SPI",
];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Skills</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          The <span className="gradient-text">toolkit</span> behind the build.
        </h1>
        <p className="mt-4 text-muted-foreground">
          A blend of design, simulation, and embedded firmware tools — chosen for shipping reliable hardware fast.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="glass rounded-2xl p-6 glow-hover group animate-fade-in-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl neon-border bg-card flex items-center justify-center group-hover:rotate-6 transition-transform">
                <s.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                  <span className="text-xs font-mono text-[var(--neon-green)]">{s.level}%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-green)] shadow-[0_0_12px_var(--neon-cyan)]"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-bold mb-6">Hardware & Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full neon-border bg-card/60 px-4 py-2 text-sm font-mono text-muted-foreground hover:text-[var(--neon-cyan)] hover:bg-card transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
