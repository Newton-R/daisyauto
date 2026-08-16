"use client";

import { useEffect, useState } from "react";
import { Vehicle } from "@/lib/data";

export default function GalleryModal({
  vehicle,
  open,
  onClose,
}: {
  vehicle: Vehicle;
  open: boolean;
  onClose: () => void;
}) {
  const images = [...vehicle.images.exterior, ...vehicle.images.interior];
  const [index, setIndex] = useState(0);
  // index state

  // touch swipe support
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, images.length, onClose]);

  if (!open) return null;

  const waNumber = "14055551234";
  const message = encodeURIComponent(
    `Hello, I'm interested in Stock ${vehicle.stock} - ${vehicle.year} ${vehicle.make} ${vehicle.model}. Is it still available?`,
  );
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const threshold = 50; // px
    if (dx > threshold)
      setIndex((i) => (i - 1 + images.length) % images.length);
    else if (dx < -threshold) setIndex((i) => (i + 1) % images.length);
    setTouchStartX(null);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="w-full h-full max-w-6xl max-h-[90vh] bg-white rounded shadow-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <div>
            <div className="font-medium">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </div>
            <div className="text-sm text-steel">Stock {vehicle.stock}</div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-3 py-1 text-sm font-medium"
            >
              Chat about this vehicle
            </a>
            <button
              onClick={onClose}
              className="text-sm text-steel px-2 py-1 hover:bg-gray-100 rounded"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          <div
            className="flex-1 flex flex-col bg-black relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* If user toggles 'show all', display a responsive grid of all photos */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={images[index]}
                alt={`photo-${index}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Overlay controls */}
            <button
              aria-label="Previous photo"
              onClick={() =>
                setIndex((i) => (i - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 text-2xl shadow-lg z-10"
            >
              ‹
            </button>
            <button
              aria-label="Next photo"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 text-2xl shadow-lg z-10"
            >
              ›
            </button>

            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-2 py-2">
                {/* indicator dots */}
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`View photo ${i + 1}`}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-navy" : "bg-white/60 border border-white/20"}`}
                  />
                ))}
              </div>

              <div className="flex gap-2 p-2 overflow-x-auto bg-white">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIndex(i)}
                    className={`rounded overflow-hidden ${i === index ? "ring-2 ring-navy" : ""}`}
                  >
                    <img src={src} className="w-32 h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 border-l overflow-y-auto p-4 bg-white">
            <div className="space-y-3">
              <div className="font-display text-lg font-semibold text-ink">
                ${vehicle.price.toLocaleString()}
              </div>
              {vehicle.downPayment !== undefined && (
                <div className="text-sm text-steel">
                  Down Payment:{" "}
                  <span className="font-medium text-ink">
                    ${vehicle.downPayment.toLocaleString()}
                  </span>
                </div>
              )}
              {vehicle.monthlyPayment !== undefined && (
                <div className="text-sm text-steel">
                  Monthly:{" "}
                  <span className="font-medium text-ink">
                    ${vehicle.monthlyPayment.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-steel">Mileage</div>
                <div className="text-ink">
                  {vehicle.mileage?.toLocaleString()} mi
                </div>
                <div className="text-steel">Engine</div>
                <div className="text-ink">{vehicle.engine ?? "—"}</div>
                <div className="text-steel">Transmission</div>
                <div className="text-ink">{vehicle.transmission ?? "—"}</div>
                <div className="text-steel">Drivetrain</div>
                <div className="text-ink">{vehicle.drivetrain ?? "—"}</div>
                <div className="text-steel">Exterior</div>
                <div className="text-ink">
                  {vehicle.color ?? vehicle.exteriorColor ?? "—"}
                </div>
                <div className="text-steel">Interior</div>
                <div className="text-ink">{vehicle.interiorColor ?? "—"}</div>
                <div className="text-steel">Title</div>
                <div className="text-ink">{vehicle.titleStatus ?? "—"}</div>
              </div>

              {vehicle.features && vehicle.features.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-ink">Features</div>
                  <ul className="list-disc list-inside text-sm text-steel mt-1">
                    {vehicle.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-md bg-green-600 text-white px-3 py-2 text-sm font-medium"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
