// app/page.jsx (or any page)
import ProductSlider from "./ProductSlider";

import product5 from "@/images/product5.png";
import product6 from "@/images/product6.png";
import product7 from "@/images/product7.png";
import product8 from "@/images/product8.png";

const products = [
  { image: product5.src, name: "Antiqo Fence", price: "₹10,024.00 – ₹14,984.82" },
  {
    image: product6.src,
    name: "JF Australian Trellis",
    price: "₹6,962.00",
  },
  {
    image: product7.src,
    name: "JF Polyhex Mesh",
    price: "₹4,050.00 – ₹10,770.00",
  },
  {
    image: product8.src,
    name: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
  },
  { image: product5.src, name: "Antiqo Fence", price: "₹4,995.00" },
  {
    image: product6.src,
    name: "JF Australian Trellis",
    price: "₹1,646.10 – ₹18,284.10",
  },
  {
    image: product7.src,
    name: "JF Polyhex Mesh",
    price: "₹1,260.00 – ₹10,750.00",
  },
  {
    image: product8.src,
    name: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
  },
];

export default function LandScapeProducts() {
  return (
    <main className="p-10 container">
      <h3 className="lg:text-[42px] text-2xl md:text-3xl font-medium mb-[30px] text-primary-text">
        Landscape Products
      </h3>
      <ProductSlider products={products} />
    </main>
  );
}
