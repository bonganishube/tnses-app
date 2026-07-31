import React from "react";
import Image, { type StaticImageData } from "next/image";
import Image1 from "@/public/services/image1.jpg";
import Image2 from "@/public/services/image2.jpg";
import {
  AppWindow,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  FileUser,
  MailCheck,
  MoveRight,
  TvMinimalPlay,
  University,
  type LucideIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  detail: string;
  /** Icon chip colour. Full class strings so Tailwind keeps them in the build. */
  accent: string;
  /** Featured services span two columns and carry an image */
  image?: StaticImageData;
};

const services: Service[] = [
  {
    icon: TvMinimalPlay,
    title: "Applied digital skills",
    accent: "bg-primaryColor",
    blurb:
      "Tailored training that boosts your career with the digital tools employers actually use.",
    detail:
      "Our Applied Digital Skills service is designed to equip you with practical, in-demand digital skills to thrive in today’s tech-driven job market. We offer tailored training in essential tools and platforms, from data analysis and project management to digital marketing and software proficiency. Whether you're looking to enhance your existing skill set or learn new, job-relevant abilities, our expert-led courses ensure you're ready to meet the challenges of your career with confidence and competence.",
    image: Image1,
  },
  {
    icon: BookOpenText,
    title: "Blueprint magazine",
    accent: "bg-emerald-600",
    blurb:
      "Expert insights, industry trends and career advice to inspire professional growth.",
    detail:
      "Blueprint Magazine is a comprehensive resource designed to inform, inspire, and empower professionals across various industries. With a focus on career development, industry insights, and personal growth, the magazine features expert interviews, in-depth articles, and thought-provoking content. Whether you're seeking the latest trends, tips on skill development, or advice on navigating the ever-evolving job market, Blueprint Magazine is your go-to source for staying ahead of the curve.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Monitoring & evaluation",
    accent: "bg-sky-600",
    blurb:
      "Track progress, measure impact and turn programme data into decisions.",
    detail:
      "Our Monitoring & Evaluation service is designed to help organizations measure the effectiveness and impact of their projects and initiatives. By systematically tracking progress, assessing outcomes, and analyzing data, we provide valuable insights that drive informed decision-making and continuous improvement. We work closely with clients to develop customized M&E frameworks, ensuring that both qualitative and quantitative indicators are effectively captured.",
  },
  {
    icon: Building2,
    title: "Recruitment & training",
    accent: "bg-indigo-600",
    blurb:
      "Attract the right people and build the skills that drive your team's success.",
    detail:
      "Our Recruitment & Training service is designed to help organizations build high-performing teams by attracting top talent and providing tailored training to enhance skills and productivity. We work closely with clients to understand their specific hiring needs, ensuring the right candidates are selected to fit both the role and the company culture. Beyond recruitment, we offer customized training programs aimed at improving employee performance, leadership abilities, and overall team effectiveness.",
  },
  {
    icon: FileUser,
    title: "CV write-up assistance",
    accent: "bg-violet-600",
    blurb:
      "Turn your experience into a clear, confident CV that gets shortlisted.",
    detail:
      "We work with you one-on-one to structure your CV around the roles you are actually applying for. Together we clarify your experience, highlight transferable skills, and tighten the wording so recruiters can see your value in the first few seconds. You leave with a polished, ready-to-send CV and the guidance to keep it current as your career grows.",
  },
  {
    icon: University,
    title: "College & university application support",
    accent: "bg-primaryColor",
    blurb:
      "Step-by-step guidance through institution applications, deadlines and documents.",
    detail:
      "Applying to a college or university can be overwhelming. We guide you through choosing the right institution and programme, understanding entry requirements, preparing supporting documents, and submitting everything before the deadline. Our team stays with you through the process so nothing slips and every application you send is complete and competitive.",
    image: Image2,
  },
  {
    icon: AppWindow,
    title: "Scholarship & bursary application support",
    accent: "bg-emerald-600",
    blurb:
      "Find the funding you qualify for and put together an application that stands out.",
    detail:
      "We help you identify scholarships and bursaries that match your field of study and circumstances, then work with you on the application itself — motivation letters, supporting documents and deadlines. The goal is simple: make sure funding is never the reason a capable student stops studying.",
  },
  {
    icon: MailCheck,
    title: "Job readiness & interview guidance",
    accent: "bg-sky-600",
    blurb:
      "Practise, prepare and walk into the interview room knowing what to expect.",
    detail:
      "Our job readiness support covers everything that happens between the application and the offer: interview practice, common question preparation, professional communication, and the small details that shape a first impression. You get direct feedback from people who have sat on both sides of the table.",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  const featured = Boolean(service.image);

  return (
    <div
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1",
        featured
          ? "border-secondaryColor bg-secondaryColor shadow-card hover:shadow-lift"
          : "border-secondaryColor/10 bg-white shadow-soft hover:border-primaryColor/25 hover:shadow-lift"
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
            "mb-6 flex w-max rounded-xl p-3 text-white shadow-soft transition-transform duration-300 group-hover:scale-105",
            service.accent
          )}
        >
          <Icon className="h-5 w-5" />
        </span>

        <h3
          className={cn(
            "text-lg font-semibold leading-snug tracking-tight xl:text-xl",
            featured ? "text-white" : "text-secondaryColor"
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "mt-3 flex-1 text-sm leading-relaxed",
            featured ? "text-slate-300" : "text-slate-600"
          )}
        >
          {service.blurb}
        </p>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className={cn(
                "mt-6 w-max gap-2 rounded-full px-0 text-sm font-medium hover:bg-transparent",
                featured
                  ? "text-white hover:text-primaryColor"
                  : "text-secondaryColor hover:text-primaryColor"
              )}
            >
              View more
              <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-2xl">
            <AlertDialogHeader>
              <span
                className={cn(
                  "mb-2 flex w-max rounded-xl p-3 text-white shadow-soft",
                  service.accent
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <AlertDialogTitle className="display-serif text-2xl text-secondaryColor">
                {service.title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-left leading-relaxed">
                {service.detail}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-full">
                Close
              </AlertDialogCancel>
              <AlertDialogAction
                asChild
                className="rounded-full bg-primaryColor hover:bg-primaryColor-600"
              >
                <Link href="/sign-up">Sign Up</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {service.image ? (
        // overflow-hidden keeps the hover zoom clipped to this panel — without
        // it the scaled image spills past the gradient and over the text.
        <div className="relative hidden overflow-hidden md:block md:w-1/2">
          <Image
            src={service.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Feather only the seam against the navy panel. A full-width navy
              wash over these warm photos read as a purple cast. */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-secondaryColor to-transparent"
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
  <div className="group flex h-full flex-col justify-center rounded-2xl border border-dashed border-secondaryColor/25 bg-tertiaryColor-soft p-6 transition-colors duration-300 hover:border-primaryColor/40 xl:p-8">
    <h3 className="display-serif text-xl text-secondaryColor xl:text-2xl">
      Not sure which one fits?
    </h3>
    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
      Tell us where you are right now and we will point you to the right
      programme — there is no cost to ask.
    </p>
    <Link href="#contact" className="mt-6 w-max">
      <Button
        variant="secndary"
        className="gap-2 rounded-full transition-transform active:scale-[0.98]"
      >
        Talk to us
        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Button>
    </Link>
  </div>
);

const Services = () => (
  <section
    className="border-t border-secondaryColor/[0.07] bg-white py-24 lg:py-32"
    id="services"
  >
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Services"
        title="Why choose us"
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
