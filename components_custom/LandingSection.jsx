import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'

let instagramLogo = "/resources/images/instagram.svg"
let twitterLogo  = "/resources/images/twitter.svg"
let telegramLogo  = "/resources/images/telegram.svg"
let discordLogo  = "/resources/images/discord.svg"
let bpof_logo  = "/resources/images/BPOF_logo.svg"
let LandingBackground  = '/resources/images/landing_background_small.jpg'

const LandingWrapper =  styled.div.attrs({id:"LandingSection"})`
    *{
        margin: 0;
        padding: 0;
    }
    position: relative;
    width: 100%;
    height: 800px;
    background: url(${LandingBackground});
    background-size: cover;
    background-position: center;
    >.mintButton{
        position: absolute;
        top: 30px;
        left: 30px;
        padding: 5px 15px;
        background: ${theme1.AccentColor};
        font-size: 25px;
        color: ${theme1.BackgroundColor};
        @media screen and (max-width: 500px){
            left: 50%;
            transform: translateX(-50%);
        }
    }
    >.landingText{
        position: relative;
        top:  50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-width: 300px;
        color: ${theme1.AccentColor};
        div:nth-child(1){
            width: 100%;
            text-align: center;
            font-size: 40px;
            font-weight: 1000;
            letter-spacing: 10px;
            >img{
                width: 100%;
            } 
        }
        div:nth-child(2){
            width: 100%;
            text-align: center;
            font-size: 25px;
            margin-top: 10px;
            word-spacing: 10px;
            letter-spacing: 3px;
        }
    }
    >.socialBar{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        color: ${theme1.AccentColor};
        >div{
            display: inline-block;
            writing-mode: vertical-rl;
            text-orientation: upright;
            margin-right: 9px;
        }
        >ul{
            list-style: none;
            margin-top: 30px;
            >li{
                text-align: center;
                >a{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    >img{
                        width: 100%;
                    }
                }
            }
        }



        @media screen and (max-width: 500px){
            top: 85%;
            left: 50%;
            justify-content: center;
            align-items: center;
            width: 100%;
            transform: translate(-50%,0);
            >div{
                writing-mode: horizontal-tb;
                margin-right: 0px;
                margin-bottom: 10px;
            }
            >ul{
                display: flex;
                justify-content: start;
                margin-top: 0px;
                >li{
                    text-align: center;
                    margin: 0 5px;
                    >a{
                        display: inline-block;
                        width: 40px;
                        >img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`


export default function LandingSection() {
  return (
    <LandingWrapper>
        <div  className='mintButton'>
            
            <a href="/mint"><div>MINT</div></a>
        </div>

        <div className='landingText'>
            <div><img src={bpof_logo} alt="bpof logo" /></div>
            <div>be part of the future gaming</div>
        </div>

        <div className='socialBar'>
            <div>FIND US ON</div>
            <ul>
                <li><a href="https://discord.com/"><img src={discordLogo} alt="discord logo" /></a></li>
                <li><a href="https://discord.com/"><img src={instagramLogo} alt="instagram logo" /></a></li>
                <li><a href="https://discord.com/"><img src={telegramLogo} alt="telegram logo" /></a></li>
                <li><a href="https://discord.com/"><img src={twitterLogo} alt="twitter logo" /></a></li>
            </ul>
        </div>
    </LandingWrapper>
  )
}
