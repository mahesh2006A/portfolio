import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, CircuitBoard, Cloud, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kotamahanti Mahesh" },
      { name: "description", content: "IoT project guidance, embedded systems support, and affordable student project consulting." },
      { property: "og:title", content: "Services — Kotamahanti Mahesh" },
      { property: "og:description", content: "IoT & embedded systems consulting for students and makers." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cpu,
    title: "IoT Project Guidance",
    desc: "End-to-end help with sensor selection, firmware architecture, and cloud integration for IoT projects.",
  },
  {
    icon: CircuitBoard,
    title: "Embedded Systems Support",
    desc: "Hands-on support with ESP32, Arduino, NodeMCU — from prototyping on Wokwi to production firmware.",
  },
  {
    icon: GraduationCap,
    title: "Student Project Consulting",
    desc: "Affordable consulting for college mini and major projects — focused on learning, not just deliverables.",
  },
  {
    icon: Cloud,
    title: "Custom PCB & Cloud Setup",
    desc: "EasyEDA / KiCad PCB design and cloud dashboard setup using Adafruit IO and similar platforms.",
  },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Services</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          How I can <span className="gradient-text">help you build</span>.
        </h1>
        <p className="mt-4 text-muted-foreground">
          From idea to working prototype — practical, affordable, and grounded in real project experience.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="glass rounded-2xl p-6 glow-hover group animate-fade-in-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="h-12 w-12 rounded-xl neon-border bg-card flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <s.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
            </div>
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 glass rounded-3xl p-8 md:p-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold">
          Have a project in mind?
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          Whether it's a mini project or your final-year capstone, let's bring it to life.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-primary-foreground glow-hover"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
