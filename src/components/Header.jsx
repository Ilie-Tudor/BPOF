import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import theme1 from '../resources/colors/theme1'

const HeaderWrapper = styled.div`

    *{
        margin: 0;
        padding: 0;  
        color: ${theme1.AccentColor} 
    }
    position: relative;
    z-index: 99;
    width: 100%;
    height: 60px;
    background: ${theme1.BackgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.logoWrapper{
        position: relative;
        display: inline-block;
        padding-bottom: 2px;
        padding-left: 10px;
    }
    >.navbarWrapper{
        padding-right: 10px;
    }
`


export default function Header() {
  return (
    <HeaderWrapper>
        <div className='logoWrapper'>
            <h1>BPOFGAMING</h1>
        </div>
        <div className='navbarWrapper'>
            <Navbar/>
        </div>
    </HeaderWrapper>
  )
}
