// components/HeroSlider.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

type Slide = {
  src: string;
  alt?: string;
};
const MOBILE_BREAKPOINT = 640;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [effect, setEffect] = useState<"fade" | "slide">("fade");

  useEffect(() => {
    const updateEffect = () => {
      setEffect(window.innerWidth < MOBILE_BREAKPOINT ? "slide" : "fade");
    };

    updateEffect();
    window.addEventListener("resize", updateEffect);

    return () => window.removeEventListener("resize", updateEffect);
  }, []);

  return (
    <Swiper
      key={effect}
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      effect={effect}
      loop
      className="w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="h-[40vh] sm:h-[60vh] lg:h-[80vh] w-full">
            <Image
              src={slide.src}
              alt={slide.alt || ""}
              fill
              priority={i === 0}
              className="object-cover sm:object-contain rounded-none sm:rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
