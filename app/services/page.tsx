import { services } from "@/lib/data";
import { Wrench } from "lucide-react";

export const metadata = {
  title: "Services | Daisy Auto Sales",
  description: "Maintenance, repair, and diagnostic services from the Daisy Auto Sales service bay.",
};

const categories = ["Maintenance", "Repair", "Diagnostics"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            Service Bay
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
            Keep it running right
          </h1>
          <p className="text-steel max-w-xl">
            Whether you bought your car from us or somewhere else, our bay
            handles the maintenance and repair work that keeps it on the road.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 space-y-14">
        {categories.map((cat) => (
          <div key={cat}>
            <div className="flex items-center gap-2 mb-6">
              <Wrench size={18} className="text-signal" strokeWidth={1.75} />
              <h2 className="font-display text-xl font-medium text-ink">{cat}</h2>
            </div>
            <div className="rounded-lg border border-hairline bg-surface divide-y divide-hairline">
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5"
                  >
                    <div className="sm:max-w-md">
                      <h3 className="font-display font-medium text-ink">{s.name}</h3>
                      <p className="text-steel text-sm mt-0.5">{s.description}</p>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="font-mono text-xs text-steel">{s.duration}</span>
                      <span className="font-mono text-sm font-medium text-navy">
                        From ${s.priceFrom}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="rounded-lg bg-navy p-8 text-center">
          <h2 className="font-display text-xl font-medium text-white mb-2">
            Not sure what's wrong?
          </h2>
          <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
            Bring it in for a diagnostics check. We'll tell you exactly what's
            going on before any work starts.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-white text-navy px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Schedule a Diagnostic
          </a>
        </div>
      </section>
    </>
  );
}
