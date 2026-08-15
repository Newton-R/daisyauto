import { stats } from "@/lib/data";
import { Users, Wrench, Car } from "lucide-react";

export const metadata = {
  title: "About | Daisy Auto Sales",
  description: "The story behind Daisy Auto Sales, an Oklahoma City dealership and repair shop.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            Our Story
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
            Started in a two-bay garage
          </h1>
          <p className="text-steel max-w-2xl">
            Daisy Auto Sales opened in 2011 as a two-bay repair shop on the
            north side of the city. Customers kept asking the same question
            after we fixed their cars: "if you know cars this well, why
            aren't you selling them?" A few years later, we started doing
            exactly that.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-steel leading-relaxed">
          <p>
            We still run both sides of the business the same way we did on
            day one: every car that comes onto the lot goes through the same
            bay, the same technicians, and the same multi-point inspection we
            use for customer repairs. Nothing gets a price tag until it's
            actually been checked.
          </p>
          <p>
            That's the part that's stayed the same. What's changed is scale —
            from a two-bay garage to a full lot and service center, still
            family-run, still answering our own phones.
          </p>
          <p>
            If you're buying a car, you're welcome to have our own techs walk
            you through what they found. If you're just here for a repair,
            you'll get the same straight answers we'd give a customer buying
            a car off the lot.
          </p>
        </div>

        <div className="rounded-lg border border-hairline bg-surface p-8">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-semibold text-navy">{s.value}</p>
                <p className="text-xs text-steel uppercase tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink mb-10 text-center">
            What we stand behind
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Car className="text-signal mx-auto mb-4" size={26} strokeWidth={1.5} />
              <h3 className="font-display font-medium text-ink mb-2">Inspected, not just cleaned up</h3>
              <p className="text-steel text-sm leading-relaxed">
                A fresh coat of wax doesn't fix a bad transmission. Ours get
                checked mechanically before they're checked cosmetically.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="text-signal mx-auto mb-4" size={26} strokeWidth={1.5} />
              <h3 className="font-display font-medium text-ink mb-2">Same techs, before and after</h3>
              <p className="text-steel text-sm leading-relaxed">
                The people who inspect the car you buy are the same people
                who'll service it a year from now.
              </p>
            </div>
            <div className="text-center">
              <Users className="text-signal mx-auto mb-4" size={26} strokeWidth={1.5} />
              <h3 className="font-display font-medium text-ink mb-2">Family-run, locally known</h3>
              <p className="text-steel text-sm leading-relaxed">
                No corporate scripts. If something's not right, you'll hear
                it directly from someone who can actually fix it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
