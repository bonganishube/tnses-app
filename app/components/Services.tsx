import React from "react";
import Image, { type StaticImageData } from "next/image";
import Image1 from "@/public/services/image1.jpg";
import Image2 from "@/public/services/image2.jpg";
import {
  BookOpenText,
  BriefcaseBusiness,
  FileUser,
  MoveRight,
  TvMinimalPlay,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  detail: string;
  /** Icon chip colour, one of the three brand fills. Full class strings so
      Tailwind keeps them in the build. */
  accent: string;
  /** Featured services span two columns and carry an image */
  image?: StaticImageData;
};

/**
 * The four services TNSES currently offers, in the order they are listed.
 *
 * Two carry an image and span two columns, which lands the four cards plus the
 * guidance panel exactly on a four-column grid: 2 + 1 + 1 on the first row,
 * 2 + 2 on the second. Adding or removing a service will leave a hole in the
 * grid unless the featured flags are rebalanced to match.
 */
const services: Service[] = [
  {
    icon: TvMinimalPlay,
    title: "Applied digital skills",
    accent: "bg-secondaryColor",
    blurb:
      "Tailored training that boosts your career with the digital tools employers actually use.",
    detail:
      "Our Applied Digital Skills service is designed to equip you with practical, in-demand digital skills to thrive in today\u2019s tech-driven job market. We offer tailored training in essential tools and platforms, from data analysis and project management to digital marketing and software proficiency. Whether you're looking to enhance your existing skill set or learn new, job-relevant abilities, our expert-led courses ensure you're ready to meet the challenges of your career with confidence and competence.",
    image: Image2,
  },
  {
    icon: BookOpenText,
    title: "Blueprint",
    accent: "bg-accentColor",
    blurb:
      "Our magazine, carrying expert insights, industry trends and career advice to inspire professional growth.",
    detail:
      "Blueprint Magazine is a comprehensive resource designed to inform, inspire, and empower professionals across various industries. With a focus on career development, industry insights, and personal growth, the magazine features expert interviews, in-depth articles, and thought-provoking content. Whether you're seeking the latest trends, tips on skill development, or advice on navigating the ever-evolving job market, Blueprint Magazine is your go-to source for staying ahead of the curve.",
  },
  {
    icon: FileUser,
    title: "Professional development and capacity building",
    accent: "bg-primaryColor",
    blurb:
      "CV write-up and interview preparation, so you walk into the room ready.",
    detail:
      "We work with you one-on-one to structure your CV around the roles you are actually applying for. Together we clarify your experience, highlight transferable skills, and tighten the wording so recruiters can see your value in the first few seconds. From there we cover everything that happens between the application and the offer: interview practice, common question preparation, professional communication, and the small details that shape a first impression. You get direct feedback from people who have sat on both sides of the table.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Monitoring and evaluation",
    accent: "bg-secondaryColor",
    blurb:
      "Track progress, measure impact and turn programme data into decisions.",
    detail:
      "Our Monitoring & Evaluation service is designed to help organizations measure the effectiveness and impact of their projects and initiatives. By systematically tracking progress, assessing outcomes, and analyzing data, we provide valuable insights that drive informed decision-making and continuous improvement. We work closely with clients to develop customized M&E frameworks, ensuring that both qualitative and quantitative indicators are effectively captured.",
    image: Image1,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  const featured = Boolean(service.image);

  return (
    <div
      className={cn(
        "card-flat group relative flex h-full overflow-hidden"
      )}
    >
      <div
        className={cn(
          "flex flex-col p-6 xl:p-8",
          featured ? "w-full md:w-1/2" : "w-full"
        )}
      >
        <span
          className={cn(
            "mb-6 flex w-max p-3 text-white transition-colors duration-300",
            service.accent,
            featured && "group-hover:bg-primaryColor"
          )}
        >
          <Icon className="h-5 w-5" />
        </span>

        <h3
          className={cn(
            "font-display text-lg font-bold leading-snug tracking-[-0.01em] text-secondaryColor xl:text-xl"
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "mt-3 flex-1 text-sm leading-relaxed text-slate-600"
          )}
        >
          {service.blurb}
        </p>

        {/* Detail opens in place rather than in a modal, the same treatment the
            team and testimonial cards use for their longer copy. */}
        <Accordion type="single" collapsible className="mt-4 w-full">
          <AccordionItem value="detail" className="border-b-0">
            <AccordionTrigger className="py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-secondaryColor hover:text-primaryColor-700">
              View more
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-600">
              {service.detail}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {service.image ? (
        // overflow-hidden keeps the hover zoom clipped to this panel, without
        // it the scaled image spills past the gradient and over the text.
        <div className="relative hidden overflow-hidden md:block md:w-1/2">
          <Image
            src={service.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Feather the seam against the white panel */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
          />
        </div>
      ) : null}
    </div>
  );
};

/**
 * Closes the grid: the eight services occupy ten cells of a four-column grid,
 * so this two-column card squares the last row off instead of leaving a hole.
 */
const GuidanceCard = () => (
  <div className="group flex h-full flex-col justify-center bg-secondaryColor p-6 shadow-card xl:p-8">
    <h3 className="font-display text-xl font-bold text-white xl:text-2xl">
      Not sure which one fits?
    </h3>
    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
      Tell us where you are right now and we will point you to the right
      programme. There is no cost to ask.
    </p>
    <Link
      href="#contact"
      className="btn-square mt-6 bg-white text-secondaryColor group-hover:bg-white/90"
    >
      <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      Talk to us
    </Link>
  </div>
);

const Services = () => (
  <section className="bg-white py-20 lg:py-28" id="services">
    <div className="container mx-auto px-4">
      <SectionHeading
        align="center"
        eyebrow="Services"
        title="What we do"
        description="Explore the key services we provide to support our mission and make a real difference in the community."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={(index % 4) * 80}
            className={cn("h-full", service.image && "md:col-span-2")}
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
        <Reveal delay={160} className="h-full md:col-span-2">
          <GuidanceCard />
        </Reveal>
      </div>
    </div>
  </section>
);

export default Services;
