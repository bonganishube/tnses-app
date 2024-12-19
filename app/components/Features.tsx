import { BookOpenText, BriefcaseBusiness, Check, MoveRight, TvMinimalPlay } from "lucide-react";
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


export const Features = () => (
  <div className="w-full py-20 lg:py-20" >
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
              <TvMinimalPlay size="icon" className="w-6 h-6 mt-2 text-primary"/>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger>Applied Digital Skills</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                  <p>We&apos;ve made it easy to use and understand.</p>
                  <Button variant="ghost" className="my-3 px-0 text-black" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <BookOpenText className="w-6 h-6 mt-2 text-primary "/>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger>Blueprint</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                  <p>We&apos;ve made it easy to use and understand.</p>
                  <Button variant="ghost" className="my-3 px-0 text-black" >Learn more <MoveRight className="w-4 h-4" /></Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <BriefcaseBusiness className="w-6 h-6 mt-2 text-primary"/>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="flex flex-col gap-1">
                  <AccordionTrigger>Mentorship</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                  <p>We&apos;ve made it easy to use and understand.</p>
                  <Button variant="ghost" className="my-3 px-0 text-black" >Learn more <MoveRight className="w-4 h-4" /></Button>
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