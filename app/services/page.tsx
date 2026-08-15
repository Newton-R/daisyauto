import { services } from "@/lib/data";
import { ArrowRight, Wrench } from "lucide-react";

export const metadata = {
  title: "Services | Daisy Auto Sales",
  description:
    "Maintenance, repair, and diagnostic services from the Daisy Auto Sales service bay.",
};

const categories = ["Maintenance", "Repair", "Diagnostics"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper fade-section">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
            Service Bay
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-4">
            Maintenance and repair that keep things moving
          </h1>
          <p className="text-steel max-w-2xl text-base leading-relaxed">
            Whether you bought your car from us or somewhere else, our team
            handles the maintenance, diagnostics, and repair work that keeps
            your vehicle reliable, safe, and ready for the road.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 space-y-14 fade-section">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal mb-3">
            What we do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            Honest service for the work your car actually needs
          </h2>
        </div>

        {categories.map((cat) => (
          <div key={cat}>
            <div className="flex items-center gap-2 mb-6">
              <Wrench size={18} className="text-signal" strokeWidth={1.75} />
              <h3 className="font-display text-2xl font-medium text-ink">
                {cat}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <div
                    key={s.id}
                    className="rounded-lg border border-hairline bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,22,28,0.04)]"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal mb-2">
                      {s.category}
                    </p>
                    <h4 className="font-display text-xl font-medium text-ink mb-2">
                      {s.name}
                    </h4>
                    <p className="text-steel text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-navy p-8 md:p-10 text-center fade-section">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">
            Not sure what’s wrong?
          </h2>
          <p className="text-white/70 text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Bring the vehicle in for a diagnostics check, and we’ll explain
            exactly what’s going on before any work starts.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-navy px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Schedule a Diagnostic <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
