"use client";

import { useState } from "react";
import { Vehicle } from "@/lib/data";
import GalleryModal from "./GalleryModal";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [open, setOpen] = useState(false);
  const images = [...vehicle.images.exterior, ...vehicle.images.interior];

  const waNumber = "9315842778"; // update as needed
  const message = encodeURIComponent(
    `Hello, I'm interested in Stock ${vehicle.stock} - ${vehicle.year} ${vehicle.make} ${vehicle.model}. Is it still available?`,
  );
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <div className="rounded-lg bg-surface border border-hairline overflow-hidden hover:shadow-lg transition">
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <img
          src={images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-44 object-cover"
        />
      </div>

      <div className="p-4">
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
        <p className="text-sm text-steel mb-3">{vehicle.trim}</p>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-2xl font-semibold text-navy">
              ${vehicle.price.toLocaleString()}
            </div>
            <div className="text-sm text-steel">
              {vehicle.mileage?.toLocaleString()} mi
            </div>
            {vehicle.downPayment !== undefined && (
              <div className="text-sm text-steel mt-1">
                Down:{" "}
                <span className="font-medium text-ink">
                  ${vehicle.downPayment.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-3 py-2 text-sm font-medium hover:opacity-95"
            >
              Chat
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-sm rounded-md border px-3 py-2 bg-white/50"
            >
              See details
            </button>
          </div>
        </div>
      </div>

      <GalleryModal
        vehicle={vehicle}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
