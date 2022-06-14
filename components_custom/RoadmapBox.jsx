import React from 'react'
import styled from 'styled-components'
let RoadmapBoxBackgroud = '/resources/images/Quarters.svg'
let RoadmapBoxBackgroudSmall = '/resources/images/Quarters_small.svg'
let Videosrc = '/resources/videos/ceva.mp4'

const BoxWrapper = styled.div`
    position: relative;
    color: white;
    background: #999;
    max-width: 600px;
    height: 600px;
    box-sizing: border-box;
    background: url(${RoadmapBoxBackgroud}) no-repeat center;
    @media screen and (max-width: 1200px){
      margin-bottom: 250px;
    }
    @media screen and (max-width: 550px){
      background: url(${RoadmapBoxBackgroudSmall}) no-repeat center;
      max-width: 300px;
      height: 650px;
    }
    background-origin: content-box;
    background-size: contain;
    >div{
        position: relative;
        width: 60%;
        @media screen and (max-width: 550px){
          top: 55%;
        }
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 5px;
        text-align: center;
        box-sizing: border-box;
    }
    >span{
      position: absolute;
      bottom: 22px;
      color: white;
      left: 50%;
      transform: translateX(-50%);
      font-size: 120%;
    }
    >.roadmapVideo{
        position: absolute;
        /* right: 32%; */
        /* left: 132%; */
        width: 600px;
        top: 57%;
        transform: translate(-50%,-50%);
        
        @media screen and (max-width: 1400px){
          width: 500px;
        }
        
        @media screen and (max-width: 1200px){
          top: 100%;
          left: 50%;
          width: 450px;
          transform: translate(-50%, 0%);
        }
        @media screen and (max-width: 550px){
          top: 100%;
          left: 50%;
          width: 300px;
        }

    }
    >#left{
      right: 60%;
      @media screen and (max-width: 1420px){
        right: 50%;
      }
      @media screen and (max-width: 1300px){
        right: 36%;
      }
    }
    >#right{
      left: 160%;
      @media screen and (max-width: 1420px){
        left: 150%;
      }
      @media screen and (max-width: 1300px){
        left: 136%;
      }
    }

`

export default function RoadmapBox({children, customStyle, videoPosition, videoSrc, quarterNumber}) {

  
  return (
      <BoxWrapper style={customStyle}>
          <div>
            {children}
          </div>
          <span>STAGE {quarterNumber}</span>
          {videoPosition=="right"?
          <video className='roadmapVideo' id="right" autoPlay loop  muted >
              <source src={Videosrc} type="video/mp4" />
          </video>
          :(videoPosition=="left"?
          <video className='roadmapVideo' id="left" autoPlay loop  muted >
              <source src={Videosrc} type="video/mp4" />
          </video>
          :
          <video className='roadmapVideo' autoPlay loop  muted >
              <source src={Videosrc} type="video/mp4" />
          </video>)}
      </BoxWrapper>
  )
}
