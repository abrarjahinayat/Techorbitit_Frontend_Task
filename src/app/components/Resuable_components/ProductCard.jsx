// components/ProductCard.jsx
"use client";

import Image from "next/image";

const ProductCard = ({ image, name, price, onClick }) => {
  return (
    <div className="bg-banner-background rounded-xl p-4 flex flex-col  shadow">
      <Image
        src={image}
        width={250}
        height={200}
        alt={name}
        className="w-full mx-auto"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-sm font-semibold mt-2 font-poppins text-primary-text/60">
        {price}
      </p>
      <button
        onClick={onClick}
        className="mt-2.5 w-max px-7.5 py-3 bg-button text-sm text-primary-text font-medium rounded-full hover:bg-button/70"
      >
        Shop Now
      </button>
    </div>
  );
};

export default ProductCard;
