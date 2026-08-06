import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  start?: boolean;
  onDone?: () => void;
};

/** Per-character reveal (GSAP powered, no paid SplitText plugin needed). */
export function SplitChars({ text, className, delay = 0, start = true, onDone }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!start || !ref.current || done.current) return;
    done.current = true;
    const chars = ref.current.querySelectorAll(".split-char");
    const tween = gsap.fromTo(
      chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
        delay: delay / 1000,
        onComplete: () => onDone?.(),
      },
    );
    return () => {
      tween.kill();
    };
  }, [start, delay, onDone]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="split-char inline-block opacity-0" aria-hidden="true">
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
