import React from 'react'
import branch1 from '@/images/branchs1.svg'
import branch2 from '@/images/branchs2.svg'
import branch3 from '@/images/branchs3.svg'
import branch4 from '@/images/branchs4.svg'
import branch5 from '@/images/branchs5.svg'
import branch6 from '@/images/branchs6.svg'
import Image from 'next/image'
import ContactUs from './ContactUs'
const OurBranches = () => {
  return (
    <section id='contactus' className='container py-25'>
        <div className="border border-gray-300 rounded-lg ">
        <button className='bg-button relative -top-5 text-sm p-2.5 text-primary-text font-medium rounded-full hover:bg-button/70 mx-auto block' >
            Our Branches
        </button>
        <div className='flex flex-wrap justify-center gap-12 py-5 '>
            <div className='hover:cursor-pointer border border-[#B0DD1D] bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch1} alt='branch1' className='w-20 h-auto ' />

            </div> 
             <div className='hover:cursor-pointer border border-transparent hover:border-[#B0DD1D] hover:bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch2} alt='branch1' className='w-20 h-auto ' />

            </div>  <div className='hover:cursor-pointer border border-transparent hover:border-[#B0DD1D] hover:bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch3} alt='branch1' className='w-20 h-auto ' />

            </div>  <div className='hover:cursor-pointer border border-transparent hover:border-[#B0DD1D] hover:bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch4} alt='branch1' className='w-20 h-auto ' />

            </div>  <div className='hover:cursor-pointer border border-transparent hover:border-[#B0DD1D] hover:bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch5} alt='branch1' className='w-20 h-auto ' />

            </div>  <div className='hover:cursor-pointer border border-transparent hover:border-[#B0DD1D] hover:bg-[#B0DD1D]/20 px-3 py-1 transition-all duration-300 rounded-lg'>
            <Image src={branch6} alt='branch1' className='w-20 h-auto ' />

            </div> 
          
        </div>

        <ContactUs/>
        </div>
    </section>
  )
}

export default OurBranches