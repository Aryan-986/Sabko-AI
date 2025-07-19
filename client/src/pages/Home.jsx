import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import ModesSection from '../components/ModeSection'
import Policy from '../components/Policy'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AiTools/>
        <Plan/>
        <ModesSection/>
        <Policy/>
        <Footer/>
    </>
  )
}

export default Home