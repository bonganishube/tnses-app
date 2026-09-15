import { Eye, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Sparkles,
    title: "Our Mission",
    body: "To provide vital support and resources that empower individuals and strengthen communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A future where everyone has the opportunity to thrive and contribute to a stronger, united society.",
  },
];

const About = () => {
  return (
    <section className="bg-tertiaryColor py-20 lg:py-28" id="about">
      <div className="container mx-auto flex flex-col-reverse gap-14 px-4 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="lg:w-1/2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden h-full w-full border-2 border-primaryColor lg:block"
            />
            <video
              controls
              preload="metadata"
              poster="/about/thumbnail.jpg"
              autoPlay
              muted
              loop
              className="relative aspect-video w-full object-cover shadow-card"
            >
              <source src="/about/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>

        <div className="space-y-10 lg:w-1/2">
          <SectionHeading
            eyebrow="About Us"
            title="Making the world a better place"
            description="The National Socio-Economic Support (TNSES) is a registered Nonprofit Organisation (NPO 240-957) founded in 2019, based in Cape Town, South Africa. We are a team of passionate individuals committed to making a positive impact. Through collaboration and dedication, we work to create meaningful change and support those in need."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 100}>
                <div className="card-flat group h-full p-6">
                  <span className="mb-5 flex w-max bg-secondaryColor p-3 text-white transition-colors duration-300 group-hover:bg-primaryColor">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-secondaryColor">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
