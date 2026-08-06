import { useEffect, useRef, useState } from "react";
import { SplitChars } from "./SplitChars";
import { Aurora } from "./Fx";


const VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_113235_88e0d62e-8103-40c1-948e-f0a4f886ffd1.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_114315_ee3663e6-bd79-41b4-9e5b-0fae62827eb9.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_114559_dca18b14-90f5-47c4-8a84-3cbae9bd8a0c.mp4",
];

const SCROLL_PER_SLIDE_VH = 150;

const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [clips, setClips] = useState<number[]>([0, 0]);
  const [h1Done, setH1Done] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const perSlide = (window.innerHeight * SCROLL_PER_SLIDE_VH) / 100;
      const scrolled = Math.max(0, -el.getBoundingClientRect().top);
      const next = VIDEOS.slice(1).map((_, i) => {
        const local = Math.min(1, Math.max(0, (scrolled - i * perSlide) / perSlide));
        return easeInOut(local);
      });
      setClips(next);
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
    <div ref={wrapRef} className="relative" style={{ height: "calc(100vh + 300vh)" }}>
      <section className="sticky top-0 h-screen w-full overflow-visible">
        {VIDEOS.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={
              i === 0
                ? undefined
                : {
                    clipPath: `ellipse(${5 + (clips[i - 1] ?? 0) * 150}% ${8 + (clips[i - 1] ?? 0) * 150}% at 50% 50%)`,
                  }
            }
          >
            <video className="h-full w-full object-cover" src={src} autoPlay loop muted playsInline />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <Aurora />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 4px)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0" style={{ paddingTop: "calc(80px + 60px)" }}>
          <p className="font-luxurious gold-sweep text-center text-[12vw] leading-none md:text-[3vw]">
            <SplitChars text="for Professionals" start={h1Done} />
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
          <span className="font-manrope text-outline text-[16vw] font-black uppercase leading-none tracking-[-0.02em] opacity-40">
            EST. 1998
          </span>
        </div>

        <h1
          className="pointer-events-none absolute inset-x-0 bottom-[48px] px-4 text-center font-accent text-[40px] leading-[1.1] text-primary drop-shadow-[0_0_40px_rgba(203,157,6,0.45)] md:bottom-[-26px] md:whitespace-nowrap md:px-0 md:text-[9.7vw] md:leading-none md:tracking-[-0.04em]"

        >
          <SplitChars text="THE SMART BAKERY SOLUTION" onDone={() => setH1Done(true)} />
        </h1>

      </section>
    </div>
  );
}
