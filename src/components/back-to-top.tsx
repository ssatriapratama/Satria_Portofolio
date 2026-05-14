import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="glass fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-primary transition hover:scale-110 hover:neon"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
