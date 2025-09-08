import React from "react";
import WhyCard from "./WhyCard";

const WhyUs = () => {
  return (
    <section className="container font-poppins  pb-10">
      <div>
        <h2 className="text-[42px] text-center text-primary-text font-medium">
          Why Us
        </h2>
        <p className="text-[20px] text-center text-primary-text mt-7.5 mx-auto w-[850px]">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>

        <WhyCard />

        <button
         
          className="mt-2.5 block mx-auto px-7.5 py-3 bg-button text-sm text-primary-text font-medium rounded-full hover:bg-button/70"
        >
         Contact us
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
