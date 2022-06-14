import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme1 from '../public/resources/colors/theme1'
import useWindowWidth from '../customHooks/useWindowWidth'
import menuIcon from '../public/resources/images/menu_icon.svg'
import closeIcon from '../public/resources/images/close_icon.svg'
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';
import { ChakraProvider } from '@chakra-ui/react';

const NavbarWrapperAbove900 = styled.div`
    position: relative;
    width: 100%;
    display: flex;

    >.buttonWrapper{
        margin-left: 10px;
        display: none;
    }
    >.contentWrapper{
        >ul{
            position: relative;
            display: flex;
            >li{
                list-style: none;
                margin-left: 25px;
                >a{
                    text-decoration: none;
                    color: ${theme1.AccentColor};
                    padding: 15px 0;
                    :hover{
                        color: ${theme1.HoverColor};
                    }
                }
            }
            >.contrastingButton{
                >a{
                    background: ${theme1.AccentColor};
                    color: black;
                    padding: 5px 15px;
                    border-radius: 2px;
                    :hover{
                        color: ${theme1.HoverColor};
                    }
                }
            }
        }
    }
`
const NavbarWrapperBelow900 = styled.div`
    position: relative;
    width: 100%;
    display: flex;

    >.buttonWrapper{
        margin-left: 10px;
    }
    >.contentWrapper{
        position: fixed;
        width: 300px;
        height: 100vh;
        top: 0px;
        right: 0;
        background: ${theme1.BackgroundColor};
        padding: 10px;
        padding-top: 100px;
        box-sizing: border-box;
        >ul{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            >li{
                list-style: none;
                margin-top: 20px;
                >a{
                    text-decoration: none;
                    color: ${theme1.AccentColor};
                    :hover{
                        color: gray;
                    }
                }
            }
            >.contrastingButton{

                >a{
                    background: ${theme1.AccentColor};
                    color: ${theme1.BackgroundColor};
                    padding: 5px 15px;
                    border-radius: 2px;
                    :hover{
                        color: gray;
                    }
                }
            }
        }
    }
    >.buttonWrapper{
        z-index: 5;
        @keyframes menu_animation {
            0% {transform: rotate(0deg)}
            25% {transform: rotate(7deg)}
            50% {transform: rotate(-7deg)}
            100% {transform: rotate(0deg)}
        }
        >button{
            background: none;
            border: none;
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            >img{
                width: 100%;
            }
            :hover{
                animation: menu_animation;
                animation-duration: 0.8s;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;


                cursor: pointer;
            }
        }
    }
`

const NavbarContent = ({initialVisibility})=>{
    // useElrondNetworkSync();

    const windowWidth  = useWindowWidth();
    
    const [visible,setVisible] = useState(initialVisibility);

    useEffect(()=>{
        const f = (e)=>{
            if(e.target.classList.contains("link") && windowWidth<=900){
                console.log(e.target.classList);
                console.log(windowWidth);
                console.log(first.current)
                setVisible(false);
            }
        }
        document.addEventListener("click",f);
        return ()=>{document.removeEventListener("click",f)}
    },[windowWidth])
    

    return (
        <>
        {visible?
        <div className='contentWrapper' >
                <ul>
                    <li><a href='/#RoadmapSection' className='link'>ROADMAP</a></li>
                    <li><a href='/#StackingSection' className='link'>STACKING</a></li>
                    <li><a href='/#TeamSection' className='link'>OUR TEAM</a></li>
                    <li><a href='/#FaqSection' className='link'>FAQ</a></li>
                    <li><a href='/stacking' className='link'>TODAY RESULTS</a></li>
                    <li className='contrastingButton'>
                        <ChakraProvider>
                            <HeaderMenuButtons enabled={['auth', 'about']} />
                        </ChakraProvider></li>
                </ul>
        </div>:<></>}
        <div className='buttonWrapper'>
            <button onClick={()=>{setVisible(!visible)}}>{visible?<img src='/resources/images/close_icon.svg'/>:<img src='/resources/images/menu_icon.svg'/>}</button>
        </div>
        </>
    )
}



export default function Navbar() {
    
    const windowWidth  = useWindowWidth();


    if(windowWidth>900)
        return (
            <NavbarWrapperAbove900>
                <NavbarContent initialVisibility={true}/>
            </NavbarWrapperAbove900>
        )
    else
        return (
            <NavbarWrapperBelow900>
                <NavbarContent initialVisibility={false}/>
            </NavbarWrapperBelow900>
        )
}
