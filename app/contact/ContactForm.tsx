"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your email service or backend of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-hairline bg-surface p-8 text-center">
        <CheckCircle2 className="mx-auto text-signal mb-3" size={32} strokeWidth={1.5} />
        <h2 className="font-display text-lg font-medium text-ink mb-1">Message sent</h2>
        <p className="text-steel text-sm">We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-hairline bg-surface p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            className="w-full rounded-md border border-hairline px-3 py-2 text-sm text-ink focus:border-signal outline-none"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-md border border-hairline px-3 py-2 text-sm text-ink focus:border-signal outline-none font-mono"
            placeholder="(405) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          className="w-full rounded-md border border-hairline px-3 py-2 text-sm text-ink focus:border-signal outline-none"
          placeholder="jane@email.com"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-ink mb-1.5">
          What's this about
        </label>
        <select
          id="reason"
          className="w-full rounded-md border border-hairline px-3 py-2 text-sm text-ink focus:border-signal outline-none bg-surface"
        >
          <option>A vehicle on the lot</option>
          <option>Booking a service appointment</option>
          <option>Selling or trading in my car</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full rounded-md border border-hairline px-3 py-2 text-sm text-ink focus:border-signal outline-none resize-none"
          placeholder="Tell us what you need..."
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-navy text-white px-6 py-2.5 text-sm font-medium hover:bg-navy-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
