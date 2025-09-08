import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductCard from './components/Resuable_components/ProductCard'
import AgriProducts from './components/Resuable_components/AgriProducts'
import LandScapeProducts from './components/Resuable_components/LandScapeProducts'
import Trusted from './components/Trusted'
import WhyUs from './components/WhyUs'


export default function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AgriProducts/>
      <LandScapeProducts/>
      <Trusted/>
     <WhyUs/>
    </div>
  )
}
