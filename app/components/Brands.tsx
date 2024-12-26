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
    { id: 5, img: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" },
    { id: 6, img: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
    { id: 7, img: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
    { id: 8, img: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
    { id: 9, img: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { id: 10, img: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" },
    { id: 11, img: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
    { id: 12, img: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
    { id: 13, img: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
    { id: 14, img: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { id: 15, img: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" },
    { id: 16, img: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
    { id: 17, img: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
    { id: 18, img: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
    { id: 19, img: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { id: 20, img: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" }
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
    <div className="w-full py-20 lg:py-20" id="brands">
        <div className="container px-0 mx-auto">
            <h3 className="text-md text-secondaryColor md:text-3xl tracking-tighter font-bold text-left m-7 mt-0">
                Trusted by market leaders
            </h3>
            <div className="relative w-full col-span-4">
                <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
                <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {brandsData.map(( {id, img }) => (
                    <CarouselItem
                        className="basis-1/4 lg:basis-1/12"
                        key={id}
                    >
                        <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                            <Image src={img} alt={`brand ${id}`} width="158" height="40" className="object-cover w-full" />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>
        </div>
    </div>
);
};