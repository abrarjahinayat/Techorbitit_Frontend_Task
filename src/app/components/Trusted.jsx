import React from "react";
import trusted1 from "@/images/trusted1.png";
import trusted2 from "@/images/trusted2.png";
import trusted3 from "@/images/trusted3.png";
import Image from "next/image";
const Trusted = () => {
  return (
    <section className="container py-25  font-poppins">
      <div className=" bg-[#002B55] relative py-20 px-32 rounded-2xl">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,_#1B7FE166,_transparent_50%)]"></div>
        <h2 className="text-[42px] font-medium text-center text-white mb-12.5">
          Trusted by over 6K+ customers
        </h2>
        <div className="flex justify-around items-center flex-wrap gap-10">
          <div className="flex gap-5">
            <Image src={trusted1} alt="trusted1" className="mx-auto mb-10" />
            <div>
              <h4 className="font-medium text-[28px] text-white">Premium</h4>
              <h5 className="font-normal text-[22px] text-white">Products</h5>
            </div>
          </div>
          
          <div className="flex z-999 gap-5">
            <Image src={trusted2} alt="trusted1" className="mx-auto mb-10" />
            <div>
              <h4 className="font-medium text-[28px] text-white">4000+</h4>
              <h5 className="font-normal text-[22px] text-white">Google Review</h5>
            </div>
          </div>  
          
          <div className="flex gap-5">
            <Image src={trusted3} alt="trusted1" className="mx-auto mb-10" />
            <div>
              <h4 className="font-medium text-[28px] text-white">Delivery</h4>
              <h5 className="font-normal text-[22px] text-white">Across India</h5>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Trusted;
