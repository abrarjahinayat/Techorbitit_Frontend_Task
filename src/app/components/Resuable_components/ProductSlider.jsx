// components/ProductSlider.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

const ProductSlider = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop
        onSwiper={setSwiperInstance}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 }, // ✅ Mobile
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktop
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className="
          absolute top-1/2 -translate-y-1/2 z-10 
          w-8 h-8 sm:w-12 sm:h-12 
          left-2 sm:left-[-20px] 
          rounded-full bg-white border 
          flex justify-center items-center shadow cursor-pointer 
          hover:scale-110 transition
        "
      >
        <span className="text-black text-lg sm:text-2xl font-bold">&#8592;</span>
      </div>

      <div
        ref={nextRef}
        className="
          absolute top-1/2 -translate-y-1/2 z-10 
          w-8 h-8 sm:w-12 sm:h-12 
          right-2 sm:right-[-20px] 
          rounded-full bg-white border 
          flex justify-center items-center shadow cursor-pointer 
          hover:scale-110 transition
        "
      >
        <span className="text-black text-lg sm:text-2xl font-bold">&#8594;</span>
      </div>
    </div>
  );
};

export default ProductSlider;
