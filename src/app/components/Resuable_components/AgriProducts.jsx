// app/page.jsx (or any page)
import ProductSlider from "./ProductSlider";

import product1 from "@/images/product1.png";
import product2 from "@/images/product2.png";
import product3 from "@/images/product3.png";
import product4 from "@/images/product4.png";

const products = [
  { image: product1.src, name: "JF Barbed Wire- 270 GSM", price: "₹4,995.00" },
  { image: product2.src, name: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00" },
  { image: product3.src, name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00" },
  { image: product4.src, name: "JF Bluelink Mesh", price: "₹3,067.50 – ₹6,362.50" },{ image: product1.src, name: "JF Barbed Wire- 270 GSM", price: "₹4,995.00" },
  { image: product2.src, name: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00" },
  { image: product3.src, name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00" },
  { image: product4.src, name: "JF Bluelink Mesh", price: "₹3,067.50 – ₹6,362.50" },
];

export default function AgriProducts() {
  return (
    <main id="shop" className="p-10 container">
       <h3 className='lg:text-[42px] text-2xl md:text-3xl font-medium mb-[30px] text-primary-text'>Agricultural Products</h3>
      <ProductSlider products={products} />
    </main>
  );
}
