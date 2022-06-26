import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'

let LitePaper = '/resources/documents/Lite_Paper.pdf'


const FooterWrapper = styled.div`
    position: relative;
    width: 100%;
    background: ${theme1.SecondaryColor}; /* Old browsers */
    background: -moz-linear-gradient(top, ${theme1.SecondaryColor} 0%, ${theme1.BackgroundColor} 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, ${theme1.SecondaryColor} 0%,${theme1.BackgroundColor} 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, ${theme1.SecondaryColor} 0%,${theme1.BackgroundColor} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${theme1.SecondaryColor}', endColorstr='#fc0000',GradientType=0 ); /* IE6-9 */
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 120%;
    color: ${theme1.AccentColor};
    >div{
        margin: 10px 30px;
    }
    a{
        text-decoration: none;
        color: ${theme1.AccentColor};
        :hover{
            cursor: pointer;
            color: ${theme1.HoverColor};
        }
    }
`


export default function Footer() {
  return (
    <FooterWrapper>
        <div className='whitepaperWrapper'>
            <a href={LitePaper}>LITEPAPER</a>
        </div>
        <div className='copyrightWrapper'>
            <div>&copy; BPOF 2022 ALL RIGHTS RESERVED</div> 
        </div>
    </FooterWrapper>
  )
}
