"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-[#00d4aa] transition-colors"
        >
          ADDY
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-[#00d4aa]"
                    : "text-[#888] hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-[#00d4aa] text-black rounded hover:bg-[#00b894] transition-colors"
        >
          Let&apos;s talk
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1e1e1e] px-6 py-4 flex flex-col gap-4 bg-[#0a0a0a]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname === href ? "text-[#00d4aa]" : "text-[#888] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-sm font-semibold px-4 py-2 bg-[#00d4aa] text-black rounded hover:bg-[#00b894] transition-colors text-center"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </nav>
  );
}
