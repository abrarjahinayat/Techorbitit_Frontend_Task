import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const CopyRight = () => {
  return (
    <footer className=" py-4 font-poppins">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm font-normal text-primary-text">
       
        <p>Copyright © 2025 JF Products. All rights reserved</p>

      
        <div className="flex gap-3 mt-3 sm:mt-0">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CopyRight;
