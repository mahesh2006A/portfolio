import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Wrench, Award } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Kotamahanti Mahesh" },
      { name: "description", content: "6-month embedded systems internship and 20+ IoT projects in hospitality equipment." },
      { property: "og:title", content: "Experience — Kotamahanti Mahesh" },
      { property: "og:description", content: "Internship and 20+ IoT projects in hospitality equipment." },
    ],
  }),
  component: ExperiencePage,
});

const items = [
  {
    icon: Briefcase,
    tag: "Internship",
    title: "Embedded Systems / IoT Intern",
    period: "6 months",
    points: [
      "Worked on production-grade ESP32 firmware with FreeRTOS multitasking.",
      "Integrated sensor pipelines (MAX30102, BMP280, MQ-series) with cloud dashboards.",
      "Contributed to schematic reviews and PCB bring-up workflows.",
    ],
  },
  {
    icon: Wrench,
    tag: "Practical Experience",
    title: "20+ IoT Projects in Hospitality Equipment",
    period: "Ongoing",
    points: [
      "Designed monitoring & automation systems for commercial kitchen and service equipment.",
      "Custom PCBs designed end-to-end in EasyEDA — from schematic to fabrication.",
      "Built fault-tolerant firmware using watchdog timers and task queues.",
    ],
  },
  {
    icon: Award,
    tag: "Self-driven",
    title: "Continuous Hands-on Building",
    period: "Always",
    points: [
      "Mini-projects across Arduino Uno, Nano, NodeMCU, and ESP32 platforms.",
      "Simulation-first workflow with Wokwi before hardware bring-up.",
      "Shared dashboards via Adafruit IO for real-time telemetry.",
    ],
  },
];

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Experience</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          From classroom to <span className="gradient-text">production</span>.
        </h1>
        <p className="mt-4 text-muted-foreground">
          A mix of formal internship time and self-driven project delivery — shipping IoT systems that survive real-world environments.
        </p>
      </div>

      <div className="mt-14 relative pl-8 md:pl-14">
        <div className="absolute left-2 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-blue)] to-transparent" />
        {items.map((item, i) => (
          <div key={i} className="relative mb-10 group">
            <div className="absolute -left-8 md:-left-12 top-2 h-6 w-6 rounded-full bg-card neon-border flex items-center justify-center">
              <item.icon className="h-3 w-3 text-[var(--neon-cyan)]" />
            </div>
            <div className="glass rounded-2xl p-6 glow-hover">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="rounded-full bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] text-xs font-mono uppercase tracking-wider px-3 py-1">
                  {item.tag}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <ul className="mt-3 space-y-2">
                {item.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--neon-green)] flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
