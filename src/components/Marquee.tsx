const WORDS = [
  "Gin Tonic",
  "Desde 2014",
  "Botánicos",
  "Barcelona",
  "Cítricos",
  "Copas balón",
  "Hielo esférico",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-serif text-3xl md:px-12 md:text-5xl ${
              i % 2 === 0
                ? "font-light text-[#EDEAE3]"
                : "font-light italic text-white/30"
            }`}
          >
            {w}
          </span>
          <span className="h-2 w-2 rotate-45 border border-white/35" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-[#050505] py-7 md:py-9">
      <div className="animate-marquee flex w-max">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
