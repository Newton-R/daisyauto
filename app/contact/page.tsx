import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Daisy Auto Sales",
  description:
    "Get in touch with Daisy Auto Sales for vehicle questions, service appointments, or a visit to the lot.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
            Come by, call, or send a note
          </h1>
          <p className="text-steel max-w-xl">
            Questions about a vehicle, need to book a service slot, or just want
            to swing by the lot — here's how to reach us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-ink">
              <MapPin size={17} className="text-signal" />
              <h2 className="font-display font-medium">Address</h2>
            </div>
            <p className="text-steel text-sm">
              616 Santa Fe Pike, Columbia, TN 38401, United States
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-ink">
              <Phone size={17} className="text-signal" />
              <h2 className="font-display font-medium">Phone</h2>
            </div>
            <a
              href="tel:+9315842778"
              className="text-steel text-sm font-mono hover:text-navy"
            >
              (931) 584-2778
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-ink">
              <Mail size={17} className="text-signal" />
              <h2 className="font-display font-medium">Email</h2>
            </div>
            <a
              href="mailto:daisyautosales86@gmail.com"
              className="text-steel text-sm hover:text-navy"
            >
              daisyautosale@gmail.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-ink">
              <Clock size={17} className="text-signal" />
              <h2 className="font-display font-medium">Hours</h2>
            </div>
            <div className="text-steel text-sm font-mono space-y-0.5">
              <div>Mon–Fri&nbsp;&nbsp;8:00 AM – 6:00 PM</div>
              <div>
                Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00 AM – 4:00 PM
              </div>
              <div>Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
