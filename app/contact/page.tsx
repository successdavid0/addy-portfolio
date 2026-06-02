export const metadata = {
  title: "Contact — Addy",
  description: "Get in touch to work with Addy on your next video project.",
};

const socials = [
  {
    label: "Email",
    value: "pvtsoap26@gmail.com",
    href: "mailto:pvtsoap26@gmail.com",
    note: "Best for briefs and project details",
  },
  {
    label: "Telegram",
    value: "@Addyyyonchain",
    href: "https://t.me/Addyyyonchain",
    note: "Fastest way to schedule a call",
  },
  {
    label: "X / Twitter",
    value: "@AddyyyOnChain",
    href: "https://x.com/AddyyyOnChain",
    note: "Follow for content strategy threads",
  },
];

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <p className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-xl">
          Want results like these?{" "}
          <span className="text-[#00d4aa]">Let&apos;s talk.</span>
        </h1>
        <p className="text-[#888] max-w-lg leading-relaxed">
          No forms. No bots. Just direct lines — pick whichever works best for
          you.
        </p>
      </section>

      {/* Contact cards */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 max-w-xl">
          {socials.map(({ label, value, href, note }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group bg-[#111] border border-[#1e1e1e] rounded-lg p-6 hover:border-[#00d4aa]/60 hover:bg-[#111]/80 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#888] font-semibold uppercase tracking-widest">
                  {label}
                </span>
                <svg
                  className="w-4 h-4 text-[#444] group-hover:text-[#00d4aa] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="text-lg font-bold text-white mb-1">{value}</p>
              <p className="text-sm text-[#888]">{note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Divider note */}
      <section className="py-16 px-6 border-t border-[#1e1e1e] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#888] text-sm max-w-md leading-relaxed">
            I work with a limited number of projects at a time to keep quality
            high. If you&apos;re serious about results, reach out — I&apos;ll
            tell you honestly if we&apos;re a good fit.
          </p>
        </div>
      </section>
    </>
  );
}
