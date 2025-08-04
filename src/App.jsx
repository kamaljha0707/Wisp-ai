import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import Fnq from './components/Fnq'
import WhyChooseSection from './components/Whyus'
import IntegrationsGrid from './components/IntegrateGrid'



function App() {

  return (
   <>
  <div className='h-full w-full m-0 px-10'>
  <Herosection/>
  <FeatureSection/>
  <WhyChooseSection/>
  <IntegrationsGrid/>
  </div>
  <Fnq/>
  <Footer/>
  </>
  )
}

export default App
