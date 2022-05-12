import React from 'react'
import FaqSection from '../components/FaqSection'
import Header from '../components/Header'
import LandingSection from '../components/LandingSection'
import RoadmapSection from '../components/RoadmapSection'
import TeamSection from '../components/TeamSection'
import StackingSection from '../components/StackingSection'



export default function LandingPage() {
  return (
    <>
        <Header/>
        <LandingSection/>
        <RoadmapSection/>
        <StackingSection/>
        <TeamSection/>
        <FaqSection/>
    </>
  )
}
