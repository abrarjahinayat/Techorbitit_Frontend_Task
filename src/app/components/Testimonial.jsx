"use client";
import React, { useRef, useState } from "react";
import sample2 from "@/images/sample2.png";
import sample from "@/images/sample.png";
import samplebg from "@/images/samplebg.png";

import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const testimonials = [
    {
      id: 1,
      imgLeft: sample2,
      imgRight: sample,
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product",
      name: "Samuel Varughese",
    },
    {
      id: 2,
      imgLeft: sample2,
      imgRight: sample,
      text: "Amazing support team and quick delivery. Installation was simple and the quality exceeded expectations.",
      name: "John Doe",
    },
  ];

  return (
    <section className="font-poppins py-10 container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setSwiper}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
              {/* Left Block */}
              <div className="bg-[#F2F4F6] py-8 sm:py-10 rounded-[20px] flex-1">
                <div className="px-6 sm:px-10 rounded-[20px]">
                  <Image
                    src={item.imgLeft}
                    alt="testimonial"
                    className="w-[60px] sm:w-[82px] h-[60px] sm:h-[82px] rounded-full"
                  />
                  <p className="text-primary-text text-base sm:text-lg md:text-xl lg:text-2xl font-normal w-full lg:w-[680px] mt-5 sm:mt-7.5">
                    {item.text}
                  </p>
                </div>
                <div
                  className="bg-cover bg-center bg-no-repeat mt-8 sm:mt-[118px] py-6 sm:py-10 rounded-[20px] px-6 sm:px-10 relative"
                  style={{ backgroundImage: `url(${samplebg.src})` }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-primary-text text-xl sm:text-2xl md:text-3xl font-semibold">
                      - {item.name}
                    </p>
                  </div>

                  {/* Buttons */}
                  <span className="flex gap-3 sm:gap-5 mt-6 sm:mt-10 absolute right-6 sm:right-10 bottom-6 sm:bottom-10">
                    <button
                      ref={prevRef}
                      className="w-[40px] h-[40px] sm:w-[51px] sm:h-[51px] flex justify-center items-center bg-transparent border rounded-full"
                    >
                      <MoveLeft />
                    </button>
                    <button
                      ref={nextRef}
                      className="w-[40px] h-[40px] sm:w-[51px] sm:h-[51px] flex justify-center items-center bg-transparent border rounded-full"
                    >
                      <MoveRight />
                    </button>
                  </span>
                </div>
              </div>

              {/* Right Block */}
              <div className="bg-[#F2F4F6] p-3 sm:p-5 rounded-[20px] flex justify-center items-center">
                <Image
                  src={item.imgRight}
                  alt="testimonial"
                  className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[319px] h-auto lg:h-[568px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
