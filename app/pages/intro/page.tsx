"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper'; // إصلاح الاستيراد
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// importing imgs
import Image from "next/image";
import Link from "next/link";

const IndexIntroPage: React.FC = () => {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    // Check if the current slide is the last one
    setIsLastSlide(swiper.activeIndex === swiper.slides.length - 1);
    console.log(swiper.activeIndex);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)} // No need to store swiperInstance anymore
        onSlideChange={handleSlideChange}
        className=" h-screen pb-64 "
      >
        <Link
          href="/pages/auth"
          className="absolute top-8 left-8 cursor-pointer text-zinc-500 z-[1] "
        >
          Skip
        </Link>

        <SwiperSlide>
          <div className=" h-full flex flex-col items-center justify-center gap-[30px] max-sm:gap-5 pb-8 ">
            <Image
              src="/intro1.png"
              alt="intro1"
              width={200}
              height={200}
              priority // Optional: to optimize loading
            />

            <h1 className="text-[2.5rem] max-sm:text-3xl">Manage your tasks</h1>
            <p className="text-lg text-zinc-500 max-sm:text-sm max-sm:w-80 text-center">
              You can easily manage all of your daily tasks in DoMe for free
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col items-center justify-center gap-[30px] pb-8 ">
            <Image
              src="/intro2.png"
              alt="intro1"
              width={200}
              height={200}
              priority // Optional: to optimize loading
            />

            <h1 className="text-[2.5rem] max-sm:text-3xl">
              MCreate daily routine
            </h1>
            <p className="text-lg text-zinc-500 max-sm:text-sm max-sm:w-80 text-center">
              In Uptodo you can create your personalized routine to stay
              productive
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col items-center justify-center gap-[30px] pb-8 ">
            <Image
              src="/intro3.png"
              alt="intro1"
              width={200}
              height={200}
              priority // Optional: to optimize loading
            />

            <h1 className="text-[2.5rem] max-sm:text-3xl">
              Orgonaize your tasks
            </h1>
            <p className="text-lg text-zinc-500 max-sm:text-sm max-sm:w-80 text-center">
              You can organize your daily tasks by adding your tasks into
              separate categories
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevButtonRef}
        aria-label="Previous Slide"
        className="absolute top-[90%] left-[30px] translate-y-[-50%] z-10 text-white border-none px-[25px] py-[10px] cursor-pointer outline-none "
      >
        Back
      </button>
      {!isLastSlide ? (
        <button
          ref={nextButtonRef}
          aria-label="Next Slide"
          className="absolute top-[90%] right-[30px] translate-y-[-50%] z-10 bg-[#8875FF]  text-white border-none px-[25px] py-[10px] cursor-pointer outline-none "
        >
          Next
        </button>
      ) : (
        <Link
          href="/pages/auth"
          className="absolute top-[90%] right-[30px] translate-y-[-50%] z-10 bg-[#8875FF]  text-white border-none px-[25px] py-[10px] cursor-pointer outline-none "
        >
          Finish
        </Link>
      )}
    </div>
  );
};

export default IndexIntroPage;
