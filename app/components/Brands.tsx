"use client";

import { useEffect, useState } from "react";
import {
Carousel,
CarouselApi,
CarouselContent,
CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const brandsData = [
    { id: 1, img: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
    { id: 2, img: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
    { id: 3, img: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
    { id: 4, img: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { id: 5, img: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" }
];

export const Brands = () => {
const [api, setApi] = useState<CarouselApi>();
const [current, setCurrent] = useState(0);

useEffect(() => {
    if (!api) {
    return;
    }

    setTimeout(() => {
    if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
    } else {
        api.scrollNext();
        setCurrent(current + 1);
    }
    }, 1000);
}, [api, current]);

return (
    <div className="w-full py-20 lg:py-20">
    <div className="container px-4 mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
        <h3 className="text-md text-secondaryColor md:text-xl tracking-tighter lg:max-w-xl font-bold text-left">
            Trusted by market leaders
        </h3>
        <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
                {brandsData.map(( {id, img }) => (
                <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={id}
                >
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                        <Image src={img} alt={`brand ${id}`} width="158" height="48" className="object-cover w-full" />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
        </div>
    </div>
    </div>
);
};