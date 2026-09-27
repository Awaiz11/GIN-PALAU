import { ArrowUp } from "lucide-react";
import { FadeUp } from "./Reveal";

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-6 pt-20 md:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="flex flex-col justify-between gap-14 md:flex-row">
          <FadeUp y={30}>
            <p className="font-serif text-2xl italic font-light text-[#EDEAE3]">
              Gin Palau
            </p>
            <p className="mt-4 max-w-xs text-xs font-light leading-[1.9] text-white/45">
              Especialistas en Gin Tonic desde 2014. Una biblioteca líquida en
              el corazón del Eixample, Barcelona.
            </p>
          </FadeUp>

          <div className="flex gap-20">
            <FadeUp y={30} delay={0.1}>
              <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">
                Explorar
              </p>
              <ul className="mt-5 space-y-3 text-sm font-light text-white/65">
                {[
                  ["Historia", "#historia"],
                  ["Colección", "#coleccion"],
                  ["El Ritual", "#ritual"],
                  ["Visítanos", "#visita"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="transition-colors duration-500 hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp y={30} delay={0.2}>
              <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">
                Síguenos
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="#inicio"
                  aria-label="Instagram"
                  className="border border-white/15 p-3 text-white/60 transition-all duration-500 hover:border-white/50 hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#inicio"
                  aria-label="Facebook"
                  className="border border-white/15 p-3 text-white/60 transition-all duration-500 hover:border-white/50 hover:text-white"
                >
                  <FacebookIcon />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ——— Monumental wordmark ——— */}
        <FadeUp y={60} className="relative mt-24 select-none">
          <p className="text-outline text-center font-serif text-[13.5vw] leading-[0.82] tracking-[0.04em]">
            GIN PALAU
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </FadeUp>

        <div className="flex items-center justify-between border-t border-white/[0.07] py-7 text-[9px] uppercase tracking-[0.3em] text-white/35">
          <span>© 2025 Gin Palau Barcelona</span>
          <span className="hidden md:block">
            Especialistas en Gin Tonic desde 2014
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="group flex items-center gap-2 text-white/50 transition-colors duration-500 hover:text-white"
          >
            Subir
            <ArrowUp
              size={14}
              className="transition-transform duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
