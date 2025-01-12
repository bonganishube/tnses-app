import { Badge } from "@/components/ui/badge";
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

const teamItems = [
  {
    name: "Stephan Paulsen",
    role: "",
    description:
      "Stephan is the Co-Founder and Vice Chairperson of TNSES, as well as the Founder of UNICEF UWC. ...", 
    descriptionExtension: "He has five years of experience in Monitoring and Evaluation (M&E) across governmental, NGO, international, public, and private sectors.",
    descriptionExtension2: "He has supported M&E processes in various countries, including the Democratic Republic of Congo, Eswatini, Kenya, Lesotho, Malawi, Mozambique, the Republic of Congo, South Africa, Zambia, and Zimbabwe. Stephan is passionate about person-centered, meaningful interventions that strengthen socio-economic development.",
    descriptionExtension3: "“Just like moons and like suns, with the certainty of tides, just like hopes springing high, still I’ll rise.” – Maya Angelou",
    image: Image1,
  },
  {
    name: "Phelo Sifile",
    role: "",
    description:
      "Phelo is the co-founder and Chairperson of TNSES, as well as a co-founder and Director of Future Pathways Consultants (FPC). ...",
    descriptionExtension: "He has a strong passion for the betterment of youth and is dedicated to helping alleviate their struggles. As of 2023, he is a member of the Golden Key International Honour Society and holds a BA degree and an Honours degree in Industrial Psychology from the University of the Western Cape (UWC). He is currently pursuing his Master's degree in Industrial Psychology.",
    descriptionExtension2: "A quote by Myles Munroe resonates with him deeply: “True leaders don’t invest in buildings. Jesus never built a building. They invest in people because success without a successor is a failure. So your legacy should not be in buildings, programs, or projects; your legacy must be in people.”",
    image: Image2,
  },
  {
    name: "Ron-Lynn Hendricks",
    role: "",
    description:
      "Ron-Lynn has a strong commitment to youth outreach, taking on leadership roles in her local community and served on the board of her district’s youth division. ...",
    descriptionExtension: "Currently, she is a candidate civil engineer working towards obtaining her professional engineering registration. She has also enrolled in a master’s degree program in engineering management at Stellenbosch University. In addition to her professional endeavours, she is the operations officer and a board member of TNSES.",
    descriptionExtension2: "Her favourite quote, from Billy Graham, is: “When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.”",
    image: Image3,
  },
  {
    name: "Kgomotso Mashigo",
    role: "",
    description:
      "Kgomotso is a scientist and a three-time gold winner of the Environmental Media Association (EMA) awards, ...",
    descriptionExtension: "recognized for his contributions to sustainability within the international film industry. He has collaborated with various South African production companies as well as major networks, including Netflix, HBO, Warner Bros, and Banijay. Kgomotso is a creative, analytical, and detail-oriented individual. He has previously volunteered with UNICEF and currently serves as the Chief Communications Officer on the board of the TNSES organization. His favorite quote from Sir Isaac Newton is, “If I have seen further, it is by standing on the shoulders of giants.”",
    image: Image4,
  },
];

export default function Team() {
  return (
    <section className="py-20 lg:py-20 bg-white dark:bg-gray-900" id="team">
      <div className="container px-4 mx-auto">
        <div className="flex gap-4 flex-col md:text-center">
          <div>
            <Badge variant="outline" className="text-lg font-tertiary">
              Team
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter text-secondaryColor font-bold mx-auto">
              Meet the talented people driving our vision forward
            </h4>
            <p className="text-lg max-w-3xl leading-relaxed tracking-tight my-4 mx-auto">
              A dedicated team working together to create lasting change and support our mission.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 container px-4 mx-auto">
        {teamItems.map((item, index) => (
          <div
            key={index}
            className="bg-tertiaryColor rounded-md shadow p-6 dark:bg-gray-800"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {item.role}
            </span>
            <Accordion
              type="single"
              collapsible
              className="w-full text-gray-600 dark:text-gray-400"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="mt-2 text-sm">{item.description}</p>
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed ml-2">
                  {item.descriptionExtension}
                  <p className="mt-4">
                    {item.descriptionExtension2}
                  </p>
                  <p className="mt-4">
                    {item.descriptionExtension3}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
