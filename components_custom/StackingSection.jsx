import React from 'react'
import styled from 'styled-components'

import useWindowWidth from '../customHooks/useWindowWidth'

import theme1 from '../resources/colors/theme1'

import Headline from './Headline'
let Stacking ='/resources/images/Stacking.svg'
let Stacking_small ='/resources/images/Stacking_small.svg'

let StackingBackground = '/resources/images/stars_background.jpg'


const StackingWrapper = styled.div.attrs({id:"StackingSection"})`
    background: ${theme1.BackgroundColor};
    background: url(${StackingBackground});
    background-size: contain;
    background-position: center;
    padding: 80px 0;
`
const Content = styled.div`
    width: 100%;
    >div{
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: auto;
      >img{
        position: relative;
        width: 100%;
        @media screen and (max-width: 1200px){
          width: 600px;
          left: 50%;
          transform: translateX(-50%);
        }
        @media screen and (max-width: 620px){
          width: 100%;
          max-width: 420px;
          box-sizing: border-box;
          left: 50%;
          transform: translateX(-50%);
        }
        @media screen and (max-width: 450px){
          width: 100%;
          max-width: 300px;
          box-sizing: border-box;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      >div{
        position: absolute;
        z-index: 5;
        top: 28%;
        left: 0;
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        @media screen and (max-width: 1200px){
          top: 12%;
          flex-direction: column;
          height: auto;
          width: 330px;
          left: 50%;
          transform: translateX(-50%);
          
        }
        @media screen and (max-width: 620px){
          top: 12%;
          flex-direction: column;
          height: auto;
          width: 230px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 80%;
        }
        @media screen and (max-width: 450px){
          top: 11%;
          flex-direction: column;
          height: auto;
          width: 190px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 80%;
        }
        
        >div{
          width: 19.5%;
          margin: 2.5%;
          padding: 5px;
          box-sizing: border-box;
          text-align: center;
          color: white;
          @media screen and (max-width: 1200px){
            width: 100%;
            height: 300px;
            margin-bottom: 550px;
          }
          @media screen and (max-width: 620px){
            width: 100%;
            height: 300px;
            margin-bottom: 270px;
          }
          @media screen and (max-width: 450px){
            width: 100%;
            height: 240px;
            margin-bottom: 168px;
          }
        }
      }
    }
`

export default function StackingSection() {
  let windowWidth = useWindowWidth();
  return (
    <StackingWrapper>
      <Headline>
          STACKING
      </Headline>
      <Content>
        <div>
            <div>
              <div>Each person will receive a 2-20% random return a week, until we reach a total of 10% return - Phase I holders</div>
              <div>Each person will receive a 2-20% random return a week, until we reach a total of 10% return - Phase II holders & 1-10% random return a week until we reach a total of 5% return - Phase I holders only; Cumulated total of 15% return.</div>
              <div>Each person will receive a 2-20% random return a week, until we reach a total of 10% return - Phase III holders & 2-20% random return a week until we reach a total of 10% return - Phase I holders only; Cumulated total of 20% return.</div>
            </div>
            {
              windowWidth>1200?
              <img src={Stacking} alt="stacking section wrapper" />
              :
              <img src={Stacking_small} alt="stacking section wrapper" />
            }
        </div>
      </Content>
    </StackingWrapper>
  )
}
