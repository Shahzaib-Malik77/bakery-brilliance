import { Download, MessageCircle } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <path
        d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
        fill="currentColor"
      />
      <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="currentColor" />
      <path
        d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ITEMS = [
  { icon: <Download className="h-5 w-5" />, label: "Download Brochure" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
  { icon: <MessageCircle className="h-5 w-5" />, label: "Chat With Us" },
];

export function FloatingNav() {
  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:right-6 md:flex">
      {ITEMS.map((item) => (
        <a
          key={item.label}
          href="#"
          className="group flex h-12 items-center gap-0 overflow-hidden rounded-full bg-black px-3.5 text-primary shadow-lg transition-colors duration-300 hover:bg-gold"
        >
          {item.icon}
          <span className="font-body max-w-0 whitespace-nowrap text-[13px] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[180px] group-hover:opacity-100">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
