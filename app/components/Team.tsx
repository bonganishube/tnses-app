import Image from "next/image";
import Image1 from "../../public/team/image1.png";
import Image2 from "../../public/team/image2.jpg";
import Image3 from "../../public/team/image3.jpg";
import Image4 from "../../public/team/image4.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const teamItems = [
  {
    name: "Stephan Paulsen",
    role: "Co-Founder & Vice Chairperson",
    description:
      "Stephan is the Co-Founder and Vice Chairperson of TNSES, as well as the Founder of UNICEF UWC.",
    paragraphs: [
      "He has five years of experience in Monitoring and Evaluation (M&E) across governmental, NGO, international, public, and private sectors.",
      "He has supported M&E processes in various countries, including the Democratic Republic of Congo, Eswatini, Kenya, Lesotho, Malawi, Mozambique, the Republic of Congo, South Africa, Zambia, and Zimbabwe. Stephan is passionate about person-centered, meaningful interventions that strengthen socio-economic development.",
      "“Just like moons and like suns, with the certainty of tides, just like hopes springing high, still I’ll rise.” – Maya Angelou",
    ],
    image: Image1,
  },
  {
    name: "Phelo Sifile",
    role: "Co-Founder & Chairperson",
    description:
      "Phelo is the co-founder and Chairperson of TNSES, as well as a co-founder and Director of Future Pathways Consultants (FPC).",
    paragraphs: [
      "He has a strong passion for the betterment of youth and is dedicated to helping alleviate their struggles. As of 2023, he is a member of the Golden Key International Honour Society and holds a BA degree and an Honours degree in Industrial Psychology from the University of the Western Cape (UWC). He is currently pursuing his Master's degree in Industrial Psychology.",
      "A quote by Myles Munroe resonates with him deeply: “True leaders don’t invest in buildings. Jesus never built a building. They invest in people because success without a successor is a failure. So your legacy should not be in buildings, programs, or projects; your legacy must be in people.”",
    ],
    image: Image2,
  },
  {
    name: "Ron-Lynn Hendricks",
    role: "Operations Officer & Board Member",
    description:
      "Ron-Lynn has a strong commitment to youth outreach, taking on leadership roles in her local community and serving on the board of her district’s youth division.",
    paragraphs: [
      "Currently, she is a candidate civil engineer working towards obtaining her professional engineering registration. She has also enrolled in a master’s degree program in engineering management at Stellenbosch University. In addition to her professional endeavours, she is the operations officer and a board member of TNSES.",
      "Her favourite quote, from Billy Graham, is: “When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.”",
    ],
    image: Image3,
  },
  {
    name: "Kgomotso Mashigo",
    role: "Chief Communications Officer",
    description:
      "Kgomotso is a scientist and a three-time gold winner of the Environmental Media Association (EMA) awards.",
    paragraphs: [
      "Recognized for his contributions to sustainability within the international film industry, he has collaborated with various South African production companies as well as major networks, including Netflix, HBO, Warner Bros, and Banijay.",
      "Kgomotso is a creative, analytical, and detail-oriented individual. He has previously volunteered with UNICEF and currently serves as the Chief Communications Officer on the board of the TNSES organization. His favorite quote from Sir Isaac Newton is, “If I have seen further, it is by standing on the shoulders of giants.”",
    ],
    image: Image4,
  },
];

export default function Team() {
  return (
    <section className="bg-tertiaryColor py-24 lg:py-32" id="team">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Team"
          title="Meet the talented people driving our vision forward"
          description="A dedicated team working together to create lasting change and support our mission."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-secondaryColor/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primaryColor/25 hover:shadow-lift">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="h-20 w-20 rounded-full object-cover object-top ring-2 ring-secondaryColor/10 transition-all duration-300 group-hover:ring-primaryColor/40"
                />

                <h3 className="mt-5 text-lg font-semibold leading-tight text-secondaryColor">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-primaryColor-700">
                  {item.role}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="bio" className="border-b-0">
                    <AccordionTrigger className="py-3 text-sm font-medium text-secondaryColor hover:text-primaryColor">
                      Read bio
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm leading-relaxed text-slate-600">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
