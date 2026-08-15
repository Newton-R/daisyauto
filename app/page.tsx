import Link from "next/link";
import { ShieldCheck, Wrench, Search, ArrowRight } from "lucide-react";
import WindowSticker from "@/components/WindowSticker";
import StatBlock from "@/components/StatBlock";
import { vehicles, stats, services } from "@/lib/data";

export default function Home() {
  const featured = vehicles.filter((v) => v.featured);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
              Oklahoma City &middot; Est. 2011
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1] text-ink mb-5">
              Buy the car.<br />Trust the shop.
            </h1>
            <p className="text-steel text-lg leading-relaxed mb-8 max-w-md">
              Daisy Auto Sales pairs a hand-picked lot of used vehicles with a
              full-service repair bay, so the place that sells your car is the
              same place that keeps it running.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/inventory"
                className="rounded-md bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-navy-dark transition-colors flex items-center gap-2"
              >
                Browse Inventory <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-hairline bg-surface text-ink px-6 py-3 text-sm font-medium hover:border-navy/40 transition-colors"
              >
                Book a Service
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <StatBlock key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>

          <div className="md:pl-6">
            {featured[0] && <WindowSticker vehicle={featured[0]} />}
          </div>
        </div>
      </section>

      {/* Why Daisy */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10">
          Why people buy from a dealer who also fixes cars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <ShieldCheck className="text-signal mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-display font-medium text-lg text-ink mb-2">Inspected before it's listed</h3>
            <p className="text-steel text-sm leading-relaxed">
              Every vehicle on the lot passes through our own bay for a multi-point
              inspection before it ever gets a price tag.
            </p>
          </div>
          <div>
            <Wrench className="text-signal mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-display font-medium text-lg text-ink mb-2">One shop, before and after</h3>
            <p className="text-steel text-sm leading-relaxed">
              We service what we sell. The mechanics who checked out your car
              are the same ones who'll maintain it later.
            </p>
          </div>
          <div>
            <Search className="text-signal mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-display font-medium text-lg text-ink mb-2">Straight answers, no upsell script</h3>
            <p className="text-steel text-sm leading-relaxed">
              Diagnostics come with a plain explanation of what's wrong and
              what it actually costs to fix, not a scare pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="bg-paper border-y border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              On the lot right now
            </h2>
            <Link href="/inventory" className="text-signal text-sm font-medium flex items-center gap-1 hover:text-signal-dark">
              See full inventory <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((v) => (
              <WindowSticker key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Popular service work
          </h2>
          <Link href="/services" className="text-signal text-sm font-medium flex items-center gap-1 hover:text-signal-dark">
            View all services <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 4).map((s) => (
            <div key={s.id} className="rounded-lg border border-hairline bg-surface p-5">
              <p className="font-mono text-xs text-signal uppercase tracking-wide mb-2">{s.category}</p>
              <h3 className="font-display font-medium text-ink mb-2">{s.name}</h3>
              <p className="text-steel text-sm leading-relaxed mb-4">{s.description}</p>
              <p className="font-mono text-sm text-ink">From ${s.priceFrom}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            Come take a look, no pressure.
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Stop by the lot, take a car for a spin, or just get a straight quote
            on a repair. We'll be here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-navy px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
