import { Phone, Mail } from "lucide-react";

const OFFICES = [
  {
    region: "Head Office (Hong Kong)",
    name: "Bakery Facilities Ltd.",
    address: "Unit 1201, Tower 2, Kowloon Bay, Hong Kong",
    phone: "+852 2407 8840",
    email: "orders@bakeryfacilities.com",
  },
  {
    region: "Mainland China",
    name: "Bakery Facilities (Shanghai) Co.",
    address: "Room 806, Jing'an District, Shanghai",
    phone: "+86 21 6288 1120",
    email: "china@bakeryfacilities.com",
  },
  {
    region: "Taiwan",
    name: "Bakery Facilities Taiwan Inc.",
    address: "5F, Banqiao District, New Taipei City",
    phone: "+886 2 2258 4410",
    email: "taiwan@bakeryfacilities.com",
  },
  {
    region: "Macau",
    name: "Bakery Facilities Macau Lda.",
    address: "Av. da Praia Grande, Macau",
    phone: "+853 2833 7712",
    email: "macau@bakeryfacilities.com",
  },
];

const NAVIGATE = ["About Us", "Partnering With Us", "Our Products", "Let's Connect!"];
const SOCIAL = ["WhatsApp", "LinkedIn", "Newsletter"];

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="px-6 pb-10 pt-12 md:px-10 md:pb-16 md:pt-20 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-body text-[13px] uppercase tracking-wider text-black/40">+852 2407 8840</p>
            <a
              href="mailto:orders@bakeryfacilities.com"
              className="font-body mt-2 block text-[14px] font-bold text-black transition-colors hover:text-gold"
            >
              orders@bakeryfacilities.com
            </a>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-body mb-3 text-[12px] uppercase tracking-wider text-black/40">Navigate</p>
              <ul className="space-y-2">
                {NAVIGATE.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-body text-[15px] font-medium text-black hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body mb-3 text-[12px] uppercase tracking-wider text-black/40">Social</p>
              <ul className="space-y-2">
                {SOCIAL.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-body text-[15px] font-medium text-black hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
          {OFFICES.map((o) => (
            <div key={o.region}>
              <p className="font-body text-[12px] uppercase tracking-wider text-black/40">{o.region}</p>
              <p className="font-body mt-2 text-[13px] font-semibold text-black">{o.name}</p>
              <p className="font-body mt-1 text-[12px] text-black/60">{o.address}</p>
              <p className="font-body mt-2 flex items-center gap-1.5 text-[12px] text-black/60">
                <Phone className="h-3 w-3" /> {o.phone}
              </p>
              <p className="font-body mt-1 flex items-center gap-1.5 text-[12px] text-black/60">
                <Mail className="h-3 w-3" /> {o.email}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-black px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p className="font-body text-[12px] text-white/40">
          © {new Date().getFullYear()} Bakery Facilities. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-[12px] text-white/40 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="font-body text-[12px] text-white/40 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
