import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy text-sm font-bold font-mono">
              D
            </span>
            Daisy Auto Sales
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Quality used cars and honest repair work, under one roof, since
            2011.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-medium mb-3 text-white/90">
            Visit Us
          </h3>
          <div className="flex items-start gap-2 text-white/70 mb-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>616 Santa Fe Pike, Columbia, TN 38401, United States</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 mb-2">
            <Phone size={16} className="shrink-0" />
            <span className="font-mono">(405) 555-1234</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Mail size={16} className="shrink-0" />
            <span>daisyautosales86@gmail.com</span>
          </div>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-medium mb-3 text-white/90">Hours</h3>
          <div className="flex items-start gap-2 text-white/70">
            <Clock size={16} className="mt-0.5 shrink-0" />
            <div className="space-y-1 font-mono text-[13px]">
              <div>Mon–Fri&nbsp;&nbsp;8:00–6:00</div>
              <div>Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00–4:00</div>
              <div>Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed</div>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-medium mb-3 text-white/90">
            Explore
          </h3>
          <div className="flex flex-col gap-2 text-white/70">
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50 font-mono">
        © {new Date().getFullYear()} Daisy Auto Sales. All rights reserved.
      </div>
    </footer>
  );
}
