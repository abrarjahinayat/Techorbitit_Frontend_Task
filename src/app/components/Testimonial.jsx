"use client";
import React, { useRef, useEffect, useState } from "react";
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

  useEffect(() => {
    // No need to manually update navigation since we're using onClick handlers
  }, [swiper]);

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
            <div className="flex justify-between">
              {/* Left Block */}
              <div className="bg-[#F2F4F6] py-10 rounded-[20px]">
                <div className="px-10 rounded-[20px]">
                  <Image
                    src={item.imgLeft}
                    alt="testimonial"
                    className="w-[82px] h-[82px] rounded-full"
                  />
                  <p className="text-primary-text text-2xl font-normal w-[680px] mt-7.5">
                    {item.text}
                  </p>
                </div>
                <div
                  className="bg-cover bg-center bg-transparent bg-no-repeat mt-[118px] py-10 rounded-[20px] px-10 relative"
                  style={{ backgroundImage: `url(${samplebg.src})` }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-primary-text text-3xl font-semibold">
                      - {item.name}
                    </p>
                  </div>

                  {/* Buttons visually inside the block */}
                  <span className="flex gap-5 mt-10 absolute right-10 bottom-10">
                    <button
                      ref={prevRef}
                      className="w-[51px] h-[51px] flex justify-center items-center bg-transparent border rounded-full"
                    >
                      <MoveLeft />
                    </button>
                    <button
                      ref={nextRef}
                      className="w-[51px] h-[51px] flex justify-center items-center bg-transparent border rounded-full"
                    >
                      <MoveRight />
                    </button>
                  </span>
                </div>
              </div>

              {/* Right Block */}
              <div className="bg-[#F2F4F6] p-5 rounded-[20px]">
                <Image
                  src={item.imgRight}
                  alt="testimonial"
                  className="w-[319px] h-[568px]"
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