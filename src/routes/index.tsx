import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { SOCIALS } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satria Pratama — Futuristic Digital Portfolio" },
      { name: "description", content: "Web developer, AI enthusiast & creative technologist. Explore my projects, experiences, and certifications." },
      { property: "og:title", content: "Satria Pratama — Futuristic Digital Portfolio" },
      { property: "og:description", content: "Web developer, AI enthusiast & creative technologist." },
    ],
  }),
  component: Home,
});

const ROLES = ["Web Developer", "AI Enthusiast", "UI/UX Designer", "Creative Technologist"];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => (p + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

function Home() {
  const typed = useTyping(ROLES);

  return (
    <main className="relative">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for collaboration & internship
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="gradient-text">Satria Pratama</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex h-10 items-center justify-center gap-2 text-lg text-muted-foreground sm:text-2xl"
        >
          <span>I build</span>
          <span className="font-display font-semibold text-foreground">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-[2px] bg-primary animate-blink sm:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          A student crafting futuristic digital experiences at the intersection of{" "}
          <span className="text-foreground">code</span>,{" "}
          <span className="text-foreground">design</span>, and{" "}
          <span className="text-foreground">AI</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex gap-3"
        >
          {[
            { href: SOCIALS.github, icon: Github, label: "GitHub" },
            { href: SOCIALS.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
            { href: SOCIALS.whatsapp, icon: MessageCircle, label: "WhatsApp" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:scale-110 hover:text-primary hover:neon"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "10+", v: "Projects shipped" },
            { k: "5+", v: "Tech stacks mastered" },
            { k: "∞", v: "Ideas in the pipeline" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 text-center transition hover:-translate-y-1 hover:neon"
            >
              <div className="text-5xl font-bold gradient-text">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
