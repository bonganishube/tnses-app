import { Book, BookOpenText, BriefcaseBusiness, MoveRight, TvMinimalPlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Image1 from "../../public/services/image1.jpg";

const services = [
  {
    icon: <TvMinimalPlay className="h-4 w-4 md:h-6 md:w-6" />,
    title: "Applied Digital Skills",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque culpa facere quisquam quae quo esse placeat, corporis totam omnis iure eaque sapiente maiores deleniti, expedita ipsa ut.",
  },
  {
    icon: <BookOpenText className="h-4 w-4 md:h-6 md:w-6" />,
    title: "Blueprint",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, officiis! Delectus quo ab cum quasi dolorem veniam quas in debitis sed repellat fugit eum beatae, rem consequuntur sit suscipit qui?",
  },
  {
    icon: <BriefcaseBusiness className="h-4 w-4 md:h-6 md:w-6" />,
    title: "Consultation & Monitoring",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus eveniet autem et veniam. Explicabo ullam et alias id sint nobis delectus voluptatem molestiae earum deserunt numquam, aliquid facilis tempore.",
  },
  {
    icon: <Book className="h-4 w-4 md:h-6 md:w-6" />,
    title: "Recruitment & Fieldwork",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus eveniet autem et veniam. Explicabo ullam et alias id sint nobis delectus voluptatem molestiae earum deserunt numquam, aliquid facilis tempore.",
  },
];

export const Features = () => (
  <div className="w-full py-20" id="services">
    <div className="container px-4 mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="text-lg font-tertiary"> Services</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left text-secondaryColor font-bold">
                Why Us!
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-left my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque quia odit distinctio, eum minima doloribus! Rerum consequatur cum in quia similique ducimus dolore adipisci! Molestias deleniti dolorem harum incidunt!
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 items-start gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-row gap-6 items-center">
                <span className="rounded-full bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  {service.icon}
                </span>
                <Accordion type="single" className="w-full" collapsible>
                  <AccordionItem value={`item-${index}`} className="flex flex-col gap-1">
                    <AccordionTrigger className="text-md font-semibold">{service.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="">{service.description}</p>
                      <Button variant="ghost" className="my-3 text-secondaryColor">
                        Learn more <MoveRight className="w-4 h-4" />
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
          <Image src={Image1} alt="Services" className="object-cover w-full h-full rounded-md" />
        </div>
      </div>
    </div>
  </div>
);
