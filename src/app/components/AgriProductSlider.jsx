"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Example product images (replace with your own)
import product1 from "@/images/product1.png";
import product2 from "@/images/product2.png";
import product3 from "@/images/product3.png";
import product4 from "@/images/product4.png";


const products = [
  { image: product1.src, name: "JF Barbed Wire- 270 GSM", price: "₹4,995.00" },
  { image: product2.src, name: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00" },
  { image: product3.src, name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00" },
  { image: product4.src, name: "JF Bluelink Mesh", price: "₹3,067.50 – ₹6,362.50" },{ image: product1.src, name: "JF Barbed Wire- 270 GSM", price: "₹4,995.00" },
  { image: product2.src, name: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00" },
  { image: product3.src, name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00" },
  { image: product4.src, name: "JF Bluelink Mesh", price: "₹3,067.50 – ₹6,362.50" },
 
];

const AgriProductSlider = () => {
  return (
    <div className="w-full relative ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation
        
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="product-swiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-banner-background rounded-xl  p-4  flex flex-col ">
              <Image
              
                src={product.image}
                width={250}
                height={200}
                alt={product.name}
                className="w-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-sm font-semibold mt-2 font-poppins text-primary-text/60">{product.price}</p>
              <button className="mt-2.5 w-max px-7.5 py-3 bg-button text-sm text-primary-text font-medium rounded-full hover:bg-indigo-700">
               Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AgriProductSlider;
