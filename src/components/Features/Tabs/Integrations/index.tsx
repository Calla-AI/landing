import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import { SiZendesk, SiGooglesheets, SiTypeform } from "react-icons/si";
import { RiFileExcelFill } from "react-icons/ri";
import { FaWhatsapp } from 'react-icons/fa';


const integrations = [
  { name: "Zendesk", logo: SiZendesk },
  { name: "Google Sheets", logo: SiGooglesheets },
  { name: "Typeform", logo: SiTypeform },
  { name: "Excel", logo: RiFileExcelFill },
  { name: "Whatsapp Business", logo: FaWhatsapp },
];

export function Integrations() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-6">Connect with the tools of your choice</h2>
      <div className="flex justify-center">
      <Carousel opts={{ align: "start", loop: true }} plugins={[
        Autoplay({
            delay: 1500,
          })
      ]} className="w-full">
        <CarouselContent>
          {integrations.map((int, index) => (
            <CarouselItem key={index} className="sm:basis-1 md:basis-1/3 space-x-20">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 h-[150px]">
                    <int.logo className="text-5xl mb-4" />
                    <h4 className="text-xl font-semibold text-center">{int.name}</h4>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
      <div className="flex justify-center mt-6">
        <p className="text-sm text-center">
            Calla integrates with the tools you already use. Integrations like Zendesk and Whatsapp Business will allow Calla to directly analyze your customer conversations and provide you with real-time insights.
        </p>
        </div>
    </div>
  );
}
