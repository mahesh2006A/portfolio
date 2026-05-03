import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Lightbulb, Rocket, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kotamahanti Mahesh" },
      { name: "description", content: "Learn about Mahesh — B.Tech ECE student at Avanthi St. Theresa Institute, passionate about IoT and embedded systems." },
      { property: "og:title", content: "About Kotamahanti Mahesh" },
      { property: "og:description", content: "B.Tech ECE student, IoT & embedded systems builder." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">About Me</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          Curious mind. <span className="gradient-text">Solder-ready hands.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          I'm Kotamahanti Mahesh, an Electronics and Communication Engineering student who finds joy in turning silicon and signals into solutions. From custom PCBs to cloud-connected wearables, I love bridging the physical and digital worlds.
        </p>
        <p className="mt-4 text-muted-foreground">
          Beyond coursework, I've shipped 20+ IoT-based projects in the hospitality equipment space, and I'm constantly experimenting with new boards, sensors, and frameworks.
        </p>
      </div>

      {/* Education timeline */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-bold mb-8">Education & Journey</h2>
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-blue)] to-transparent" />
          {[
            {
              icon: GraduationCap,
              year: "2024 – 2028",
              title: "B.Tech in Electronics & Communication Engineering",
              org: "Avanthi St. Theresa Institute of Engineering and Technology",
              desc: "Building a strong foundation in circuits, signals, and embedded design while pursuing hands-on IoT projects.",
            },
            {
              icon: Rocket,
              year: "Ongoing",
              title: "20+ IoT Projects in Hospitality Equipment",
              org: "Self-driven Practical Experience",
              desc: "Designed and deployed real-world IoT solutions for monitoring, automation, and reliability in commercial environments.",
            },
            {
              icon: Lightbulb,
              year: "6 Months",
              title: "Embedded Systems / IoT Internship",
              org: "Industry Internship",
              desc: "Hands-on with ESP32, FreeRTOS, sensor integration, and cloud dashboards in a production environment.",
            },
            {
              icon: Heart,
              year: "Always",
              title: "Curious Learner",
              org: "Continuous Growth",
              desc: "Exploring new tech — RTOS internals, edge AI, custom PCBs, and the next generation of connected devices.",
            },
          ].map((item, i) => (
            <div key={i} className="relative mb-10 group">
              <div className="absolute -left-8 md:-left-10 top-1 h-5 w-5 rounded-full bg-card neon-border flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow" />
              </div>
              <div className="glass rounded-xl p-5 glow-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <item.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--neon-green)]">{item.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <div className="text-sm text-muted-foreground">{item.org}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
