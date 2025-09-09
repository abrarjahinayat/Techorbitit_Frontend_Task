"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import grass from "@/images/grass.png";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      image: grass.src,
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend of Greenery",
    },
    {
      image: grass.src,
      title: "Floral Paradise",
      subtitle: "Bring Color to Your Space",
    },
    {
      image: grass.src,
      title: "Modern Wall Design",
      subtitle: "Stylish & Functional",
    },
    {
      image: grass.src,
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend of Greenery",
    },
    {
      image: grass.src,
      title: "Floral Paradise",
      subtitle: "Bring Color to Your Space",
    },
    {
      image: grass.src,
      title: "Modern Wall Design",
      subtitle: "Stylish & Functional",
    },
  ];

  // Attach navigation once refs exist
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full relative font-poppins mt-20">
      {/* Custom arrows */}
      <button
        ref={prevRef}
        className="absolute w-10 h-10 sm:w-12 sm:h-12 left-2 sm:left-0 lg:left-110 top-1/2 -translate-y-1/2 z-10 bg-button text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-button/95"
      >
        <MoveLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        ref={nextRef}
        className="absolute w-10 h-10 sm:w-12 sm:h-12 right-2 sm:right-0 lg:right-110 top-1/2 -translate-y-1/2 z-10 bg-button text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-button/95"
      >
        <MoveRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slideToClickedSlide={true}
        slidesPerView={1}
        onSwiper={setSwiperInstance} // Set Swiper instance
        breakpoints={{
          990: { slidesPerView: 1, spaceBetween: 0 }, // Mobile + Tablet
          1028: { slidesPerView: 2, spaceBetween: 10 }, // Tablet landscape
          1920: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-banner-background rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-[70px] relative text-center lg:text-left">
              {/* Image */}
              <div>
                <img
                  className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] object-contain"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>

              {/* Text */}
              <div>
                <h1 className="font-medium text-xl sm:text-3xl lg:text-[50px]">
                  {slide.title}
                </h1>
                <h5 className="font-normal text-sm sm:text-lg lg:text-[20px] mt-2">
                  {slide.subtitle}
                </h5>
                <button
                  className="mt-6 sm:mt-8 lg:mt-12.5 w-max px-5 sm:px-7.5 py-2.5 sm:py-3 bg-button text-xs sm:text-sm lg:text-sm text-primary-text font-medium rounded-full hover:bg-button/70"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
