## Personal Branding Portfolio — Satria Pratama

Multi-page portfolio futuristik dengan dark/light mode, palet **Cyber Violet** (`#0a0a1a / #141432 / #7c3aed / #22d3ee`) dan tipografi **Space Grotesk + DM Sans**.

### Struktur Routes (TanStack Start, file terpisah)

```
src/routes/
  __root.tsx          → shell + ThemeProvider, Navbar, Footer, ScrollProgress, BackToTop
  index.tsx           → / (Home)
  profile.tsx         → /profile
  experience.tsx      → /experience
  portfolio.tsx       → /portfolio
  certificate.tsx     → /certificate
  contact.tsx         → /contact
```

Setiap route punya `head()` sendiri (title, description, og:title/description) untuk SEO.

### Halaman & Komponen

**Home (`/`)**

- Hero futuristik: animated gradient blob + grid background, particle effect ringan
- Headline + animated typing text ("Web Developer", "AI Enthusiast", "UI/UX Designer", "Data Engineer")
- Foto/avatar dengan glow ring
- CTA: "View Portfolio" → `/portfolio`, "Contact Me" → `/contact`
- Quick highlights (skill chips, social icons)

**Profile (`/profile`)**

- About Me dengan reveal-on-scroll
- **Flip card foto** (klik untuk flip) — depan: foto + nama + tagline; belakang: ringkasan profile kategori (Nama, Tempat Tanggal Lahir, Status  Pendidikan, Fokus karier, Tersedia)
- Skill section: animated cards + progress bar + glow hover
  - Kategori: Frontend, Backend, AI, Data Processing, Editor, Soft Skills
  - Icons (lucide + simple-icons via inline SVG): HTML, CSS, JS, React, Tailwind, Figma, GitHub, Python, dll
- Personal tagline besar dengan gradient text

**Experience (`/experience`)**

- Vertical interactive timeline (alternating left/right di desktop, single column di mobile)
- Item: organisasi, kepanitiaan, webinar, bootcamp, freelance, project
- Klik item → modal/expand panel berisi deskripsi singkat + foto kegiatan (placeholder dulu, mudah diganti)

**Portfolio (`/portfolio`)**

- Filter kategori: Full Stack Web, AI Engineering, Cyber Security, UI/UX, Lainnya
- Grid card modern dengan hover (tilt + glow + overlay)
- Setiap card: nama project, deskripsi singkat, tech stack chips, tombol Live Demo + GitHub (eksternal link langsung membuka)
- Modal detail saat card diklik (deskripsi panjang + proses pembuatan)

**Certificate (`/certificate`)**

- Filter kategori kegiatan (Bootcamp, Webinar, Course, Kompetisi)
- Grid gallery dengan thumbnail
- Klik → modal preview foto sertifikat full + keterangan (penerbit, tanggal, deskripsi singkat)

**Contact (`/contact`)**

- Contact form modern (nama, email, pesan) — `mailto:` ke `ssatriapratama629@gmail.com` (tanpa backend)
- Social buttons interaktif dengan glow hover, link langsung ke akun:
  - WhatsApp `https://wa.me/628992517700`
  - Email `mailto:ssatriapratama629@gmail.com`
  - GitHub `https://github.com/ssatriapratama`
  - Instagram [https://www.instagram.com/ssatria.999?igsh=MXBvejIyZWlsOHNnOA==](https://www.instagram.com/ssatria.999?igsh=MXBvejIyZWlsOHNnOA==)
  - LinkedIn [https://github.com/ssatriapratama](https://github.com/ssatriapratama)
- CTA besar "Let's Connect" / "Let's Collaborate"

### Komponen Global (di `__root.tsx`)

- **Navbar**: sticky transparan + backdrop blur, active indicator (TanStack `activeProps`), animated hamburger di mobile (sheet drawer)
- **Footer**: futuristik dengan gradient line & social
- **ThemeProvider**: light/dark toggle dengan smooth color transition (CSS transition pada root)
- **ScrollProgress**: bar tipis di atas (framer-motion useScroll)
- **BackToTop**: floating button muncul setelah scroll
- **PageTransition**: fade/slide saat pindah route (AnimatePresence di Outlet)
- **LoadingScreen**: tampil sekali saat first mount (1–1.5s)
- **ParticleBackground**: canvas ringan di hero (low cost)

### Design System (`src/styles.css`)

- Palet Cyber Violet sebagai tokens semantik:
  - Light: bg `#fafbfc`, foreground gelap, primary `#7c3aed`, accent `#22d3ee`, surface clean glass
  - Dark: bg `#0a0a1a`, surface `#141432`, primary `#7c3aed` glow, accent `#22d3ee` neon
- Tokens tambahan: `--gradient-primary`, `--gradient-hero`, `--shadow-glow`, `--shadow-neon`, `--glass-bg`, `--glass-border`
- Font: Space Grotesk (heading) + DM Sans (body) via Google Fonts di `__root.tsx`
- Utility: `.glass`, `.glow`, `.neon-text`, `.gradient-text`, `.float`, `.story-link`

### Animasi & Interaksi

- Library: `framer-motion` (sudah pattern umum), CSS keyframes untuk float/pulse/glow
- Reveal-on-scroll, fade-in, scale-in, hover scale, flip card 3D, tilt card
- Smooth scroll `scroll-behavior: smooth`
- Microinteraction pada button (glow on hover, ripple ringan)

### Teknologi

- TanStack Start (template existing) + React 19 + Tailwind v4
- shadcn/ui (Button, Card, Dialog, Sheet, Tabs, Badge, Input, Textarea) — sudah tersedia
- `framer-motion` untuk animasi
- Lucide icons + custom SVG untuk tech logos
- Semua dependency baru: install via `bun add framer-motion`

### SEO & Performance

- Meta tags per route, single H1, semantic HTML, alt text, lazy load gambar
- Mobile-first responsive (Tailwind breakpoints)
- Animasi pakai `transform/opacity` (GPU friendly)

### Catatan Konten

- Konten teks (deskripsi project, sertifikat, experience) memakai **placeholder realistis** sesuai kategori yang user sebutkan; semua mudah diganti nanti. Foto/sertifikat memakai placeholder gradient/illustrasi (bisa di-swap dengan upload user nanti).
- landing page menggunakan file html,css, dan js terpisah
- disediakan tempat atau code untuk menampilkan photo/gambar dari setiap gambar yang tersedia di semua menu yang ada
- tambahkan kolom komentar di contact me sesuai akun dan komentarnya

### Yang TIDAK termasuk di iterasi pertama

- Backend (form contact pakai mailto, bukan kirim server-side)
- CMS / database
- Internationalization