import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full py-20 lg:py-20 bg-secondaryColor">
    <div className="container px-4 mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col text-white">
            <div>
              <Badge variant="outline" className="text-white text-lg font-tertiary">Faq</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                This is the start of something new
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-slate-300 text-left my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque quia odit distinctio, eum minima doloribus! Rerum consequatur cum in quia similique ducimus dolore adipisci! Molestias deleniti dolorem harum incidunt!
              </p>
            </div>
            <div>
              <Button className="gap-4 bg-primaryColor">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full text-white">
          {Array.from({ length: 8 }).map((_, index) => (
            <AccordionItem key={index} value={"index-" + index} >
              <AccordionTrigger className="text-md">
                This is the start of something new
              </AccordionTrigger>
              <AccordionContent className="text-slate-200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ab ducimus vitae est architecto ipsa libero ut temporibus, neque, quae deleniti, similique non voluptate natus expedita id ex. Fuga, atque!
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);