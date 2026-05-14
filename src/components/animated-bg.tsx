export function AnimatedBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] float" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px] float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-0 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[120px] float" style={{ animationDelay: "4s" }} />
    </div>
  );
}
