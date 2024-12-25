import { Book, BookOpenText, BriefcaseBusiness, Check, MoveRight, TvMinimalPlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Service1 from "../../public/services/service1.jpg";
import { IconBadge } from "@/components/icon-badge";


export const Features = () => (
  <div className="w-full py-20 lg:py-20" id="services">
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
          <div className="grid lg:pl-6 grid-cols-1 items-start  gap-6">
            <div className="flex flex-row gap-6 items-center">
              <span className="rounded-full bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                <TvMinimalPlay className="h-6 w-6"/>
              </span>
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger className="text-lg font-semibold">Applied Digital Skills</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                  <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque culpa facere quisquam quae quo esse placeat, corporis totam omnis iure eaque sapiente maiores deleniti, expedita ipsa ut. Laboriosam, omnis libero?</p>
                  <Button variant="ghost" className="my-3 text-secondaryColor text-lg" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <span className="rounded-full bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                <BookOpenText className="h-6 w-6"/>
              </span>
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger className="text-lg font-semibold">Blueprint</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                  <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, officiis! Delectus quo ab cum quasi dolorem veniam quas in debitis sed repellat fugit eum beatae, rem consequuntur sit suscipit qui?</p>
                  <Button variant="ghost" className="my-3 text-secondaryColor text-lg" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <span className="rounded-full bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                <BriefcaseBusiness className="h-6 w-6"/>
              </span>
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger className="text-lg font-semibold">Consultation & Monitoring</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus eveniet autem et veniam. Explicabo ullam et alias id sint nobis delectus voluptatem molestiae earum deserunt numquam, aliquid facilis tempore.</p>
                  <Button variant="ghost" className="my-3 text-secondaryColor text-lg" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>    

            <div className="flex flex-row gap-6 items-center">
              <span className="rounded-full bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                <Book className="h-6 w-6"/>
              </span>
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger className="text-lg font-semibold">Recruitment & Fieldwork</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus eveniet autem et veniam. Explicabo ullam et alias id sint nobis delectus voluptatem molestiae earum deserunt numquam, aliquid facilis tempore.</p>
                  <Button variant="ghost" className="my-3 text-secondaryColor text-lg" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>   
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
          <Image src={Service1} alt="Services" className="object-cover w-full h-full rounded-md"  />
        </div>
      </div>
    </div>
  </div>
);