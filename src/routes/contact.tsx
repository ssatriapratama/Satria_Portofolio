import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/page-shell";
import { SOCIALS } from "@/components/footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Satria Pratama" },
      { name: "description", content: "Mari berkolaborasi! Hubungi Satria Pratama via WhatsApp, Email, Instagram, LinkedIn, atau GitHub." },
      { property: "og:title", content: "Contact — Satria Pratama" },
      { property: "og:description", content: "Hubungi Satria Pratama untuk kolaborasi, internship, atau project." },
    ],
  }),
  component: ContactPage,
});

const SOCIAL_LIST = [
  { href: SOCIALS.whatsapp, icon: MessageCircle, label: "WhatsApp", handle: "+62 899-2517-700" },
  { href: SOCIALS.email, icon: Mail, label: "Email", handle: "ssatriapratama629@gmail.com" },
  { href: SOCIALS.instagram, icon: Instagram, label: "Instagram", handle: "@ssatria.999" },
  { href: SOCIALS.linkedin, icon: Linkedin, label: "LinkedIn", handle: "Satria Pratama" },
  { href: SOCIALS.github, icon: Github, label: "GitHub", handle: "@ssatriapratama" },
];

type Comment = { name: string; account: string; message: string; at: string };

const SEED_COMMENTS: Comment[] = [
  { name: "Aditya R.", account: "@adityar", message: "Portfolio-nya keren banget bro, animasinya smooth!", at: "2 hari lalu" },
  { name: "Mira", account: "@miradesign", message: "Vibes futuristiknya dapet, semangat berkarya!", at: "5 hari lalu" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState<Comment[]>(SEED_COMMENTS);
  const [comment, setComment] = useState({ name: "", account: "", message: "" });

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Lengkapi semua field dulu ya.");
      return;
    }
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ssatriapratama629@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Membuka aplikasi email kamu...");
  };

  const postComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.name || !comment.message) {
      toast.error("Nama dan komentar wajib diisi.");
      return;
    }
    setComments((c) => [{ ...comment, at: "baru saja" }, ...c]);
    setComment({ name: "", account: "", message: "" });
    toast.success("Komentar terkirim, makasih ya!");
  };

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Let's <span className="gradient-text">Connect</span></>}
      description="Punya project, kolaborasi, atau sekadar ngobrol soal teknologi? Sapa aku 👋"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={sendMail}
          className="glass rounded-3xl p-6 md:p-8"
        >
          <div className="mb-5 flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Send a Message</span>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Nama</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Nama kamu"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="kamu@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Pesan</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Tulis pesan, ide, atau project kamu..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01] glow"
            >
              <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              Let's Collaborate
            </button>
          </div>
        </motion.form>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {SOCIAL_LIST.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="glass group flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-primary hover:neon"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-primary-foreground glow">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.handle}</div>
              </div>
              <span className="text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Open →
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Comments */}
      <section className="mt-20">
        <div className="text-center">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Guestbook
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tinggalkan <span className="gradient-text">Komentar</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Sapa, beri saran, atau tinggalkan jejak di sini.</p>
        </div>

        <form
          onSubmit={postComment}
          className="glass mx-auto mt-8 max-w-2xl rounded-3xl p-6"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={comment.name}
              onChange={(e) => setComment({ ...comment, name: e.target.value })}
              placeholder="Nama kamu"
              className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
            <input
              value={comment.account}
              onChange={(e) => setComment({ ...comment, account: e.target.value })}
              placeholder="Akun (mis. @username) — opsional"
              className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <textarea
            rows={3}
            value={comment.message}
            onChange={(e) => setComment({ ...comment, message: e.target.value })}
            placeholder="Tulis komentarmu..."
            className="mt-3 w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <button
            type="submit"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" /> Kirim Komentar
          </button>
        </form>

        <ul className="mx-auto mt-8 max-w-2xl space-y-3">
          {comments.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-sm font-bold text-primary-foreground">
                  {c.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">
                    {c.name} {c.account && <span className="text-xs text-primary">{c.account}</span>}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{c.at}</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.message}</p>
            </motion.li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
