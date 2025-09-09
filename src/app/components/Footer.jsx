import React from "react";
import logo from "@/images/logo.png";

const Footer = () => {
  return (
    <section className="max-w-[1640px] mx-auto font-poppins py-10">
      <div className="bg-[#002B55] relative rounded-2xl p-6 sm:p-10 md:p-12 lg:p-[220px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,_#1B7FE1,_transparent_50%)]  pointer-events-none opacity-40"></div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Newsletter */}
          <div className="flex flex-col w-full lg:w-auto">
            <h3 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white">
              Join Our JF Products
            </h3>
            <h4 className="text-base sm:text-lg md:text-[20px] font-normal text-white mt-2.5 sm:mt-5">
              We’ll tell you about store updates and discounts
            </h4>
            <input
              className="bg-white/10 text-white rounded-full text-sm sm:text-lg font-normal px-4 sm:px-7.5 py-3 sm:py-4 w-full mt-4 sm:mt-7.5"
              type="email"
              placeholder="Enter your email"
            />
            <div className="flex items-center gap-2.5 mt-3 sm:mt-5">
              <input type="checkbox" className="w-4 sm:w-5 h-4 sm:h-5" />
              <p className="text-xs sm:text-[18px] font-normal text-white/50">
                Yes, subscribe me to your newsletter.
              </p>
            </div>
            <button className="mt-4 sm:mt-7.5 w-full sm:w-max px-6 sm:px-[236px] py-3 sm:py-4 bg-white text-sm sm:text-sm text-primary-text font-medium rounded-full hover:bg-button/70">
              Join Now
            </button>
          </div>

          {/* Information */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-0">
            <div className="flex flex-col w-full sm:w-auto">
              <h3 className="text-lg sm:text-[32px] font-medium text-white">Information</h3>
              <ul className="mt-4 sm:mt-7.5 flex flex-col gap-2.5 sm:gap-3">
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Home</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Shop</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Our Story</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Blogs</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Helpful */}
            <div className="flex flex-col w-full sm:w-auto mt-6 sm:mt-0">
              <h3 className="text-lg sm:text-[32px] font-medium text-white">Helpful</h3>
              <ul className="mt-4 sm:mt-7.5 flex flex-col gap-2.5 sm:gap-3">
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">FAQs</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Terms & Conditions</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Privacy Policy</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">Shipping Policy</a></li>
                <li className="text-sm sm:text-[20px] font-normal text-white"><a href="#">My Account</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mt-10 sm:mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <img src={logo.src} alt="Logo" className="w-24 sm:w-32 h-auto" />
            <div>
              <p className="text-sm sm:text-[20px] font-semibold text-white">Our Branches</p>
              <p className="text-xs sm:text-[20px] font-medium text-white">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>

          <button className="w-full sm:w-max mt-4 lg:mt-0 px-6 sm:px-8 py-3 sm:py-4 bg-button text-sm sm:text-sm text-primary-text font-semibold rounded-full hover:bg-button/70">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
