import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

import AboutImage from "@/public/hero/hero3.jpg";
import ServicesImage from "@/public/hero/hero2.jpg";
import ProjectsImage from "@/public/hero/hero6.jpg";

type Pathway = {
  title: string;
  body: string;
  href: string;
  image: StaticImageData;
  /** Panel fill, and the button label colour. A darker step of the same hue,
      since #FF6100 / #5E8B6C on white fall under AA at this text size. Full
      class strings so Tailwind keeps them in the build. */
  panel: string;
  label: string;
  /** Where the 4:3 crop anchors. The landscape sources barely crop and sit fine
      on the default centre, a tall portrait needs its subject anchored or the
      centre band cuts straight through them. */
  position?: string;
};

/**
 * The three cards directly under the hero: one route into each part of the
 * site, mirroring the top-level nav.
 *
 * The images are placeholders pulled from /public/hero, swap in real
 * photography of the organisation's work when it is available.
 */
const pathways: Pathway[] = [
  {
    title: "About us",
    body: "A non-profit organisation based in Cape Town, founded in 2019 to put opportunity within reach for individuals and the communities around them.",
    href: "#about",
    image: AboutImage,
    panel: "bg-primaryColor",
    label: "text-primaryColor-700",
  },
  {
    title: "What we do",
    body: "Applied digital skills, professional development, monitoring and evaluation, plus Blueprint magazine.",
    href: "#services",
    image: ServicesImage,
    panel: "bg-secondaryColor",
    label: "text-secondaryColor",
  },
  {
    title: "Projects",
    body: "The programmes we run on the ground, and the people whose learning and work they support.",
    href: "#services",
    image: ProjectsImage,
    panel: "bg-accentColor",
    label: "text-accentColor-600",
    // hero6 is a 2:3 portrait with its subject low in the frame, so a centred
    // 4:3 crop cut her off at the chin. Anchoring to the bottom keeps her, the
    // laptop and the desk in shot.
    position: "object-bottom",
  },
];

export const Pathways = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" id="pathways">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pathways.map((pathway, index) => {
            const { title, body, href, image, panel, label, position } = pathway;

            return (
              <Reveal key={title} delay={index * 120} className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt=""
                      placeholder="blur"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                        position ?? "object-center"
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "flex flex-1 flex-col items-center gap-4 px-6 py-8 text-center",
                      panel
                    )}
                  >
                    <h3 className="font-display text-2xl font-bold text-white lg:text-[1.7rem]">
                      {title}
                    </h3>
                    <p className="max-w-xs text-pretty text-sm leading-relaxed text-white/90">
                      {body}
                    </p>
                    <span
                      className={cn(
                        "mt-auto inline-flex items-center gap-2.5 bg-white px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 group-hover:bg-white/90",
                        label
                      )}
                    >
                      <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Go to page
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pathways;
