import React from 'react'
import styled from 'styled-components'

import useWindowWidth from '../customHooks/useWindowWidth'


import Headline from './Headline'
import Stacking from '../resources/images/Stacking.svg'
import Stacking_small from '../resources/images/Stacking_small.svg'
import theme1 from '../resources/colors/theme1'

import StackingBackground from '../resources/images/stars_background.jpg'


const StackingWrapper = styled.div.attrs({id:"StackingSection"})`
    background: ${theme1.BackgroundColor};
    background: url(${StackingBackground});
    background-size: cover;
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
        @media screen and (max-width: 1000px){
          width: 600px;
          left: 50%;
          transform: translateX(-50%);
        }
        @media screen and (max-width: 600px){
          width: 100%;
          max-width: 320px;
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
        @media screen and (max-width: 1000px){
          top: 11%;
          flex-direction: column;
          height: auto;
          width: 230px;
          left: 50%;
          transform: translateX(-50%);
          
        }
        @media screen and (max-width: 600px){
          top: 11%;
          flex-direction: column;
          height: auto;
          width: 130px;
          left: 50%;
          transform: translateX(-50%);
          
        }
        
        >div{
          width: 19.5%;
          margin: 2.5%;
          padding: 5px;
          box-sizing: border-box;
          text-align: center;
          color: white;
          @media screen and (max-width: 1000px){
            width: 100%;
            height: 300px;
            margin-bottom: 350px;
          }
          @media screen and (max-width: 600px){
            width: 100%;
            height: 300px;
            margin-bottom: 45px;
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
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, itaque!</div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, itaque!</div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, itaque!</div>
            </div>
            {
              windowWidth>1000?
              <img src={Stacking} alt="stacking section wrapper" />
              :
              <img src={Stacking_small} alt="stacking section wrapper" />
            }
        </div>
      </Content>
    </StackingWrapper>
  )
}
