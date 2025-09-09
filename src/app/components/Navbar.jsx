"use client";
import { Search, UserRound, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="font-poppins fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container flex justify-between items-center py-6">
        {/* Desktop Nav */}
        <div className="hidden md:block z-999">
          <ul className="flex gap-10 text-lg font-normal text-primary-text">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contactus">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 z-50">
          <img src={logo.src} alt="Logo" className="w-28 h-auto" />
        </div>

        {/* Right Icons */}
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-3 items-center text-primary-text font-normal cursor-pointer">
            <h6>Login</h6>
            <UserRound className="w-6 h-6" />
          </div>
          <Search className="w-6 h-6 cursor-pointer hidden md:block" />
          <div className="cursor-pointer relative hidden md:block">
            <img src="/addtocart.svg" alt="Add to cart" className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-primary-text text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-primary-text">
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" onClick={() => setIsOpen(false)}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contactus" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
              <li className="flex gap-3 items-center cursor-pointer">
                <h6>Login</h6>
                <UserRound className="w-6 h-6" />
              </li>
              <Search className="w-6 h-6 cursor-pointer" />
              <div className="cursor-pointer relative">
                <img
                  src="/addtocart.svg"
                  alt="Add to cart"
                  className="w-6 h-6"
                />
                <span className="absolute -top-2 -right-2 bg-primary-text text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
