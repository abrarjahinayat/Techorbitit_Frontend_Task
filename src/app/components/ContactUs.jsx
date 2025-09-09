import React from 'react'
import map from '@/images/map.png'
import location from '@/images/location.svg'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <section className="container font-poppins py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-2.5">
        {/* Form Section */}
        <div className="bg-[#002B55] relative w-full lg:w-[60%] rounded-2xl p-8 sm:p-10 md:p-12.5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,_#1B7FE1,_transparent_40%)]  pointer-events-none opacity-40"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] text-white font-medium">Contact Us</h2>
          <form action="#" className="mt-6 sm:mt-7.5">
            <input
              className="bg-white/10 text-white rounded-full text-base sm:text-lg font-normal px-5 sm:px-7.5 py-3 sm:py-5 w-full mt-4 sm:mt-7.5"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-white/10 text-white rounded-full text-base sm:text-lg font-normal px-5 sm:px-7.5 py-3 sm:py-5 w-full mt-4 sm:mt-7.5"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-white/10 text-white rounded-full text-base sm:text-lg font-normal px-5 sm:px-7.5 py-3 sm:py-5 w-full mt-4 sm:mt-7.5"
              type="number"
              placeholder="Phone"
            />
            <textarea
              className="bg-white/10 text-white rounded-2xl text-base sm:text-lg font-normal px-5 sm:px-7.5 py-3 sm:py-5 w-full mt-4 sm:mt-7.5"
              rows="4"
              placeholder="Write Message"
            ></textarea>
            <button
              className="bg-button text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-primary-text font-semibold rounded-full coursor-pointer hover:bg-button/70 mt-4 sm:mt-7.5"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-auto flex flex-col items-center">
          <Image src={map} alt="map" className="w-full h-auto" />
          <div className="flex gap-2.5 mt-4 sm:mt-5 relative bg-white p-4 sm:p-8 rounded-lg w-full">
            <Image src={location} alt="location" />
            <p className="text-sm sm:text-lg font-normal text-primary-text">
              JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
