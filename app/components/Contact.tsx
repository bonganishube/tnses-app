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
        {/* Map + contact details. Ordered second on mobile so the section
            heading leads rather than an unexplained map. */}
        <div className="space-y-6 lg:order-1">
          {/* One panel of rows rather than two standalone boxes — reads as a
              single "how to reach us" block and sits quieter next to the map. */}
          <Reveal>
            <div className="divide-y divide-secondaryColor/10 overflow-hidden rounded-2xl border border-secondaryColor/10 bg-tertiaryColor-soft">
              {details.map((detail) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-secondaryColor ring-1 ring-secondaryColor/10 transition-colors duration-300 group-hover:bg-primaryColor group-hover:text-white group-hover:ring-primaryColor/30">
                      <detail.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
                        {detail.label}
                      </span>
                      <span className="mt-1 block font-medium leading-snug text-secondaryColor">
                        {detail.value}
                      </span>
                    </span>
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="group flex items-center gap-4 p-5 transition-colors duration-300 hover:bg-white sm:px-6"
                  >
                    {content}
                    <MoveRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primaryColor" />
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="group flex items-center gap-4 p-5 sm:px-6"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative h-[280px] overflow-hidden rounded-2xl border border-secondaryColor/10 shadow-soft lg:h-[380px]">
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
