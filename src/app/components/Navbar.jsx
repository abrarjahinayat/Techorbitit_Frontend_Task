import { Search, UserRound } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <section className=" font-poppins py-[35px]">
      <div className="container flex justify-between items-center py-4">
        <div>
          <ul className="flex gap-[50px] text-lg font-normal text-primary-text">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>{" "}
            <li>
              <a href="#">Blogs</a>
            </li>{" "}
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[50px] items-center" >
          <div className="flex gap-3 items-center text-primary-text font-normal cursor-pointer">
            <h6>Login</h6>
            <UserRound className="w-6 h-6" />
          </div>
          <div>
            <Search className="w-6 h-6" />
          </div>
          <div>
            <img src="/addtocart.svg" alt="Add to cart" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
