import React from "react";
import trusted1 from "@/images/trusted1.png";
import trusted2 from "@/images/trusted2.png";
import trusted3 from "@/images/trusted3.png";
import Image from "next/image";

const Trusted = () => {
  return (
    <section className="container py-10 sm:py-20 lg:py-25 font-poppins">
      <div className="bg-[#002B55] relative py-10 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-32 rounded-2xl">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,_#1B7FE166,_transparent_50%)]"></div>

        {/* Heading */}
        <h2 className="relative text-2xl sm:text-3xl lg:text-[42px] font-medium text-center text-white mb-8 sm:mb-10 lg:mb-12.5">
          Trusted by over 6K+ customers
        </h2>

        {/* Trusted items */}
        <div className="relative flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-around items-center gap-8 sm:gap-10">
          {/* Item 1 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <Image
              src={trusted1}
              alt="trusted1"
              className="w-10 sm:w-14 lg:w-auto"
            />
            <div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-[28px] text-white">
                Premium
              </h4>
              <h5 className="font-normal text-sm sm:text-lg lg:text-[22px] text-white">
                Products
              </h5>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 sm:gap-5 z-10">
            <Image
              src={trusted2}
              alt="trusted2"
              className="w-10 sm:w-14 lg:w-auto"
            />
            <div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-[28px] text-white">
                4000+
              </h4>
              <h5 className="font-normal text-sm sm:text-lg lg:text-[22px] text-white">
                Google Review
              </h5>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <Image
              src={trusted3}
              alt="trusted3"
              className="w-10 sm:w-14 lg:w-auto"
            />
            <div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-[28px] text-white">
                Delivery
              </h4>
              <h5 className="font-normal text-sm sm:text-lg lg:text-[22px] text-white">
                Across India
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
