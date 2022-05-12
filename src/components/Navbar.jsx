import React, { useState } from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import useWindowWidth from '../customHooks/useWindowWidth'


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
                        color: gray;
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
                        color: gray;
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
        top: 0;
        left: 0;
        background: ${theme1.BackgroundColor};
        padding: 10px;
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

    }
`

const NavbarContent = ({initialVisibility})=>{

    const [visible,setVisible] = useState(initialVisibility);


    return (
        <>
        {visible?
        <div className='contentWrapper'>
                <ul>
                    <li><a href='ceva'>ROADMAP</a></li>
                    <li><a href='ceva'>STACKING</a></li>
                    <li><a href='ceva'>OUR TEAM</a></li>
                    <li><a href='ceva'>FAQ</a></li>
                    <li className='contrastingButton'><a href='ceva'>CONNECT A WALLET</a></li>
                </ul>
        </div>:<></>}
        <div className='buttonWrapper'>
            <button onClick={()=>{setVisible(!visible)}}>buton</button>
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
