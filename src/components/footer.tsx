import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export const SOCIALS = {
  whatsapp: "https://wa.me/628992517700",
  email: "mailto:ssatriapratama629@gmail.com",
  github: "https://github.com/ssatriapratama",
  instagram: "https://www.instagram.com/ssatria.999?igsh=MXBvejIyZWlsOHNnOA==",
  linkedin: "https://www.linkedin.com/in/ssatria-pratama-8836b6352",
};

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--gradient-primary)] opacity-60" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold gradient-text">Satria Pratama</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Building the future at the intersection of code, design, and AI.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navigate</p>
          <ul className="mt-3 grid grid-cols-2 gap-1 text-sm">
            {[
              ["/", "Home"],
              ["/profile", "Profile"],
              ["/experience", "Experience"],
              ["/portfolio", "Portfolio"],
              ["/certificate", "Certificate"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</p>
          <div className="mt-3 flex gap-2">
            {[
              { href: SOCIALS.whatsapp, icon: MessageCircle, label: "WhatsApp" },
              { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
              { href: SOCIALS.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: SOCIALS.github, icon: Github, label: "GitHub" },
              { href: SOCIALS.email, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary hover:neon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Satria Pratama. Crafted with passion & pixels.
      </div>
    </footer>
  );
}
