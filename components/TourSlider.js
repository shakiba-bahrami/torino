
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import Image from "next/image";
import { slidesImages } from "@/core/constants/sliderImages";

function TourSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="h-[clamp(284px,42.1vw,480px)] w-[clamp(325px,43.86vw,500px)] mx-auto ">
      <Swiper
        slidesPerView={1}
        loop={slidesImages.length > 1}
        className=""
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
      >
        {slidesImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative mx-auto h-[clamp(284px,42.1vw,480px)] w-[clamp(325px,43.86vw,500px)]">
              <div className="absolute left-0 top-1/2 z-10 h-[clamp(162px,23.95vw,273px)] w-[clamp(142px,18.95vw,216px)] -translate-y-1/2 overflow-hidden rounded-[35px]">
                <Image
                  sizes="(min-width: 1140px) 216px, 142px"
                  src={slidesImages[(activeIndex + 2) % 4].image}
                  alt={slidesImages[(activeIndex + 2) % 4].alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute left-[clamp(25px,3.07vw,35px)] top-1/2 z-20 h-[clamp(198px,29.21vw,333px)] w-[clamp(168px,22.46vw,256px)] -translate-y-1/2 overflow-hidden rounded-[40px]">
                <Image
                  sizes="(min-width: 1140px) 256px, 168px"
                  src={slidesImages[(activeIndex + 1) % 4].image}
                  alt={slidesImages[(activeIndex + 1) % 4].alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute left-[clamp(50px,6.14vw,70px)] top-1/2 z-30 h-[clamp(247px,36.49vw,416px)] w-[clamp(253px,33.86vw,386px)] -translate-y-1/2 overflow-hidden rounded-[45px]">
                <Image
                  sizes="(min-width: 1140px) 386px, 253px"
                  src={slidesImages[activeIndex % 4].image}
                  alt={slidesImages[activeIndex % 4].alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute right-0 top-1/2 z-40 h-[clamp(284px,41.84vw,479px)] w-[clamp(255px,34.12vw,389px)] -translate-y-1/2 overflow-hidden rounded-[60px]">
                <Image
                  sizes="(min-width: 1140px) 389px, 255px"
                  src={slidesImages[activeIndex - 1].image}
                  alt={slidesImages[activeIndex - 1].alt}
                  fill
                  className="scale-105 rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary"
        >
          <FaChevronRight />
        </button>

        <span className="text-[14px] font-medium text-[#595959] lg:text-[22px]" dir="ltr">
          {activeIndex}/{slidesImages.length}
        </span>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary"
        >
          <FaChevronLeft />
        </button>
      </div>
    </section>
  );
}

export default TourSlider;
