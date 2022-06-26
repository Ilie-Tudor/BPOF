import React from 'react'
import useWindowWidth from '../customHooks/useWindowWidth'
import Headline from './Headline'

import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import RoadmapBox from './RoadmapBox'

let RoadmapBackground = '/resources/images/stars_background.jpg'


const RoadmapWrapper = styled.div.attrs({id:"RoadmapSection"})`
    overflow: auto;
    background: ${theme1.BackgroundColor};
    background: url(${RoadmapBackground}) ${theme1.BackgroundColor};
    background-position: center;
    background-size: contain;
    padding: 80px 0;
`
const BoxesWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    >div{
      position: relative;
      width: 100%;
      
    }
`

const Q1_content = ()=>{
  return (
    <>
      <h3>Welcome to the <br/> Future of Gaming</h3>
      <div>
        <p>Q1</p>
        <div>1. Team onboarding</div>
        <div>2. Creating the Play Ground</div>
      </div>
      <div>
        <p>Q2</p>
        <div>1. Initiate the future community</div>
        <div>2. Ready Player One</div>
      </div>
    </>
  )
}
const Q2_content = ()=>{
  return (
    <>
      <h3>Mint of the <br/> Future Makers</h3>
      <div>
        <p>Q3</p>
        <div>1. exclusive 5555 BPoF Pass Launch</div>
        <div>2. Collaboration Fot The Future</div>
        <div>3. Road To Future 7777 NFT Collection</div>
      </div>
      
    </>
  )
}
const Q3_content = ()=>{
  return (
    <>
      <h3>Let The <br/> Games Begin</h3>
      <div>
        <p>Q4</p>
        <div>1. Official Beta Game Launch</div>
        <div>2. The market opens its doors</div>
        <div>3. Mint to the Space 9999 NFT Collection</div>
      </div>
    </>
  )
}
const Q4_content = ()=>{
  return (
    <>
      <h3>An Ecosystem<br/> For The Future</h3>
      <div>
        <p>Integrate all ptojects in the shared Metaverse</p>
        <p>2023 - and forward</p>
      </div>
    </>
  )
}


export default function RoadmapSection() {
  let windowWidth = useWindowWidth();

  return (
    <RoadmapWrapper>
        <Headline>
            ROADMAP
        </Headline>



        {windowWidth>1200?
        <BoxesWrapper>
          <div>
            <RoadmapBox customStyle={{left: "10%"}} videoPosition="right" quarterNumber="1" videoSrc='/resources/videos/1.mp4'>
                <Q1_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "90%", transform: "translateX(-100%)"}} videoPosition="left" quarterNumber="2" videoSrc='/resources/videos/2.mp4'>
                <Q2_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "10%"}} videoPosition="right" quarterNumber="3"  videoSrc='/resources/videos/3.mp4'>
                <Q3_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "90%", transform: "translateX(-100%)"}} videoPosition="none" quarterNumber="4" videoSrc=''>
                <Q4_content/>
            </RoadmapBox>
            
          </div>
        </BoxesWrapper>
        :
        <BoxesWrapper>
          <div>
            <RoadmapBox customStyle={{left: "50%",transform: "translateX(-50%)"}} quarterNumber="1"  videoSrc='/resources/videos/1.mp4'>
              <Q1_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "50%", transform: "translateX(-50%)"}} quarterNumber="2"  videoSrc='/resources/videos/2.mp4'>
              <Q2_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "50%", transform: "translateX(-50%)"}} quarterNumber="3" videoSrc='/resources/videos/3.mp4'>
              <Q3_content/>
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "50%", transform: "translateX(-50%)"}} quarterNumber="4"  videoSrc='' videoPosition="none">
              <Q4_content/>
            </RoadmapBox>
          </div>
        </BoxesWrapper>}
        
    </RoadmapWrapper>
  )
}
