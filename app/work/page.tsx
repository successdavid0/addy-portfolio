import Link from "next/link";

export const metadata = {
  title: "Work — Addy",
  description: "Featured videos, written posts, and project metrics.",
};

const projects = [
  {
    id: 1,
    role: "Founder",
    client: "Vyro",
    bullets: [
      "Founded and led Vyro, a creator-focused initiative aimed at collaborative video content production.",
      "Onboarded 10+ video creators and established a strong foundation during the early growth phase.",
      "Spearheaded innovative multi-creator video formats to effectively showcase project highlights and key messages.",
    ],
    stats: [
      { value: "10+", label: "Creators onboarded" },
    ],
    links: [],
  },
  {
    id: 2,
    role: "Video Creator",
    client: "Fhenix",
    bullets: [
      "Produced video content highlighting Fhenix's core features and ecosystem to drive awareness.",
      "Crafted engaging narratives tailored to the Web3 audience to increase project visibility.",
    ],
    stats: [],
    links: [
      { label: "View video 1", href: "https://x.com/AddyyyOnChain/status/2058801068604375507?s=20" },
      { label: "View video 2", href: "https://x.com/AddyyyOnChain/status/2047954748024996051?s=20" },
    ],
  },
  {
    id: 3,
    role: "Video Creator",
    client: "WalletConnect",
    bullets: [
      "Created 2 videos highlighting real-world use cases and the relevance of WalletConnect in local contexts.",
      "Focused on relatable storytelling to improve audience connection and product understanding.",
      "Generated 6,000+ views and 150+ interactions (likes and replies), driving meaningful engagement.",
    ],
    stats: [
      { value: "6,000+", label: "Views" },
      { value: "150+", label: "Interactions" },
      { value: "2", label: "Videos" },
    ],
    links: [
      { label: "View video 1", href: "https://x.com/AddyyyOnChain/status/2056393866383954334?s=20" },
      { label: "View video 2", href: "https://x.com/AddyyyOnChain/status/2055658335811342341?s=20" },
    ],
  },
  {
    id: 4,
    role: "Content Ambassador",
    client: "Reya",
    bullets: [
      "Produced engaging content that generated 10,000+ impressions and 1,000+ likes within one month.",
      "Played a key role in increasing platform visibility by consistently publishing high-volume, relevant content.",
      "Strengthened community engagement by effectively communicating updates, features, and announcements.",
    ],
    stats: [
      { value: "10,000+", label: "Impressions" },
      { value: "1,000+", label: "Likes" },
      { value: "1 month", label: "Duration" },
    ],
    links: [],
  },
  {
    id: 5,
    role: "Community Manager",
    client: "Memecoin Projects",
    bullets: [
      "Managed and scaled online communities by fostering engagement and maintaining active communication channels.",
      "Designed and executed campaigns, including incentive and reward systems to retain users.",
      "Successfully grew the community from 500 to 2,000+ members within one week.",
      "Contributed to increased visibility and market activity through community-driven initiatives.",
    ],
    stats: [
      { value: "500→2,000+", label: "Members in 1 week" },
    ],
    links: [],
  },
  {
    id: 6,
    role: "Workshop Facilitator",
    client: "Youkies Community",
    bullets: [
      "Conducted a 1-hour workshop on video creation and marketing strategies on X (Twitter).",
      "Taught foundational skills in content creation, storytelling, and audience engagement.",
      "Empowered community members to build and scale their personal content presence.",
    ],
    stats: [
      { value: "1hr", label: "Workshop" },
    ],
    links: [],
  },
];

const numberBlocks = [
  { value: "16,000+", label: "Views across WalletConnect & Fhenix" },
  { value: "1,000+", label: "Likes on Reya content" },
  { value: "150+", label: "Interactions on WalletConnect videos" },
  { value: "2,000+", label: "Community members grown in 1 week" },
  { value: "10,000+", label: "Impressions in 1 month (Reya)" },
  { value: "4+", label: "Brands and communities worked with" },
];

export default function Work() {
  return (
    <>
      <section className="pt-32 pb-8 px-6 max-w-6xl mx-auto">
        <p className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4">
          Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          The results speak.
        </h1>
        <p className="text-[#888] max-w-xl">
          Real projects, real numbers.
        </p>
      </section>

      {/* Numbers block */}
      <section className="py-16 px-6 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-[#888] uppercase tracking-widest mb-10">
            Headline metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {numberBlocks.map(({ value, label }) => (
              <div key={label}>
                <span className="block text-3xl md:text-4xl font-bold text-[#00d4aa] tabular-nums mb-1">
                  {value}
                </span>
                <span className="text-sm text-[#888]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-[#111] border border-[#1e1e1e] rounded-lg p-7 hover:border-[#00d4aa]/40 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs text-[#00d4aa] font-semibold tracking-widest uppercase mb-1">
                    {p.role}
                  </p>
                  <h3 className="text-xl font-bold">{p.client}</h3>
                </div>
                {/* Inline stats */}
                <div className="flex gap-6 flex-wrap">
                  {p.stats.map(({ value, label }) => (
                    <div key={label} className="text-right">
                      <span className="block text-lg font-bold tabular-nums text-[#00d4aa]">
                        {value}
                      </span>
                      <span className="text-xs text-[#888]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#888] leading-relaxed">
                    <span className="text-[#00d4aa] mt-0.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              {p.links.length > 0 && (
                <div className="flex gap-4 flex-wrap">
                  {p.links.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#00d4aa] border border-[#00d4aa]/40 rounded px-3 py-1.5 hover:bg-[#00d4aa] hover:text-black transition-all"
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want results like these?</h2>
          <p className="text-[#888] mb-8">Let&apos;s talk.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-[#00d4aa] text-black font-bold rounded hover:bg-[#00b894] transition-colors text-lg"
          >
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
