import React from "react";
import logo from "@/images/logo.png";
const Footer = () => {
  return (
    <section className="max-w-[1640px] mx-auto font-poppins   ">
      <div className="bg-[#002B55] relative rounded-2xl py-30 px-[220px]">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,_#1B7FE1,_transparent_50%)] opacity-40 "></div>
        <div className=" flex justify-between  ">
          <div>
            <h3 className="text-[32px] font-medium text-white">
              Join Our JF Products
            </h3>
            <h4 className="text-[20px] font-normal text-white">
              We’ll tell you about store updates and discounts
            </h4>
            <input
              className="bg-white/10 text-white rounded-full text-lg font-normal px-7.5 py-4 w-[550px] mt-7.5"
              type="email"
              placeholder="Enter your email"
            />
            <div className="flex items-center gap-2.5 mt-5">
              <input type="checkbox" className="w-5 h-5" />
              <p className="text-[18px] font-normal text-white/50">
                Yes, subscribe me to your newsletter.
              </p>
            </div>
            <button className="mt-7.5 w-max px-[236px] py-4 bg-white text-sm text-primary-text font-medium rounded-full hover:bg-button/70">
              Join Now
            </button>
          </div>
          <div>
            <h3 className="text-[32px] font-medium text-white">Information</h3>
            <ul>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Home</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Shop</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Our Story</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Blogs</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[32px] font-medium text-white">Helpful</h3>
            <ul>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">FAQs</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">Shipping Policy</a>
              </li>
              <li className="text-[20px] font-normal text-white mt-7.5">
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between  items-center mt-20 ">
            <div className="flex z-999 items-center gap-10">
          <img src={logo.src} alt="" className="w-32 h-auto" />
          <div>
            <p className="text-[20px] font-semibold text-white">Our Branches</p>
            <p className="text-[20px] font-medium text-white">Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
          </div>
                
            </div>
            <button className="mt-7.5 w-max px-8 py-4 bg-button text-sm text-primary-text font-semibold rounded-full hover:bg-button/70">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
