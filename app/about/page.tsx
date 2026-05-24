import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Addy",
  description: "Video Content Creator specialising in high-retention crypto and Web3 content.",
};

const approach = [
  {
    step: "01",
    title: "Hook first",
    desc: "The first 2 seconds decide everything. I obsess over openers until they're impossible to scroll past.",
  },
  {
    step: "02",
    title: "Retention by design",
    desc: "Pacing, cuts, and information flow are engineered to keep watch-time high — not just on the first watch, but every rewatch.",
  },
  {
    step: "03",
    title: "Numbers, not vibes",
    desc: "Every video gets reviewed against retention data. What the analytics show shapes what I do on the next one.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              I don&apos;t make content.<br />I build{" "}
              <span className="text-[#00d4aa]">retention engines.</span>
            </h1>
            <p className="text-[#888] leading-relaxed mb-6">
              Addy is a video content creator focused on the crypto and Web3
              space. The niche demands clarity, speed, and credibility — and the
              content has to earn every second of watch-time it gets.
            </p>
            <p className="text-[#888] leading-relaxed mb-8">
              Over the past few years I&apos;ve worked with projects ranging from
              early-stage protocols to established DeFi platforms, helping them
              communicate faster, retain more viewers, and grow real audiences —
              not just vanity numbers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4aa] text-black font-semibold rounded hover:bg-[#00b894] transition-colors"
            >
              Work with me
            </Link>
          </div>

          {/* PFP */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e]">
              <Image
                src="/pfp.jpg"
                alt="Addy"
                width={480}
                height={480}
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 border-t border-[#1e1e1e] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            The approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-4">
                <span className="text-[#00d4aa] text-sm font-bold tracking-widest">
                  {step}
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-[#888] leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-lg p-8">
            <h3 className="font-bold mb-4 text-lg">Specialisations</h3>
            <ul className="space-y-2 text-[#888] text-sm">
              {[
                "High-retention short-form (TikTok, Reels, Shorts)",
                "Long-form YouTube content",
                "Crypto & Web3 explainers",
                "Protocol and product launches",
                "Community-growth series",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#00d4aa] mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] rounded-lg p-8">
            <h3 className="font-bold mb-4 text-lg">What I&apos;m not</h3>
            <ul className="space-y-2 text-[#888] text-sm">
              {[
                "A generic video editor who'll take any niche",
                "Someone who posts without looking at the data",
                "A \"post more content\" advisor",
                "Available for unlimited revision rounds",
                "Cheap — good retention work has a premium",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#888] mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
