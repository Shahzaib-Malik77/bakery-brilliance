import { useEffect, useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const REGIONS = ["Mainland China", "Hong Kong / Macau", "Taiwan"];

const LEFT_MENU = [
  {
    label: "About Us",
    items: ["Our History", "Food Service Experts", "Creating unforgettable culinary experiences"],
  },
  {
    label: "Partnering With Us",
    items: ["Sourcing from trusted suppliers", "Empowering Customer Operations", "Our Experts"],
  },
];

const RIGHT_MENU = [
  {
    label: "Our Products",
    items: ["Viennese Pastry", "Bread", "Dessert", "Savory", "Speciality Pastry", "Culinary Aid", "Ingredient"],
  },
  {
    label: "Let's Connect!",
    items: ["Contact", "LinkedIn", "WhatsApp", "Newsletter", "Brochure", "Join Us"],
  },
];

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <svg
      viewBox="0 0 305 304"
      fill="none"
      className={`transition-all duration-300 ${scrolled ? "h-[24px] md:h-[32px]" : "h-[32px] md:h-[48px]"}`}
    >
      <path d="M157.135 303.572C157.135 222.53 223.131 156.832 304.174 156.832V303.572H157.135Z" fill="currentColor" />
      <path d="M147.039 303.572C147.039 222.53 81.0425 156.832 0 156.832V303.572H147.039Z" fill="currentColor" />
      <path d="M157.135 0C157.135 81.0426 223.131 146.74 304.174 146.74C304.174 65.698 238.178 0 157.135 0Z" fill="currentColor" />
      <path d="M147.039 0C147.039 81.0426 81.0425 146.74 0 146.74C0 65.698 65.9962 0 147.039 0Z" fill="currentColor" />
    </svg>
  );
}

function Dropdown({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="group relative">
      <button className="font-body flex items-center gap-1 whitespace-nowrap text-[13px] text-primary transition-colors hover:text-gold">
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full w-max min-w-[200px] -translate-x-1/2 translate-y-2 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="font-body block px-4 py-2.5 text-[13px] text-black transition-colors hover:bg-gold hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [region, setRegion] = useState(REGIONS[1]);
  const [regionOpen, setRegionOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "繁">("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allMenu = [...LEFT_MENU, ...RIGHT_MENU];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 flex items-center px-4 transition-all duration-300 md:px-10 ${
        scrolled ? "bg-black/90 py-2 shadow-md backdrop-blur-[80px]" : "bg-transparent py-4"
      }`}
    >
      {/* Left: region */}
      <div className="relative hidden flex-1 lg:block">
        <button
          onClick={() => setRegionOpen((v) => !v)}
          className="font-body flex items-center gap-2 text-[13px] text-primary transition-colors hover:text-gold"
        >
          <Globe className="h-4 w-4" />
          {region}
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        {regionOpen && (
          <div className="absolute left-0 top-full mt-2 w-max bg-white py-2 shadow-lg">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRegion(r);
                  setRegionOpen(false);
                }}
                className="font-body block w-full px-4 py-2.5 text-left text-[13px] text-black transition-colors hover:bg-gold hover:text-white"
              >
                {r}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Center */}
      <div className="flex flex-1 items-center justify-start gap-6 lg:justify-center lg:gap-8">
        <nav className="hidden items-center gap-8 lg:flex">
          {LEFT_MENU.map((m) => (
            <Dropdown key={m.label} {...m} />
          ))}
        </nav>
        <a href="#" aria-label="Bakery Facilities home" className="text-primary">
          <Logo scrolled={scrolled} />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {RIGHT_MENU.map((m) => (
            <Dropdown key={m.label} {...m} />
          ))}
        </nav>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="hidden items-center overflow-hidden rounded-sm border border-white/20 md:flex">
          {(["EN", "繁"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-body px-2.5 py-1 text-[12px] transition-colors ${
                lang === l ? "bg-gold text-white" : "text-primary hover:text-gold"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          className="text-primary lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex justify-end">
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-primary">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col divide-y divide-white/10">
            {allMenu.map((m) => (
              <div key={m.label} className="py-3">
                <button
                  onClick={() => setOpenAccordion(openAccordion === m.label ? null : m.label)}
                  className="font-accent flex w-full items-center justify-between text-left text-[22px] uppercase text-primary"
                >
                  {m.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openAccordion === m.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openAccordion === m.label && (
                  <div className="mt-2 flex flex-col gap-2 pl-1">
                    {m.items.map((i) => (
                      <a key={i} href="#" className="font-body text-[14px] text-white/60 hover:text-gold">
                        {i}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
