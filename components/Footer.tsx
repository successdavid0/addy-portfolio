import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-[#888]">
          © {new Date().getFullYear()} Addy. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888] hover:text-[#00d4aa] transition-colors"
          >
            X / Twitter
          </Link>
          <Link
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888] hover:text-[#00d4aa] transition-colors"
          >
            Telegram
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#888] hover:text-[#00d4aa] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
