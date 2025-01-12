import { Badge } from "@/components/ui/badge";
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
import { Quote } from "lucide-react";

const testimonialsItems = [
  {
    description:
      "They go beyond and above to make sure that you enjoy the learning process. It's been an absolute pleasure joining TNSES.",
    descriptionExtension:
      "There is hope for the future and there is hope for a change in our community. I joined the organisation TNSES and at first, I was hesistant about learning Digital Applied Skills through the organisation itself. As I am completing my assignments I realised that I underestimated the organisation and have come to realise how much I am learning and how much fun I am having doing all my assignments.",
    image: Image1,
    name: "Shannon-Lee",
  },
  {
    description:
      "The communications course equipped me with skills that I was able to transfer to my professional work.",
    descriptionExtension:
      "Not only were the assessments mentally stimulating. They were fun as well, which I think is an important component of learning anything.",
    image: Image2,
    name: "Tsholofelo",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-40 bg-secondaryColor"
      id="testimonials"
    >
      <div className="container px-4 mx-auto">
        <div className="flex gap-4 flex-col md:text-center">
          <div>
            <Badge variant="outline" className="text-white text-lg font-tertiary">
              Testimonials
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl  md:text-5xl tracking-tighter text-white font-bold md:mx-auto">
              What people are saying about our work
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed tracking-tight my-4 mx-auto">
              Our clients' satisfaction is our top priority. Here's what they
              have to say about their experiences working with us.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {testimonialsItems.map((item) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-[#162449] p-8 rounded-md">
                <Quote className="block w-5 h-5 mb-4 text-primaryColor" />
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-slate-400 mb-6"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p className="mt-2 text-sm">{item.description}</p>
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed ml-2">
                      {item.descriptionExtension}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={item.image}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-md flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-slate-300">
                      {item.name}
                    </span>
                    {/* <span className="text-gray-500 text-sm">DESIGNER</span> */}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
