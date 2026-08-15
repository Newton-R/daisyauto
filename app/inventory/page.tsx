import WindowSticker from "@/components/WindowSticker";
import { vehicles } from "@/lib/data";

export const metadata = {
  title: "Inventory | Daisy Auto Sales",
  description: "Browse hand-inspected used vehicles currently on the Daisy Auto Sales lot.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            {vehicles.length} Vehicles Available
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
            Current Inventory
          </h1>
          <p className="text-steel max-w-xl">
            Every car below has already been through our own service bay.
            Prices are what's on the tag — no hidden dealer fees tacked on later.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <WindowSticker key={v.id} vehicle={v} />
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-hairline bg-surface p-8 text-center">
          <h2 className="font-display text-xl font-medium text-ink mb-2">
            Don't see what you're after?
          </h2>
          <p className="text-steel text-sm mb-5 max-w-md mx-auto">
            New vehicles come in every week. Tell us what you're looking for
            and we'll reach out when it lands on the lot.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-navy text-white px-5 py-2.5 text-sm font-medium hover:bg-navy-dark transition-colors"
          >
            Request a Vehicle
          </a>
        </div>
      </section>
    </>
  );
}
