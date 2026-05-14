import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/certificate", label: "Certificate" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="gradient-text text-lg">Satria</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
