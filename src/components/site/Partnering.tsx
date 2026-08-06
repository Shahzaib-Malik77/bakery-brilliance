import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout, ShieldCheck, Gauge, Users } from "lucide-react";
import { SplitChars } from "./SplitChars";
import bg from "@/assets/partnering-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { label: "Trusted Sourcing", Icon: Sprout },
  { label: "Food Safety Standards", Icon: ShieldCheck },
  { label: "Operational Efficiency", Icon: Gauge },
  { label: "Expert Support", Icon: Users },
];

export function Partnering() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".partner-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 1, y: 80 },
          {
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });
      gsap.to(".partner-icon", { y: -4, duration: 1.4, ease: "sine.inOut", repeat: -1, yoyo: true, stagger: 0.2 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background py-20"
    >
      <img src={bg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative flex w-[90%] flex-col items-center md:w-[64%]">
        <h2 className="font-accent mb-10 text-center text-[28px] uppercase leading-[1.4] text-primary md:text-[40px]">
          <SplitChars text="Partnering With Us" />
        </h2>

        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-[8px]">
          {CARDS.map(({ label, Icon }) => (
            <div
              key={label}
              className="partner-card flex flex-col items-center gap-3 bg-black px-4 py-6 text-center md:gap-4 md:px-6 md:py-8"
            >
              <Icon className="partner-icon h-10 w-10 text-gold md:h-12 md:w-12" strokeWidth={1.2} />
              <span className="font-body text-[12px] capitalize tracking-wide text-primary md:text-[14px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
