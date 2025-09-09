import React from 'react'
import sticker1 from '@/images/sticker1.png'
import sticker2 from '@/images/sticker2.svg'
import sticker3 from '@/images/sticker3.png'
import Image from 'next/image'

const Sticker = () => {
  return (
    <section className="font-poppins py-10">
      <div className="transform -rotate-3">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between bg-[#D9ECFF] py-3 border gap-6 lg:gap-10 px-4 sm:px-6 md:px-8">
          {/* Item 1 */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker1} alt="sticker1" className="w-10 sm:w-12 md:w-15 h-auto" />
            <p className="text-[#002B55] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Quality Product
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker2} alt="sticker2" className="w-10 sm:w-12 md:w-15 h-auto" />
            <p className="text-[#002B55] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Shipping across India
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker3} alt="sticker3" className="w-10 sm:w-12 md:w-15 h-auto" />
            <p className="text-[#002B55] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Quality Product
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker3} alt="sticker4" className="w-10 sm:w-12 md:w-15 h-auto" />
            <p className="text-[#002B55] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Shipping across India
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker3} alt="sticker5" className="w-10 sm:w-12 md:w-15 h-auto" />
            <p className="text-[#002B55] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Shipping across India
            </p>
          </div>

          {/* Item 6 (icon only) */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <Image src={sticker3} alt="sticker6" className="w-10 sm:w-12 md:w-15 h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sticker
