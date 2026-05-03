import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Activity, Cpu, Cloud, Gauge, Shield, Layers, Zap } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kotamahanti Mahesh" },
      { name: "description", content: "Featured IoT and embedded projects: Vitals-Guard Smart Glove, Multi-Sensor Health Expansion, and more." },
      { property: "og:title", content: "Projects — Kotamahanti Mahesh" },
      { property: "og:description", content: "ESP32, FreeRTOS, custom PCBs, and cloud-connected wearables." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Projects</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          Built with <span className="gradient-text">silicon, signals & soul.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          A selection of IoT and embedded systems work — from wearables to fault-tolerant healthcare monitoring.
        </p>
      </div>

      {/* Featured projects */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Project 1 */}
        <article className="glass rounded-3xl p-8 relative overflow-hidden glow-hover group">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[var(--neon-cyan)]/10 blur-3xl rounded-full group-hover:bg-[var(--neon-cyan)]/20 transition-colors" />
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className="h-14 w-14 rounded-2xl neon-border bg-card flex items-center justify-center">
                <HeartPulse className="h-7 w-7 text-[var(--neon-cyan)]" />
              </div>
              <span className="text-xs font-mono text-[var(--neon-green)]">FEATURED · 01</span>
            </div>
            <h2 className="font-display text-2xl font-bold">Vitals-Guard Smart Glove</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An IoT healthcare wearable for real-time monitoring of heart rate, SpO₂, body temperature, and air quality — built on ESP32 with FreeRTOS.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { icon: Activity, t: "Heart rate, SpO₂, temperature, AQI tracking" },
                { icon: Cpu, t: "ESP32 + FreeRTOS for real-time multitasking" },
                { icon: Gauge, t: "OLED display + Adafruit IO cloud dashboard" },
                { icon: Layers, t: "Custom PCB designed in EasyEDA" },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <f.icon className="h-4 w-4 text-[var(--neon-cyan)] flex-shrink-0" />
                  {f.t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ESP32", "FreeRTOS", "MAX30102", "Adafruit IO", "EasyEDA"].map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="glass rounded-3xl p-8 relative overflow-hidden glow-hover group">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[var(--neon-green)]/10 blur-3xl rounded-full group-hover:bg-[var(--neon-green)]/20 transition-colors" />
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className="h-14 w-14 rounded-2xl neon-border bg-card flex items-center justify-center">
                <Shield className="h-7 w-7 text-[var(--neon-green)]" />
              </div>
              <span className="text-xs font-mono text-[var(--neon-green)]">FEATURED · 02</span>
            </div>
            <h2 className="font-display text-2xl font-bold">Multi-Sensor Health Expansion</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An advanced healthcare monitoring system extending the Vitals-Guard platform with BP and ECG sensing, plus rock-solid reliability primitives.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { icon: Activity, t: "Blood pressure & ECG sensing pipelines" },
                { icon: Shield, t: "Watchdog Timer for crash recovery" },
                { icon: Cloud, t: "FreeRTOS Task Queues for inter-task comms" },
                { icon: Zap, t: "Dual-core: real-time alerts + background sync" },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <f.icon className="h-4 w-4 text-[var(--neon-green)] flex-shrink-0" />
                  {f.t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ESP32 Dual-Core", "Watchdog", "Task Queues", "ECG", "BP Sensor"].map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Mini projects gallery */}
      <div className="mt-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-2xl font-bold">More Mini Projects</h2>
          <span className="text-xs text-muted-foreground font-mono">scroll →</span>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
          {[
            { name: "Smart Door Lock", board: "Arduino Uno", color: "var(--neon-cyan)" },
            { name: "Weather Station", board: "NodeMCU", color: "var(--neon-blue)" },
            { name: "Gas Leak Alert", board: "Arduino Nano", color: "var(--neon-green)" },
            { name: "Plant Moisture", board: "ESP32", color: "var(--neon-cyan)" },
            { name: "Home Automation", board: "NodeMCU", color: "var(--neon-blue)" },
            { name: "RFID Attendance", board: "Arduino Uno", color: "var(--neon-green)" },
            { name: "Servo Controller", board: "ESP32", color: "var(--neon-cyan)" },
          ].map((p) => (
            <div
              key={p.name}
              className="snap-start min-w-[260px] glass rounded-2xl p-5 glow-hover"
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `color-mix(in oklab, ${p.color} 15%, transparent)` }}
              >
                <Cpu className="h-5 w-5" style={{ color: p.color }} />
              </div>
              <h3 className="font-display font-semibold">{p.name}</h3>
              <p className="text-xs font-mono text-muted-foreground mt-1">{p.board}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
