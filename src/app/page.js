import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AgriculturalProducts from './components/AgriculturalProducts'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AgriculturalProducts/>
    </div>
  )
}
