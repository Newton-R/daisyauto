import { Vehicle } from "@/lib/data";

export default function WindowSticker({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="rounded-lg bg-surface border border-hairline overflow-hidden hover:border-navy/30 hover:shadow-[0_4px_20px_-4px_rgba(30,58,95,0.15)] transition-all">
      <div className="sticker-perf" />
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-steel">
            Stock #{vehicle.stock}
          </p>
          {vehicle.featured && (
            <span className="font-mono text-[10px] uppercase tracking-wider bg-signal-light text-signal-dark px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-display font-semibold text-lg text-ink leading-snug">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-sm text-steel mb-4">{vehicle.trim}</p>

        <div className="mb-4">
          <span className="font-mono text-2xl font-semibold text-navy">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>

        <div className="border-t border-hairline pt-1">
          <div className="sticker-row">
            <span className="text-steel">Mileage</span>
            <span className="text-ink">
              {vehicle.mileage?.toLocaleString()} mi
            </span>
          </div>
          <div className="sticker-row">
            <span className="text-steel">Transmission</span>
            <span className="text-ink">{vehicle.transmission}</span>
          </div>
          <div className="sticker-row">
            <span className="text-steel">Drivetrain</span>
            <span className="text-ink">{vehicle.drivetrain}</span>
          </div>
          <div className="sticker-row">
            <span className="text-steel">Exterior</span>
            <span className="text-ink">{vehicle.color}</span>
          </div>
        </div>

        <a
          href="/contact"
          className="mt-4 block text-center rounded-md bg-navy text-white text-sm font-medium py-2.5 hover:bg-navy-dark transition-colors"
        >
          Ask About This Vehicle
        </a>
      </div>
    </div>
  );
}
