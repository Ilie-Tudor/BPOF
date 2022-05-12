import React from 'react'
import Headline from './Headline'

import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import RoadmapBox from './RoadmapBox'


const RoadmapWrapper = styled.div`
    overflow: auto;
    background: ${theme1.BackgroundColor};
    padding: 50px 0;
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
export default function RoadmapSection() {
  return (
    <RoadmapWrapper>
        <Headline>
            ROADMAP
        </Headline>


        <BoxesWrapper>
          <div>
            <RoadmapBox customStyle={{left: "10%"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa qui harum cupiditate. Voluptatum sint accusamus quasi natus quia, vero consectetur asperiores odio, dolor excepturi possimus pariatur magnam veritatis quis iste.
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "90%", transform: "translateX(-100%)"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa qui harum cupiditate. Voluptatum sint accusamus quasi natus quia, vero consectetur asperiores odio, dolor excepturi possimus pariatur magnam veritatis quis iste.
            </RoadmapBox>
            <RoadmapBox customStyle={{left: "10%"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa qui harum cupiditate. Voluptatum sint accusamus quasi natus quia, vero consectetur asperiores odio, dolor excepturi possimus pariatur magnam veritatis quis iste.
            </RoadmapBox>
          </div>
        </BoxesWrapper>
    </RoadmapWrapper>
  )
}
