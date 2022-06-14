import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'

const QuestionWrapper = styled.div`
    position: relative;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    padding: 10px 2px;
    padding-top: 0;
    box-sizing: border-box;
    margin: auto;
    >.questionWrapper{
        color: ${theme1.SecondaryColor};
        font-size: 140%;
        padding-bottom: 10px;
    }
    >.answearWrapper{
        color: ${theme1.AccentColor};
        font-size: 110%;

    }
`

export default function QuestionBox({question, answear}) {
  return (
    <QuestionWrapper>
        <div className='questionWrapper'>{question}</div>
        <div className='answearWrapper'>{answear}</div>
    </QuestionWrapper>
  )
}
