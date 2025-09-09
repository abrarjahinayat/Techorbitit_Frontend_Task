import React from "react";
import WhyCard from "./WhyCard";

const WhyUs = () => {
  return (
    <section className="container font-poppins pb-10">
      <div>
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] text-center text-primary-text font-medium">
          Why Us
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg lg:text-[20px] text-center text-primary-text mt-5 sm:mt-7.5 mx-auto w-full sm:w-[600px] lg:w-[850px] px-4">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>

        {/* Cards */}
        <WhyCard />

        {/* Button */}
        <button
          className="mt-5 sm:mt-7.5 block mx-auto px-5 sm:px-7.5 py-2.5 sm:py-3 bg-button text-sm sm:text-base text-primary-text font-medium rounded-full hover:bg-button/70 transition"
        >
          Contact us
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
