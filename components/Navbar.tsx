"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-ink">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-sm font-bold font-mono">
            D
          </span>
          Daisy Auto Sales
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-steel">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+14055551234" className="flex items-center gap-2 font-mono text-sm text-ink">
            <Phone size={15} strokeWidth={2} />
            (405) 555-1234
          </a>
          <Link
            href="/inventory"
            className="rounded-md bg-signal px-4 py-2 text-sm font-medium text-white hover:bg-signal-dark transition-colors"
          >
            View Inventory
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-hairline bg-surface px-6 py-4 flex flex-col gap-4 font-body text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink">
              {l.label}
            </Link>
          ))}
          <a href="tel:+14055551234" className="flex items-center gap-2 font-mono text-ink">
            <Phone size={15} /> (405) 555-1234
          </a>
        </nav>
      )}
    </header>
  );
}
