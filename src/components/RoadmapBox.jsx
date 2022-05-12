import React from 'react'
import styled from 'styled-components'
import RoadmapBoxBackgroud from '../resources/images/Quarters.svg'


const BoxWrapper = styled.div`
    position: relative;
    color: white;
    background: #999;
    max-width: 600px;
    height: 600px;
    /* border: 1px solid white; */
    box-sizing: border-box;
    background: url(${RoadmapBoxBackgroud}) no-repeat center;
    background-origin: content-box;
    background-size: contain;
    >div{
        position: relative;
        /* border: 1px solid white; */
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 5px;
        text-align: center;
    }
`

export default function RoadmapBox({children, customStyle}) {
  return (
      <BoxWrapper style={customStyle}>
          <div>
            {children}
          </div>
      </BoxWrapper>
  )
}
