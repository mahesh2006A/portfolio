import { createFileRoute, Link } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import { CircuitBackground } from "@/components/CircuitBackground";
import { ArrowRight, Download, Cpu, Radio, Activity } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kotamahanti Mahesh — ECE | IoT & Embedded Systems" },
      { name: "description", content: "ECE student passionate about IoT and embedded systems. Explore 20+ IoT projects, custom PCBs, and ESP32-powered solutions." },
      { property: "og:title", content: "Kotamahanti Mahesh — ECE Portfolio" },
      { property: "og:description", content: "IoT & Embedded Systems Enthusiast. ESP32, FreeRTOS, KiCad, EasyEDA." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <CircuitBackground />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full neon-border px-4 py-1.5 text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--neon-green)] animate-blink" />
              Available for collaboration
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              ECE Student.
              <br />
              <span className="gradient-text">IoT & Embedded</span>
              <br />
              Systems Enthusiast.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              I'm an ECE student passionate about IoT and embedded systems — always curious about learning new technologies and building innovative solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-primary-foreground glow-hover">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full neon-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                Contact Me
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-[var(--neon-cyan)] transition-colors">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "20+", l: "IoT Projects" },
                { v: "6 mo", l: "Internship" },
                { v: "5+", l: "Tech Tools" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold gradient-text">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-md">
              {/* Animated halo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-green)] rounded-[2rem] opacity-25 blur-3xl animate-pulse-glow" />

              {/* Rotating conic ring */}
              <div className="absolute -inset-1 rounded-[1.75rem] opacity-70" style={{
                background: "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-blue), var(--neon-green), var(--neon-cyan))",
                filter: "blur(2px)",
                animation: "spin 8s linear infinite",
              }} />

              <div className="relative glass rounded-3xl overflow-hidden p-2 backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden group">
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--neon-cyan)] z-20" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--neon-cyan)] z-20" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--neon-cyan)] z-20" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--neon-cyan)] z-20" />

                  <img
                    src={profileImg}
                    alt="Kotamahanti Mahesh portrait"
                    width={768}
                    height={896}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

                  {/* Scan line */}
                  <div className="absolute inset-x-0 h-px bg-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)] animate-scan z-10" />

                  {/* HUD label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--neon-cyan)] z-20">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-green)] animate-blink" />
                      LIVE • ID 0x4E37
                    </span>
                    <span>v2.0</span>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold">Kotamahanti Mahesh</div>
                    <div className="text-xs text-muted-foreground">B.Tech ECE • 2028</div>
                  </div>
                  <div className="flex gap-2">
                    {[Cpu, Radio, Activity].map((Icon, i) => (
                      <div key={i} className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center glow-hover">
                        <Icon className="h-4 w-4 text-[var(--neon-cyan)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating telemetry chips */}
              <div className="absolute -left-4 md:-left-10 top-[18%] glass rounded-xl px-3 py-2 text-xs font-mono animate-float shadow-lg">
                <span className="text-[var(--neon-green)]">●</span> ESP32 connected
              </div>
              <div className="absolute -right-4 md:-right-10 top-[40%] glass rounded-xl px-3 py-2 text-xs font-mono animate-float shadow-lg" style={{ animationDelay: "1.5s" }}>
                <span className="text-[var(--neon-cyan)]">SpO₂</span> 98%
              </div>
              <div className="absolute -left-4 md:-left-12 bottom-[22%] glass rounded-xl px-3 py-2 text-xs font-mono animate-float shadow-lg" style={{ animationDelay: "0.8s" }}>
                <span className="text-[var(--neon-blue)]">♥</span> 72 BPM
              </div>
              <div className="absolute -right-2 md:-right-8 bottom-[8%] glass rounded-xl px-3 py-2 text-xs font-mono animate-float shadow-lg" style={{ animationDelay: "2.2s" }}>
                <span className="text-[var(--neon-green)]">IoT</span> uplink ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="border-y border-border overflow-hidden bg-card/40 py-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl text-muted-foreground">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {["ESP32", "FreeRTOS", "KiCad", "EasyEDA", "MATLAB", "Wokwi", "Arduino", "NodeMCU", "AutoCAD", "Adafruit IO"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-[var(--neon-cyan)]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
