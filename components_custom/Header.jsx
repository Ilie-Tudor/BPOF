import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import theme1 from '../public/resources/colors/theme1'

const HeaderWrapper = styled.div`

    *{
        margin: 0;
        padding: 0;  
        color: ${theme1.AccentColor} 
    }
    >.placeholderHeader{
        position: relative;
        width: 100%;
        height: 60px;
    }
    >.fixedHeader{
        position: fixed;
        top: 0;
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
    }
`
        
        
        export default function Header() {
            return (
    <HeaderWrapper>
        <div className='placeholderHeader'></div>
        <div className='fixedHeader'>
            <div className='logoWrapper'>
                <h1 style={{fontSize: '150%'}}>BPOFGAMING</h1>
            </div>
            <div className='navbarWrapper'>
                <Navbar/>
            </div>
        </div>
    </HeaderWrapper>
  )
}
