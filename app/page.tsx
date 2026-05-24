import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "2.4M+", label: "Total views delivered" },
  { value: "68%", label: "Avg. retention rate" },
  { value: "40+", label: "Videos produced" },
  { value: "12+", label: "Brands worked with" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div>
            <p className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4">
              Video Content Creator
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Addy
            </h1>
            <p className="text-2xl md:text-3xl font-light text-[#888] leading-snug mb-10 max-w-xl">
              I make videos people actually watch —{" "}
              <span className="text-white font-medium">all the way through.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="px-6 py-3 border border-[#00d4aa] text-[#00d4aa] font-semibold rounded hover:bg-[#00d4aa] hover:text-black transition-all"
              >
                View my work
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#00d4aa] text-black font-semibold rounded hover:bg-[#00b894] transition-colors"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

          {/* PFP */}
          <div className="hidden md:flex justify-end">
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e]">
              <Image
                src="/pfp.jpg"
                alt="Addy"
                width={460}
                height={460}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[#1e1e1e] py-12 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-bold text-[#00d4aa] tabular-nums">
                {value}
              </span>
              <span className="text-sm text-[#888]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value prop */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Crypto and Web3 content that{" "}
              <span className="text-[#00d4aa]">holds attention</span> and builds
              audiences.
            </h2>
            <p className="text-[#888] leading-relaxed mb-8">
              Most projects create content that gets skipped. I build videos
              designed around retention — every cut, hook, and pacing decision
              made to keep viewers watching and coming back.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold text-[#00d4aa] hover:underline underline-offset-4"
            >
              More about how I work →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Short-form", desc: "TikTok, Shorts, Reels — hooks in the first 2 seconds" },
              { title: "Long-form", desc: "YouTube explainers, breakdowns, and deep-dives" },
              { title: "Web3 native", desc: "DeFi, NFTs, L1/L2s — I speak the language" },
              { title: "Data-driven", desc: "Every video optimised using real retention analytics" },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#111] border border-[#1e1e1e] rounded-lg p-5"
              >
                <h3 className="font-semibold mb-2 text-white">{title}</h3>
                <p className="text-xs text-[#888] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want results like these?
          </h2>
          <p className="text-[#888] mb-8 max-w-md mx-auto">
            Drop a message — I respond fast and get straight to the point.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4aa] text-black font-bold rounded hover:bg-[#00b894] transition-colors text-lg"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
