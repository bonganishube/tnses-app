import Image from "next/image";
import React from "react";
import Image1 from "../../public/testimonials/image1.png";
import Image2 from "../../public/testimonials/image2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonialsItems = [
  {
    description:
      "They go beyond and above to make sure that you enjoy the learning process. It's been an absolute pleasure joining TNSES.",
    descriptionExtension:
      "There is hope for the future and there is hope for a change in our community. I joined the organisation TNSES and at first, I was hesistant about learning Digital Applied Skills through the organisation itself. As I am completing my assignments I realised that I underestimated the organisation and have come to realise how much I am learning and how much fun I am having doing all my assignments.",
    image: Image1,
    name: "Shannon-Lee",
    role: "Applied Digital Skills",
  },
  {
    description:
      "The communications course equipped me with skills that I was able to transfer to my professional work.",
    descriptionExtension:
      "Not only were the assessments mentally stimulating. They were fun as well, which I think is an important component of learning anything.",
    image: Image2,
    name: "Tsholofelo",
    role: "Communications",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondaryColor py-20 lg:py-28" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Centred here on purpose, breaks the run of left-aligned headers */}
        <SectionHeading
          invert
          align="center"
          eyebrow="Testimonials"
          title="What people are saying about our work"
          description="Our clients' satisfaction is our top priority. Here's what they have to say about their experiences working with us."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonialsItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 120} className="h-full">
              <figure className="flex h-full flex-col border border-white/15 bg-white/5 p-8 transition-colors duration-300 hover:border-white/30">
                {/* Marcellus opening quote, a small echo of the oversized one
                    in the impact band rather than a second lucide icon */}
                <span
                  aria-hidden
                  className="mb-1 select-none font-secondary text-6xl leading-[0.6] text-primaryColor"
                >
                  &ldquo;
                </span>

                {/* Slate rather than pure white, full-strength white at this
                    size glared against the navy. */}
                <blockquote className="text-pretty font-secondary text-xl leading-relaxed text-slate-200 lg:text-[1.35rem]">
                  {item.description}
                </blockquote>

                <Accordion
                  type="single"
                  collapsible
                  className="mt-2 w-full flex-1 text-slate-300"
                >
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white">
                      Read the full story
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-slate-300">
                      {item.descriptionExtension}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <Image
                    alt={item.name}
                    src={item.image}
                    width={96}
                    height={96}
                    className="h-12 w-12 shrink-0 object-cover object-center"
                  />
                  <span className="flex flex-col">
                    <span className="font-display font-bold text-white">
                      {item.name}
                    </span>
                    <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primaryColor">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
