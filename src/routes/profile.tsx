import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Code2, Database, Palette, Server, Sparkles, Video } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Satria Pratama" },
      { name: "description", content: "About Satria Pratama: background, focus, and complete skill set across data, AI, backend, frontend, and editing." },
      { property: "og:title", content: "Profile — Satria Pratama" },
      { property: "og:description", content: "Background, focus, and skill set of Satria Pratama." },
    ],
  }),
  component: ProfilePage,
});

const SKILLS = [
  {
    cat: "Frontend Development",
    icon: Code2,
    items: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    cat: "Backend",
    icon: Server,
    items: [
      { name: "Node.js / Express", level: 75 },
      { name: "REST API & Auth", level: 78 },
      { name: "Database (SQL/NoSQL)", level: 70 },
    ],
  },
  {
    cat: "AI & Data",
    icon: Brain,
    items: [
      { name: "Python", level: 80 },
      { name: "Machine Learning", level: 72 },
      { name: "Data Processing & Analysis", level: 78 },
    ],
  },
  {
    cat: "UI/UX & Editor",
    icon: Palette,
    items: [
      { name: "Figma", level: 85 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Video / Motion Editor", level: 70 },
    ],
  },
];

function ProfilePage() {
  const [flipped, setFlipped] = useState(false);

  return (
    <PageShell
      eyebrow="Profile"
      title={<>About <span className="gradient-text">Me</span></>}
      description="Pelajar yang antusias di teknologi & kreativitas digital — ngoding, ngedesain, dan eksperimen AI."
    >
      {/* About */}
      <section className="grid items-center gap-10 md:grid-cols-[360px_1fr]">
        {/* Flip card */}
        <div className="mx-auto w-full max-w-[360px]">
          <button
            onClick={() => setFlipped((f) => !f)}
            className={`flip-card aspect-[3/4] w-full ${flipped ? "flipped" : ""}`}
            aria-label="Flip profile card"
          >
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-face glass relative overflow-hidden">
                {/* Photo placeholder — replace src below with your photo */}
                <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-30" />
                <img
                  src="https://api.dicebear.com/9.x/glass/svg?seed=satria&backgroundType=gradientLinear"
                  alt="Satria Pratama"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 pt-20">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">Tap to flip</div>
                  <div className="mt-1 text-2xl font-bold">Satria Pratama</div>
                  <div className="text-sm text-muted-foreground">Web Developer · AI · Designer</div>
                </div>
              </div>
              {/* Back */}
              <div className="flip-face flip-back glass flex flex-col justify-between p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">Profile Card</div>
                  <h3 className="mt-2 text-2xl font-bold">Quick Bio</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Nama", "Satria Pratama"],
                    ["Tempat, Tgl Lahir", "Indonesia, 2007"],
                    ["Status", "Pelajar Aktif"],
                    ["Fokus", "Web Dev · AI · UI/UX"],
                    ["Tersedia", "Internship · Freelance"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-3 border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="font-medium">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center text-xs text-muted-foreground">Tap untuk balik ke depan</div>
              </div>
            </div>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="glass inline-block rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Belajar membangun masa depan dengan{" "}
            <span className="gradient-text">code, design, & AI.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Saya seorang pelajar yang antusias di dunia teknologi dan kreativitas digital. Saya senang
            mengeksplorasi <span className="text-foreground">web development</span>,{" "}
            <span className="text-foreground">UI/UX design</span>,{" "}
            <span className="text-foreground">artificial intelligence</span>, hingga{" "}
            <span className="text-foreground">data processing</span>. Saya percaya bahwa teknologi
            terbaik adalah teknologi yang membantu manusia — dengan tampilan yang elegan dan
            pengalaman yang menyenangkan.
          </p>
          <p className="mt-3 text-muted-foreground">
            Saat ini saya aktif membangun project, mengikuti bootcamp & komunitas, serta selalu
            terbuka untuk kolaborasi yang berdampak.
          </p>
          <p className="mt-6 text-2xl font-display font-bold leading-tight gradient-text">
            "Code with purpose. Design with feeling. Ship with speed."
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="glass inline-block rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              Skills
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What I <span className="gradient-text">do</span>
            </h2>
          </div>
          <Sparkles className="hidden h-8 w-8 text-primary md:block" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:neon"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-primary-foreground glow">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{group.cat}</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {group.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-[var(--gradient-primary)]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Node.js", "Python", "Figma", "GitHub", "MySQL", "TensorFlow"].map((t) => (
            <span
              key={t}
              className="glass rounded-full px-4 py-1.5 text-xs font-medium transition hover:border-primary hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Other categories quick view */}
      <section className="mt-20 grid gap-4 md:grid-cols-3">
        {[
          { icon: Database, title: "Data Processing", desc: "Cleaning, EDA, viz, dashboards." },
          { icon: Brain, title: "AI Engineering", desc: "ML, NLP, prompt engineering." },
          { icon: Video, title: "Editor", desc: "Video, motion graphics, thumbnails." },
        ].map((c) => (
          <div key={c.title} className="glass rounded-3xl p-6 transition hover:neon">
            <c.icon className="h-7 w-7 text-primary" />
            <h4 className="mt-3 text-lg font-bold">{c.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
