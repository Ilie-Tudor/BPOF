import React, { Children } from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import HeadlineBackgroud from '../resources/images/Headline.svg'


const HeadlineWrapper = styled.div`
    position: relative;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #999;
    margin: 0px auto;
    box-sizing: border-box;
    background: url(${HeadlineBackgroud}) no-repeat center;
    background-origin: content-box;
    background-size: contain;
    >div{
        margin: 0 30px;
        padding-bottom: 12px;
        padding-top: 10px;
        font-size: 30px;
        color: ${theme1.AccentColor};
    }
`

export default function Headline({children}) {
  return (
    <HeadlineWrapper>
        <div>
            {children}
        </div>
    </HeadlineWrapper>
  )
}
