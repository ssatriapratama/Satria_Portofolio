import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Code2, GraduationCap, Mic, Users, Wrench, X } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Satria Pratama" },
      { name: "description", content: "Career journey of Satria Pratama: organisasi, kepanitiaan, webinar, bootcamp, freelance, dan project." },
      { property: "og:title", content: "Experience — Satria Pratama" },
      { property: "og:description", content: "Career journey, organisasi, bootcamp, dan project." },
    ],
  }),
  component: ExperiencePage,
});

type Item = {
  year: string;
  title: string;
  org: string;
  category: string;
  icon: typeof Briefcase;
  desc: string;
  image?: string;
};

const TIMELINE: Item[] = [
  {
    year: "2025",
    title: "Freelance Web Developer",
    org: "Independent",
    category: "Freelance",
    icon: Briefcase,
    desc: "Membangun landing page & dashboard responsif untuk klien UMKM dan komunitas. Fokus pada performance dan modern UI.",
    image: "",
  },
  {
    year: "2025",
    title: "AI & Machine Learning Bootcamp",
    org: "Komunitas Tech",
    category: "Bootcamp",
    icon: GraduationCap,
    desc: "Mendalami fundamental ML, deep learning, dan deployment model. Final project: text classification end-to-end.",
    image: "",
  },
  {
    year: "2024",
    title: "Panitia Tech Festival",
    org: "Sekolah / Komunitas",
    category: "Kepanitiaan",
    icon: Users,
    desc: "Bertanggung jawab pada divisi dokumentasi & website event. Koordinasi tim dan delivery on-time.",
    image: "",
  },
  {
    year: "2024",
    title: "Webinar UI/UX Design",
    org: "Speaker Industri",
    category: "Webinar",
    icon: Mic,
    desc: "Belajar prinsip-prinsip desain modern, desain sistem, dan workflow Figma yang efisien.",
    image: "",
  },
  {
    year: "2024",
    title: "Open Source Contribution",
    org: "GitHub Community",
    category: "Project",
    icon: Code2,
    desc: "Kontribusi pada beberapa repository: bug fix, dokumentasi, dan komponen UI ringan.",
    image: "",
  },
  {
    year: "2023",
    title: "OSIS / Organisasi Pelajar",
    org: "Sekolah",
    category: "Organisasi",
    icon: Wrench,
    desc: "Aktif sebagai pengurus, mengelola program kerja, dan belajar leadership di lingkungan kolaboratif.",
    image: "",
  },
];

function ExperiencePage() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <PageShell
      eyebrow="Experience"
      title={<>My <span className="gradient-text">Journey</span></>}
      description="Timeline pengalaman & pembelajaran — klik tiap kartu untuk detail."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* center line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ul className="space-y-10">
          {TIMELINE.map((it, idx) => {
            const left = idx % 2 === 0;
            return (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative grid grid-cols-[40px_1fr] items-start gap-4 md:grid-cols-2 md:gap-12"
              >
                {/* node */}
                <div className="relative z-10 col-start-1 grid place-items-center md:absolute md:left-1/2 md:top-6 md:-translate-x-1/2">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground glow">
                    <it.icon className="h-4 w-4" />
                  </div>
                </div>

                <div className={`md:col-start-${left ? "1" : "2"} ${left ? "" : "md:col-start-2"}`}>
                  <button
                    onClick={() => setActive(it)}
                    className={`glass group block w-full rounded-3xl p-5 text-left transition hover:-translate-y-1 hover:neon ${
                      left ? "md:text-right" : ""
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {it.year} · {it.category}
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.org}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{it.desc}</p>
                  </button>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] grid place-items-center bg-background/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-lg rounded-3xl p-6"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border hover:border-primary"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              {active.year} · {active.category}
            </div>
            <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
            <p className="text-sm text-muted-foreground">{active.org}</p>
            {/* Photo placeholder slot — replace with real photo */}
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl bg-[var(--gradient-primary)] opacity-30" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.desc}</p>
          </motion.div>
        </div>
      )}
    </PageShell>
  );
}
