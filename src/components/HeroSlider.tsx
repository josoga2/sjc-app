// components/HeroSlider.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

type Slide = {
  src: string;
  alt?: string;
};
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;


export default function HeroSlider({ slides }: { slides: Slide[] }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      effect={isMobile ? "slide" : "fade"}
      loop
      className="w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className="
              
              h-[40vh] sm:h-[60vh] lg:h-[80vh]
              w-full
            "
          >
            <Image
              src={slide.src}
              alt={slide.alt || ""}
              fill
              priority={i === 0}
              className="
                object-cover
                sm:object-contain
                rounded-none sm:rounded-lg
              "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
