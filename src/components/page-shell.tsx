import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-6 pb-20 pt-32"
    >
      <div className="mb-12 text-center">
        <span className="glass inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {children}
    </motion.main>
  );
}
