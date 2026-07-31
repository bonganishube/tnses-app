import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AtSign, MapPin, MoveRight } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Each card is a link with something to do, not just an address on display —
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

const fieldClass =
  "border-secondaryColor/15 bg-white text-secondaryColor placeholder:text-slate-400 focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0";

const Contact = () => {
  return (
    <section className="bg-white py-24 lg:py-32" id="contact">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Map + contact details. Ordered second on mobile so the section
            heading leads rather than an unexplained map. */}
        <div className="space-y-6 lg:order-1">
          <Reveal>
            <div className="relative h-[260px] overflow-hidden rounded-2xl border border-secondaryColor/10 shadow-soft lg:h-[300px]">
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
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-secondaryColor/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primaryColor/30 hover:shadow-lift"
                >
                  {/* Blurred so it reads as a wash — unblurred it clipped to a
                      hard arc against the card corner. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primaryColor/20 blur-2xl transition-transform duration-500 group-hover:scale-150"
                  />

                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primaryColor/10 text-primaryColor transition-colors duration-300 group-hover:bg-primaryColor group-hover:text-white">
                    <detail.icon className="h-[18px] w-[18px]" />
                  </span>

                  <p className="relative mt-5 font-tertiary text-[0.7rem] tracking-[0.16em] text-slate-500">
                    {detail.label.toUpperCase()}
                  </p>

                  <div className="relative mt-1.5 flex-1">
                    {detail.lines.map((line) => (
                      <p
                        key={line}
                        className="font-medium leading-snug text-secondaryColor"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondaryColor transition-colors duration-300 group-hover:text-primaryColor">
                    {detail.action}
                    <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
            <form className="space-y-5 rounded-2xl border border-secondaryColor/10 bg-tertiaryColor p-6 shadow-soft sm:p-8">
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

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 rounded-full bg-primaryColor text-white shadow-glow transition-transform hover:bg-primaryColor-600 active:scale-[0.99]"
              >
                Submit
                <MoveRight className="h-4 w-4" />
              </Button>

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
