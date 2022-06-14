import React from 'react'
import FaqSection from '../components_custom/FaqSection'
import Header from '../components_custom/Header'
import LandingSection from '../components_custom/LandingSection'
import RoadmapSection from '../components_custom/RoadmapSection'
import TeamSection from '../components_custom/TeamSection'
import StackingSection from '../components_custom/StackingSection'
import Footer from '../components_custom/Footer'



export default function LandingPage() {
  return (
    <>
        <Header/>
        <LandingSection/>
        <RoadmapSection/>
        <StackingSection/>
        <TeamSection/>
        <FaqSection/>
        <Footer/>
    </>
  )
}
