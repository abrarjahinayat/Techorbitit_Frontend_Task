import React from 'react'
import map from '@/images/map.png'
import location from '@/images/location.svg'
import Image from 'next/image'
const ContactUs = () => {
  return (
    <section className='container font-poppins'>
        <div className='flex gap-2.5'>
        <div className='bg-[#002B55] w-[60%] rounded-2xl p-12.5'>
            <h2 className='text-[38px] text-white font-medium'>Contact Us</h2>
            <form action="#">
                <input className='bg-white/10 text-white rounded-full text-lg font-normal px-7.5 py-5 w-full mt-7.5' type="text" placeholder='Your Name' /> 
                <input className='bg-white/10 text-white rounded-full text-lg font-normal px-7.5 py-5 w-full mt-7.5' type="email" placeholder='Email' /> 
                <input className='bg-white/10 text-white rounded-full text-lg font-normal px-7.5 py-5 w-full mt-7.5' type="number" placeholder='Phone ' />
                <textarea className='bg-white/10 text-white rounded-2xl text-lg font-normal px-7.5 py-5 w-full mt-7.5' rows="4" placeholder='Write Message'></textarea>
                <button className='bg-button text-sm px-8 py-4 text-primary-text font-semibold rounded-full hover:bg-button/70 mt-7.5' >
                    Submit
                </button>
            </form>
        </div>
    
        <div>
            <Image src={map} alt='map' className= "h-full" />
            <div className='flex gap-2.5 mt-5 relative bg-white -top-40 p-8 rounded-lg'>   
                <Image src={location} alt='location'  />
                <p className='text-lg font-normal text-primary-text '>JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactUs