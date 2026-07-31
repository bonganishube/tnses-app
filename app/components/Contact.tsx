import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AtSign, MapPin, MoveRight } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const details = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "Belhar, Pentech, Cape Town, Western Cape 7493",
  },
  {
    icon: AtSign,
    label: "Email us",
    value: "info@tnses.org",
    href: "mailto:info@tnses.org",
  },
];

const fieldClass =
  "border-secondaryColor/15 bg-white text-secondaryColor placeholder:text-slate-400 focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0";

const Contact = () => {
  return (
    <section className="bg-white py-24 lg:py-32" id="contact">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Map + contact details */}
        <div className="space-y-6">
          <Reveal>
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-secondaryColor/10 shadow-soft lg:h-[420px]">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full border-0"
                title="TNSES office location"
                loading="lazy"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Belhar%2C%20Pentech%2C%20Cape%20Town%2C%20Western%20Cape%207493&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.05) opacity(0.75)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-secondaryColor/5"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 100}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-secondaryColor/10 bg-tertiaryColor p-5">
                  <span className="flex shrink-0 rounded-xl bg-secondaryColor p-2.5 text-white">
                    <detail.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-tertiary text-xs tracking-[0.15em] text-slate-500">
                      {detail.label.toUpperCase()}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-sm font-medium text-secondaryColor transition-colors hover:text-primaryColor"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-secondaryColor">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Enquiry form */}
        <div className="space-y-8">
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
