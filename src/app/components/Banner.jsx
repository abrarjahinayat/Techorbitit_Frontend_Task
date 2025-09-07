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
    }, {
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
    <div className="w-full relative font-poppins">
      {/* Custom arrows */}
      <button
        ref={prevRef}
        className="absolute w-12 h-12 left-0 top-1/2 -translate-y-1/2 z-10 bg-button text-black p-3 rounded-full shadow-lg hover:bg-button/95"
      >
        <MoveLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute w-12 h-12 right-0 top-1/2 -translate-y-1/2 z-10 bg-button text-black p-3 rounded-full shadow-lg hover:bg-button/95"
      >
        <MoveRight />
      </button>

      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        loop={true}
        spaceBetween={50}
        slideToClickedSlide={true}
        slidesPerView={1}
        onSwiper={setSwiperInstance} // Set Swiper instance
        breakpoints={{
          1920: { slidesPerView: 4, spaceBetween: 30 },
          1028: { slidesPerView: 2, spaceBetween: 10 },
          990: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-banner-background rounded-2xl p-10 flex items-center gap-[70px] relative">
              <div>
                <img
                  className="w-[500px] h-[500px]"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>

              <div>
                <h1 className="font-medium text-[50px]">{slide.title}</h1>
                <h5 className="font-normal text-[20px]">{slide.subtitle}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
