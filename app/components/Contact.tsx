import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AtSign, MapPin, MoveRight } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Each card is a link with something to do, not just an address on display,
 * the whole tile is the hit target and carries a visible next step.
 */
const details = [
  {
    icon: MapPin,
    label: "Visit us",
    lines: ["Belhar, Pentech", "Cape Town, Western Cape 7493"],
    action: "Get directions",
    href: "https://www.google.com/maps/search/?api=1&query=Belhar%2C%20Pentech%2C%20Cape%20Town%2C%20Western%20Cape%207493",
    external: true,
  },
  {
    icon: AtSign,
    label: "Email us",
    lines: ["info@tnses.org"],
    action: "Send a message",
    href: "mailto:info@tnses.org",
    external: false,
  },
];

// rounded-none overrides the shared shadcn field radius, which is rounded-md
const fieldClass =
  "rounded-none border-secondaryColor/15 bg-white text-secondaryColor placeholder:text-slate-400 focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0";

const Contact = () => {
  return (
    <section className="bg-white py-20 lg:py-28" id="contact">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Map + contact details. Ordered second on mobile so the section
            heading leads rather than an unexplained map. */}
        <div className="space-y-6 lg:order-1">
          <Reveal>
            <div className="relative h-[260px] overflow-hidden border border-secondaryColor/10 shadow-card lg:h-[300px]">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full border-0"
                title="TNSES office location"
                loading="lazy"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Belhar%2C%20Pentech%2C%20Cape%20Town%2C%20Western%20Cape%207493&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 100} className="h-full">
                <a
                  href={detail.href}
                  {...(detail.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card-flat group flex h-full flex-col p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center bg-secondaryColor text-white transition-colors duration-300 group-hover:bg-primaryColor">
                    <detail.icon className="h-[18px] w-[18px]" />
                  </span>

                  <p className="mt-5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {detail.label}
                  </p>

                  <div className="mt-1.5 flex-1">
                    {detail.lines.map((line) => (
                      <p
                        key={line}
                        className="font-medium leading-snug text-secondaryColor"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <span className="btn-square mt-5 px-0 text-secondaryColor group-hover:text-primaryColor-700">
                    <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    {detail.action}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Enquiry form */}
        <div className="order-first space-y-8 lg:order-2">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Feel free to contact us. Submit your queries here and we will listen."
          />

          <Reveal delay={120}>
            <form className="space-y-5 border border-secondaryColor/10 bg-tertiaryColor p-6 shadow-card sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-slate-600">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-slate-600">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-slate-600">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  required
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-square w-full justify-center bg-primaryColor py-4 text-white hover:bg-primaryColor-600"
              >
                <MoveRight className="h-4 w-4" />
                Submit
              </button>

              <p className="text-center text-xs text-slate-500">
                We are committed to providing exceptional service and support.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
