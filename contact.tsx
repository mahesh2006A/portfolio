import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Phone, Mail, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_0fazg06";
const EMAILJS_TEMPLATE_ID = "template_fq1hgga";
const EMAILJS_PUBLIC_KEY = "KNPgJli-2e0w7z9ok";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kotamahanti Mahesh" },
      { name: "description", content: "Get in touch with Kotamahanti Mahesh for IoT and embedded systems collaboration." },
      { property: "og:title", content: "Contact — Kotamahanti Mahesh" },
      { property: "og:description", content: "Reach out for IoT and embedded systems collaboration." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent!", { description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send", { description: "Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Toaster />
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Contact</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          Let's <span className="gradient-text">build something</span> together.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Drop a message — collaborations, project guidance, or just a chat about embedded systems.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, label: "Phone", value: "9666299826", href: "tel:9666299826" },
            { icon: Mail, label: "Email", value: "mahesh1792006@gmail.com", href: "mailto:mahesh1792006@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "kotamahanti-mahesh", href: "https://www.linkedin.com/in/kotamahanti-mahesh-a97365318" },
            { icon: MapPin, label: "Location", value: "India", href: "#" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 glow-hover"
            >
              <div className="h-12 w-12 rounded-xl neon-border bg-card flex items-center justify-center">
                <c.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-medium text-sm">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/20 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/20 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-primary-foreground glow-hover disabled:opacity-60 w-full sm:w-auto"
          >
            {sending ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
