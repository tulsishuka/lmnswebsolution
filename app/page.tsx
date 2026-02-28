import React from 'react'
import Hero from './components/Sections/Hero'
import PortfolioSection from './components/Sections/PortfolioSection'
import DeviceShowcase from './components/Sections/DeviceShowcase'
import About from './components/Sections/About'
import Brew from './components/Sections/brew'
import BentoPage from './components/Sections/Capable/page'


const page = () => {
  return (
    <>
    <Hero/>
    <DeviceShowcase/>
    <About/>
    <PortfolioSection/>
<BentoPage/>
<Brew/>
    </>
  )
}

export default page
