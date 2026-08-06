import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BODY =
  "In 1976, Mr Louis Le Duff opened the first French casual food restaurant, and from that single bakery grew a group devoted to craft, consistency and the daily pleasure of good bread. Today we bring that same French savoir-faire to professional kitchens across Asia, supplying chefs, hotels and cafés with frozen bakery and pastry made the traditional way.";

const PARTNERS = [
  "Bridor de France",
  "Traiteur de Paris",
  "Panidor",
  "Boncolac",
  "Mademoiselle Desserts",
  "Mountry",
  "Pfalzgraf",
  "Dolceria Alba",
  "St Michel",
  "Poppies Bakeries",
  "Alysse Food",
  "Les Delices du Chef",
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotate: 3 },
        {
          rotate: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom bottom", scrub: true },
        },
      );
      gsap.fromTo(
        ".reveal-word",
        { opacity: 0.1, filter: "blur(4px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top bottom-=20%", end: "bottom bottom", scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-white px-6 py-16 md:px-[18%] md:py-32">
      <h2 className="font-luxurious mb-[20px] text-center text-[32px] text-black">About us</h2>

      <div ref={containerRef} className="font-accent text-center text-[24px] uppercase leading-[36px] text-black md:text-[40px] md:leading-[56px]">
        {BODY.split(" ").map((w, i) => (
          <span key={i} className="reveal-word inline-block">
            {w}&nbsp;
          </span>
        ))}
      </div>

      <button className="font-manrope mt-10 bg-black px-8 py-3 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-gold">
        Read more
      </button>

      <div className="marquee-mask relative mt-16 w-full overflow-hidden md:mt-[140px]">
        <div className="marquee-track flex w-max gap-12">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span
              key={i}
              className="font-body whitespace-nowrap text-[14px] uppercase tracking-[0.2em] text-black/40"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
