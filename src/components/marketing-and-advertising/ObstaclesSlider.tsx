"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  Next,
  Play,
  PlayAdd,
} from "iconsax-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { sliderItems } from "./type";

import "swiper/css";
import "swiper/css/navigation";

export const ObstaclesSlider = ({ items }: { items: sliderItems[] }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-6 min-h-60 mb-30 relative  w-full bg-linear-to-t from-[#7A3DE2] to-[#43217C]">
      <h2 className="text-xl px-5  text-center font-bold text-white">
        موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
      </h2>

      <div className="absolute w-full  top-24">
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <button className="cursor-pointer prev-btn absolute  left-8  sm:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-sm border border-gray-200">
            <ArrowLeft2 variant="Bold" size={20} color="black" />
          </button>
          <button className="cursor-pointer prev-btn absolute right-8 sm:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-sm border border-gray-200">
            <ArrowRight2 variant="Bold" size={20} color="black" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <div className="border border-gray-200 w-70.5 h-62.5 rounded-lg p-6 bg-white text-center flex items-center gap-5 justify-center flex-col text-sm font-medium">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                    />
                    <label className="font-semibold">{item.title}</label>
                    <p className="line-clamp-4 text-gray-600 leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
