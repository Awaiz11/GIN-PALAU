import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Heritage from "./components/Heritage";
import Collection from "./components/Collection";
import Ritual from "./components/Ritual";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Curtain lifts after the 2s frosted-glass reveal
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while the loader is on stage
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-[#EDEAE3]">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* cinematic film grain */}
      <div className="grain pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-overlay" />

      <Navbar started={!loading} />

      <main>
        <Hero started={!loading} />
        <Marquee />
        <Heritage />
        <Collection />
        <Ritual />
        <Visit />
      </main>

      <Footer />
    </div>
  );
}
