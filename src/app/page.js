import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductCard from './components/Resuable_components/ProductCard'
import AgriProducts from './components/Resuable_components/AgriProducts'
import LandScapeProducts from './components/Resuable_components/LandScapeProducts'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AgriProducts/>
      <LandScapeProducts/>
    </div>
  )
}
