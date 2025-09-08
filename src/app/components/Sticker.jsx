import React from 'react'
import sticker1 from '@/images/sticker1.png'
import sticker2 from '@/images/sticker2.svg'
import sticker3 from '@/images/sticker3.png'
import Image from 'next/image'
const Sticker = () => {
  return (
    <section className='font-poppins py-10'>
       <div className='transform -rotate-3'>
        <div className='flex item-center justify-between bg-[#D9ECFF] py-3 border'>
            <div className='flex item-center gap-10 '>
            <Image src={sticker1} alt='sticker1' className='w-15 h-auto'/>
            <p className='text-[#002B55] text-2xl font-medium'>Quality Product</p>
            </div>
            <div className='flex item-center gap-10 '>
            <Image src={sticker2} alt='sticker1' className='w-15 h-auto'/>
            <p className='text-[#002B55] text-2xl font-medium'>shipping across India</p>
            </div>
            <div className='flex item-center gap-10 '>
            <Image src={sticker3} alt='sticker1' className='w-15 h-auto'/>
            <p className='text-[#002B55] text-2xl font-medium'>Quality Product</p>
            </div>
            <div className='flex item-center gap-10 '>
            <Image src={sticker3} alt='sticker1' className='w-15 h-auto'/>
            <p className='text-[#002B55] text-2xl font-medium'>shipping across India</p>
            </div> 
            <div className='flex item-center gap-10 '>
            <Image src={sticker3} alt='sticker1' className='w-15 h-auto'/>
            <p className='text-[#002B55] text-2xl font-medium'>shipping across India</p>
            </div>
             <div className='flex item-center gap-10 '>
            <Image src={sticker3} alt='sticker1' className='w-15 h-auto'/>
           
            </div>
          
        </div>
       </div>
        
    </section>
  )
}

export default Sticker