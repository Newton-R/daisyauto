import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import StatBlock from "@/components/StatBlock";
import { stats, services } from "@/lib/data";
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/VehicleCard";

const testimonials = [
  {
    quote:
      "The team was upfront from the start, explained everything without pressure, and fixed my car the same day.",
    name: "Nicole R.",
    detail: "Service customer",
  },
  {
    quote:
      "We bought from Daisy after getting a fair, honest walkthrough of the vehicle and the repair history. It felt local and real.",
    name: "Marcus T.",
    detail: "Auto buyer",
  },
  {
    quote:
      "The shop is organized, quick, and the communication is excellent. You can tell they care about doing the job right.",
    name: "Ashley P.",
    detail: "Repeat customer",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-hairline bg-navy fade-section">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-4">
                United States, Columbia &middot; Est. 2011
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.08] text-white mb-5">
                Honest service. Real people. A shop you can trust.
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                Daisy Auto Sales brings together buying confidence and
                dependable auto care in one place, so you get straight answers,
                fair pricing, and work done by people who know the difference
                between a quick fix and a right fix.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-white text-navy px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  View Services
                </Link>
              </div>

              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <StatBlock key={s.label} label={s.label} value={s.value} />
                ))}
              </div> */}
            </div>

            {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(18,22,28,0.12)] backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70 mb-4">
                Visit us
              </p>
              <div className="space-y-5 text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-white mt-1"
                    size={18}
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="font-display text-lg text-white">
                      4521 NW 39th Expy
                    </p>
                    <p className="text-sm text-white/75">
                      Oklahoma City, OK 73112
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-white" size={18} strokeWidth={1.8} />
                  <a
                    href="tel:+14055551234"
                    className="font-mono text-sm text-white hover:text-white/80"
                  >
                    (405) 555-1234
                  </a>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 mb-2">
                    Hours
                  </p>
                  <div className="space-y-1 font-mono text-sm text-white">
                    <div>Mon–Fri &nbsp; 8:00 AM – 6:00 PM</div>
                    <div>Sat &nbsp; &nbsp; 9:00 AM – 4:00 PM</div>
                    <div>Sun &nbsp; &nbsp; Closed</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80"
                >
                  Schedule a visit <ArrowRight size={15} />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 fade-section">
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-2">
            Featured inventory
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Sample Vehicles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.slice(0, 3).map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 fade-section">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
            Why choose us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
            One team for sales, service, and straight answers
          </h2>
          <p className="mt-4 max-w-2xl text-steel text-base leading-relaxed">
            Homegrown service, local accountability, and honest guidance from
            the people who know your car best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg border border-hairline bg-surface p-6">
            <ShieldCheck
              className="text-signal mb-4"
              size={28}
              strokeWidth={1.5}
            />
            <h3 className="font-display font-medium text-xl text-ink mb-2">
              Inspected before it’s sold
            </h3>
            <p className="text-steel text-sm leading-relaxed">
              Every vehicle gets checked by our own technicians before it earns
              a spot on the lot.
            </p>
          </div>

          <div className="rounded-lg border border-hairline bg-surface p-6">
            <Wrench className="text-signal mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-display font-medium text-xl text-ink mb-2">
              Service built into the business
            </h3>
            <p className="text-steel text-sm leading-relaxed">
              We handle the maintenance and repair work that keeps your car
              dependable for years.
            </p>
          </div>

          <div className="rounded-lg border border-hairline bg-surface p-6">
            <BadgeCheck
              className="text-signal mb-4"
              size={28}
              strokeWidth={1.5}
            />
            <h3 className="font-display font-medium text-xl text-ink mb-2">
              No pressure, no nonsense
            </h3>
            <p className="text-steel text-sm leading-relaxed">
              We’ll explain the issue clearly, give honest options, and let you
              decide what’s right.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper border-y border-hairline fade-section">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
                Services
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
                Maintenance and repair that keep things moving
              </h2>
            </div>
            <p className="max-w-lg text-steel text-base leading-relaxed">
              From routine upkeep to diagnostics and repairs, our team handles
              the work that keeps your vehicle reliable.
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-steel">
              6 services offered
            </div>
            <Link
              href="/services"
              className="text-signal text-sm font-medium flex items-center gap-1 hover:text-signal-dark"
            >
              View all services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s) => (
              <div
                key={s.id}
                className="rounded-lg border border-hairline bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,22,28,0.05)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal mb-2">
                  {s.category}
                </p>
                <h3 className="font-display font-medium text-xl text-ink mb-2">
                  {s.name}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 md:py-20 fade-section"
      >
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
              About us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5">
              Built from a local garage and a simple idea
            </h2>
            <p className="text-steel leading-relaxed mb-4 text-base">
              Daisy Auto Sales started in 2011 as a small repair shop on the
              north side of Oklahoma City. Customers kept asking a familiar
              question: if you know cars this well, why aren’t you selling them?
            </p>
            <p className="text-steel leading-relaxed mb-6 text-base">
              We built the business around that question — creating a place
              where honest work, fair pricing, and real customer care are the
              standard on both sides of the counter.
            </p>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-navy/80"
            >
              Learn more about our story <ArrowRight size={15} />
            </Link>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-hairline bg-paper p-5"
                >
                  <p className="font-mono text-2xl font-semibold text-navy">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-steel">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy fade-section">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70 mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              People come back because they feel heard
            </h2>
            <p className="mt-4 max-w-2xl text-white/70 text-base leading-relaxed">
              Real feedback from customers who wanted honest advice, quality
              service, and a stress-free experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-white/90"
              >
                <div className="mb-4 flex items-center gap-1 text-[#F9C74F]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 text-white/80">
                  “{t.quote}”
                </p>
                <div>
                  <p className="font-display text-lg text-white">{t.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 fade-section">
        <div className="rounded-2xl bg-surface border border-hairline p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Ready to talk about your car or service needs?
            </h2>
            <p className="mt-4 max-w-xl text-steel text-base leading-relaxed">
              Stop by the lot, call the shop, or send a note and we’ll help with
              the next step.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+14055551234"
              className="inline-flex items-center gap-2 rounded-md bg-navy text-white px-5 py-3 text-sm font-medium hover:bg-navy/90 transition-colors"
            >
              <Phone size={15} /> Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-hairline bg-paper text-ink px-5 py-3 text-sm font-medium hover:border-navy/40 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
