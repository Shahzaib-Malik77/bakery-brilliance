import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import viennese from "@/assets/viennese.jpg";
import bread from "@/assets/bread.jpg";
import dessert from "@/assets/dessert.jpg";
import savory from "@/assets/savory.jpg";
import sweet from "@/assets/sweet.jpg";
import culinary from "@/assets/culinary.jpg";
import ingredient from "@/assets/ingredient.jpg";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { label: "Viennese Pastry", img: viennese, wide: false },
  { label: "Bread", img: bread, wide: false },
  { label: "Dessert", img: dessert, wide: false },
  { label: "Savory", img: savory, wide: false },
  { label: "Sweet Treats", img: sweet, wide: false },
  { label: "Culinary Aid", img: culinary, wide: true },
  { label: "Ingredient", img: ingredient, wide: false },
];

export function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 120, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="flex justify-center bg-white py-8 md:py-16">
      <div ref={gridRef} className="w-[90%] md:w-[65%]">
        <div className="grid grid-cols-2 gap-x-2 gap-y-10 min-[1000px]:grid-cols-4">
          {ITEMS.map((item) => (
            <figure
              key={item.label}
              className={`gallery-item p-1 ${item.wide ? "col-span-2 min-[1000px]:col-span-2" : ""}`}
            >
              <div className="group relative w-full overflow-hidden" style={{ aspectRatio: item.wide ? "3/2" : "3/4" }}>
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[6000ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.2]"
                />
              </div>
              <figcaption className="font-manrope mt-2 text-left text-sm font-medium text-black">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
