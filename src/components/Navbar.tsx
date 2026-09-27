import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { EASE } from "./Reveal";

const LINKS = [
  { label: "Historia", href: "#historia" },
  { label: "Colección", href: "#coleccion" },
  { label: "El Ritual", href: "#ritual" },
  { label: "Visítanos", href: "#visita" },
];

export default function Navbar({ started }: { started: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={started ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE, delay: 0.55 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-700 ${
          scrolled
            ? "border-b border-white/[0.06] bg-black/40 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-5 md:px-12">
          <a
            href="#inicio"
            className="font-serif text-base tracking-[0.28em] text-[#EDEAE3] md:text-lg"
          >
            GIN&nbsp;PALAU
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[10px] uppercase tracking-[0.32em] text-white/55 transition-colors duration-500 hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#visita"
              className="hidden items-center gap-2 border border-white/25 px-5 py-2.5 text-[10px] uppercase tracking-[0.28em] text-[#EDEAE3] transition-all duration-500 hover:bg-[#EDEAE3] hover:text-black md:inline-flex"
            >
              Reservar
              <ArrowUpRight size={13} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="text-[#EDEAE3] md:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ——— Mobile overlay menu ——— */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-black/80 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-base tracking-[0.28em]">
                GIN&nbsp;PALAU
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="text-[#EDEAE3]"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {LINKS.map((l, i) => (
                <span key={l.href} className="block overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-5xl italic font-light text-[#EDEAE3]"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.08 * i }}
                  >
                    {l.label}
                  </motion.a>
                </span>
              ))}
            </div>

            <motion.div
              className="px-8 pb-12 text-[10px] uppercase tracking-[0.35em] text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Barcelona — Desde 2014
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
