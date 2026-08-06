import { useEffect, useRef, useState } from "react";

/** Animated film grain across the whole page. */
export function Grain() {
  return (
    <div className="grain-overlay pointer-events-none fixed inset-[-50%] z-[70] opacity-[0.05] mix-blend-overlay" />
  );
}

/** Gold scroll progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px]">
      <div
        className="h-full origin-left bg-gold shadow-[0_0_18px_2px_var(--gold)]"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/** Soft gold light that follows the cursor. Desktop only. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 260}px, ${cy - 260}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[520px] w-[520px] rounded-full opacity-40 mix-blend-screen blur-[90px] md:block"
      style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
    />
  );
}

/** Drifting aurora blobs for dark sections. */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="aurora-blob absolute left-[-10%] top-[-20%] h-[60vh] w-[60vh] rounded-full opacity-30"
        style={{ background: "var(--gold)" }}
      />
      <div
        className="aurora-blob absolute bottom-[-25%] right-[-10%] h-[70vh] w-[70vh] rounded-full opacity-20 [animation-delay:-8s]"
        style={{ background: "oklch(0.6 0.15 30)" }}
      />
      <div
        className="aurora-blob absolute left-[35%] top-[30%] h-[45vh] w-[45vh] rounded-full opacity-15 [animation-delay:-15s]"
        style={{ background: "oklch(0.7 0.13 200)" }}
      />
    </div>
  );
}

/** Infinite gold ticker strip. */
export function Ticker({
  items,
  reverse = false,
  variant = "gold",
}: {
  items: string[];
  reverse?: boolean;
  variant?: "gold" | "outline";
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`marquee-mask relative flex overflow-hidden border-y py-3 ${
        variant === "gold" ? "border-gold/40 bg-gold text-background" : "border-gold/30 bg-background text-gold"
      }`}
    >
      <div className={`flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 ${reverse ? "ticker-track-rev" : "ticker-track"}`}>
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-manrope text-sm font-extrabold uppercase tracking-[0.35em] md:text-base"
          >
            {t}
            <span className="pl-10 opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
