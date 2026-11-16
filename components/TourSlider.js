"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-cards";

import Image from "next/image";
import { slidesImages } from "@/core/constants/sliderImages";

function TourSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-8">
      <Swiper
        slidesPerView={1}
        loop={slidesImages.length > 1}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
      >
        {slidesImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative mx-auto w-[325px] h-[284px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[142px] h-[162px] overflow-hidden rounded-[35px]">
                <Image
                  sizes="142px"
                  src={slidesImages[(activeIndex + 2) % 4].image}
                  alt={slidesImages[(activeIndex + 2) % 4].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute left-[25px] top-1/2 -translate-y-1/2 z-20 w-[168px] h-[198px] overflow-hidden rounded-[40px]">
                <Image
                  sizes="168px"
                  src={slidesImages[(activeIndex + 1) % 4].image}
                  alt={slidesImages[(activeIndex + 1) % 4].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute left-[50px] top-1/2 -translate-y-1/2 z-30 w-[253px] h-[247px] overflow-hidden rounded-[45px]">
                <Image
                  sizes="253px"
                  src={slidesImages[activeIndex % 4].image}
                  alt={slidesImages[activeIndex % 4].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-[255px] h-[284px] overflow-hidden rounded-[60px]">
                <Image
                  sizes="255px"
                  src={slidesImages[activeIndex - 1].image}
                  alt={slidesImages[activeIndex - 1].alt}
                  fill
                  className="object-cover rounded-lg scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
        <span className="text-[14px] font-medium text-[#595959]" dir="ltr">
          {activeIndex}/{slidesImages.length}
        </span>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>
      </div>
    </section>
  );
}

export default TourSlider;
