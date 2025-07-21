"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryItems } from "@/data";

export function Gallery() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-5 mt-8 w-full px-4 md:px-6">
            <h1 className="text-left w-full text-xl text-primary font-normal">
                Gallery
            </h1>
            <Carousel className="w-full" opts={{
                align: "start",
                loop: true
            }}>
                <CarouselContent>
                    {galleryItems.map((items) => (
                        <CarouselItem key={items.id}>
                            <img
                                className="h-80 w-full object-cover object-center rounded-md"
                                src={items.img}
                                alt="Ax"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="right-3" variant="secondary" />
                <CarouselPrevious className="left-3" variant="secondary" />
            </Carousel>
        </div>
    );
};