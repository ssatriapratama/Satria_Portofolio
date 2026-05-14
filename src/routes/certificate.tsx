import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/certificate")({
  head: () => ({
    meta: [
      { title: "Certificates — Satria Pratama" },
      { name: "description", content: "Sertifikat pelatihan, webinar, course, dan bootcamp yang telah diraih Satria Pratama." },
      { property: "og:title", content: "Certificates — Satria Pratama" },
      { property: "og:description", content: "Koleksi sertifikat: bootcamp, webinar, course, kompetisi." },
    ],
  }),
  component: CertificatePage,
});

type Cert = {
  title: string;
  issuer: string;
  date: string;
  category: "Bootcamp" | "Webinar" | "Course" | "Kompetisi";
  desc: string;
};

const CERTS: Cert[] = [
  { title: "AI & Machine Learning Bootcamp", issuer: "Tech Academy", date: "2025", category: "Bootcamp", desc: "Intensif 4 minggu mempelajari fundamental ML hingga deployment model." },
  { title: "React.js Modern Course", issuer: "Online Learning", date: "2024", category: "Course", desc: "Mendalami hooks, state management, dan best-practice React modern." },
  { title: "UI/UX Design Webinar", issuer: "Industry Speaker", date: "2024", category: "Webinar", desc: "Prinsip desain modern dan workflow Figma yang efisien." },
  { title: "Web Development Bootcamp", issuer: "Komunitas Dev", date: "2024", category: "Bootcamp", desc: "Full-stack roadmap dari HTML/CSS, JS, hingga Node.js." },
  { title: "Cyber Security Awareness", issuer: "Security Org", date: "2024", category: "Webinar", desc: "Dasar keamanan siber, ethical hacking, dan best practice." },
  { title: "Hackathon Finalist", issuer: "Tech Festival", date: "2024", category: "Kompetisi", desc: "Tim finalis dengan project AI-powered learning assistant." },
  { title: "Python for Data Science", issuer: "Online Learning", date: "2023", category: "Course", desc: "NumPy, Pandas, Matplotlib, dan dasar machine learning." },
  { title: "Figma Mastery", issuer: "Design Hub", date: "2023", category: "Course", desc: "Prototyping, auto-layout, design system, dan handoff dev." },
];

const CATS = ["All", "Bootcamp", "Webinar", "Course", "Kompetisi"] as const;

function CertificatePage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const [active, setActive] = useState<Cert | null>(null);

  const items = useMemo(
    () => (filter === "All" ? CERTS : CERTS.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <PageShell
      eyebrow="Certificates"
      title={<>My <span className="gradient-text">Achievements</span></>}
      description="Koleksi sertifikat dari pelatihan, webinar, course, dan kompetisi."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <motion.button
            key={c.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setActive(c)}
            className="glass group overflow-hidden rounded-3xl text-left transition hover:-translate-y-1 hover:neon"
          >
            <div className="relative aspect-[4/3] bg-[var(--gradient-primary)]/20">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <Award className="h-12 w-12 text-primary opacity-80 transition group-hover:scale-110" />
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                {c.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.date}</p>
            </div>
          </motion.button>
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
            className="glass relative w-full max-w-xl overflow-hidden rounded-3xl"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/60 backdrop-blur"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Certificate image placeholder — replace with real cert image */}
            <div className="relative aspect-[4/3] bg-[var(--gradient-primary)]/30">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <Award className="h-24 w-24 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{active.category}</div>
              <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{active.issuer} · {active.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </PageShell>
  );
}
