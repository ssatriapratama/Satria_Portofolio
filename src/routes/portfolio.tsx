import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Satria Pratama" },
      { name: "description", content: "Selected projects by Satria Pratama across full-stack web, AI engineering, cyber security, and UI/UX." },
      { property: "og:title", content: "Portfolio — Satria Pratama" },
      { property: "og:description", content: "Project terbaik: full-stack web, AI engineering, cyber security, UI/UX." },
    ],
  }),
  component: PortfolioPage,
});

type Project = {
  title: string;
  category: "Full Stack Web" | "AI Engineering" | "Cyber Security" | "UI/UX";
  desc: string;
  long: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Neon Dashboard",
    category: "Full Stack Web",
    desc: "Admin dashboard real-time dengan dark/light mode dan grafik interaktif.",
    long: "Dibangun dengan React, Tailwind, dan API REST. Mendukung CRUD, autentikasi, serta visualisasi data dinamis. Fokus pada UX yang nyaman dan performa cepat.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
    demo: "https://github.com/ssatriapratama",
    repo: "https://github.com/ssatriapratama",
  },
  {
    title: "Sentiment AI",
    category: "AI Engineering",
    desc: "Klasifikasi sentimen tweet menggunakan model NLP transformer.",
    long: "Pipeline end-to-end: scraping, preprocessing, fine-tuning model, hingga deployment via REST API. Mencapai akurasi >90% pada dataset uji.",
    tech: ["Python", "PyTorch", "FastAPI"],
    repo: "https://github.com/ssatriapratama",
  },
  {
    title: "SecureNet Scanner",
    category: "Cyber Security",
    desc: "Tool scanning kerentanan jaringan untuk pembelajaran ethical hacking.",
    long: "CLI tool yang memetakan host aktif, port terbuka, dan service banner. Dibuat untuk lab pribadi dengan etika dan disclaimer penggunaan.",
    tech: ["Python", "Scapy", "Nmap"],
    repo: "https://github.com/ssatriapratama",
  },
  {
    title: "Aurora Landing",
    category: "UI/UX",
    desc: "Konsep landing page futuristik dengan animasi micro-interaction.",
    long: "Desain di Figma kemudian di-implementasi ke kode. Fokus pada hierarki visual, motion, dan accessibility.",
    tech: ["Figma", "HTML", "CSS", "JS"],
    demo: "https://github.com/ssatriapratama",
  },
  {
    title: "Smart Notes",
    category: "Full Stack Web",
    desc: "Aplikasi catatan dengan AI auto-summary & tagging cerdas.",
    long: "Auth via JWT, sinkronisasi catatan real-time, dan integrasi LLM untuk meringkas konten panjang menjadi poin-poin penting.",
    tech: ["React", "Express", "MongoDB", "OpenAI"],
    repo: "https://github.com/ssatriapratama",
  },
  {
    title: "Vision Recognizer",
    category: "AI Engineering",
    desc: "Web app klasifikasi gambar real-time menggunakan TensorFlow.js.",
    long: "Berjalan sepenuhnya di browser tanpa server. Menggunakan model MobileNet pre-trained dan custom UI yang responsif.",
    tech: ["TensorFlow.js", "React", "Tailwind"],
    demo: "https://github.com/ssatriapratama",
  },
];

const CATEGORIES = ["All", "Full Stack Web", "AI Engineering", "Cyber Security", "UI/UX"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const items = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <PageShell
      eyebrow="Portfolio"
      title={<>Selected <span className="gradient-text">Projects</span></>}
      description="Beberapa karya yang merepresentasikan eksplorasi saya di teknologi dan desain."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`glass rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === c ? "border-primary text-primary neon" : "hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass group flex flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:neon"
          >
            <button
              onClick={() => setActive(p)}
              className="relative block aspect-[16/10] overflow-hidden bg-[var(--gradient-primary)]/20"
            >
              {/* Project image placeholder — replace with real screenshot */}
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-overlay transition group-hover:opacity-0" />
              <div className="absolute inset-0 grid place-items-center text-5xl font-display font-bold gradient-text opacity-70">
                {p.title.charAt(0)}
              </div>
            </button>
            <div className="flex flex-1 flex-col p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</div>
              <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-[var(--gradient-primary)] px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass inline-flex flex-1 items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] grid place-items-center bg-background/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-2xl overflow-hidden rounded-3xl"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/60 backdrop-blur"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-video bg-[var(--gradient-primary)]/30">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid place-items-center text-7xl font-display font-bold gradient-text opacity-70">
                {active.title.charAt(0)}
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{active.category}</div>
              <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.long}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                {active.demo && (
                  <a href={active.demo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {active.repo && (
                  <a href={active.repo} target="_blank" rel="noreferrer noopener" className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold">
                    <Github className="h-4 w-4" /> Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageShell>
  );
}
