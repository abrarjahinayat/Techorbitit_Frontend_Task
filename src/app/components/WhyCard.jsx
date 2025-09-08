import React from 'react'
import why1 from '@/images/why1.png'
import why2 from '@/images/why2.png'
import why3 from '@/images/why3.png'
import Image from 'next/image'

const WhyCard = () => {
  return (
    <section className='font-poppins flex flex-wrap justify-between mt-[110px]'>
      <div className='w-[400px] relative bg-[#F2F4F6] rounded-[10px] px-10 py-10 hover:shadow-lg hover:scale-105 duration-300 cursor-pointer overflow-hidden'>
        
        {/* Radial gradient with Gaussian blur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,_#1B7FE1,_transparent_40%)] opacity-40 "></div>
        
        <Image src={why1} alt='why1' className='w-15 h-auto relative z-10'/>
        <h4 className='text-[26px] font-medium text-primary-text mt-7.5 relative z-10'>
          Unmatched Durability with Corrosion-Free Technology
        </h4>
        <p className='text-[17px] font-normal text-primary-text mt-5 relative z-10'>
          Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
        </p>
      </div> 
      
       <div className='w-[400px] -top-17 relative bg-[#002B55] rounded-[10px] px-10 py-10 hover:shadow-lg hover:scale-105 duration-300 cursor-pointer overflow-hidden'>
        
      
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,_#1B7FE1,_transparent_40%)] opacity-40 "></div>
        
        <Image src={why3} alt='why3' className='w-15 h-auto relative z-10'/>
        <h4 className='text-[26px] font-medium text-white mt-7.5 relative z-10'>
         Customer-Centric Approach
        </h4>
        <p className='text-[17px] font-normal text-white mt-5 relative z-10'>
         At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
        </p>
      </div>
      
      
        <div className='w-[400px] relative bg-[#F2F4F6] rounded-[10px] px-10 py-10 hover:shadow-lg hover:scale-105 duration-300 cursor-pointer overflow-hidden'>
        
      
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,_#1B7FE1,_transparent_40%)] opacity-40 "></div>
        
        <Image src={why2} alt='why2' className='w-15 h-auto relative z-10'/>
        <h4 className='text-[26px] font-medium text-primary-text mt-7.5 relative z-10'>
         Innovative and Diverse Product Range
        </h4>
        <p className='text-[17px] font-normal text-primary-text mt-5 relative z-10'>
          We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
        </p>
      </div>
    </section>
  )
}

export default WhyCard
