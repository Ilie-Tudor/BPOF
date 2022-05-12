import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import Headline from './Headline'
import QuestionBox from './QuestionBox'

const FaqWrapper = styled.div`
    position: relative;
    background: ${theme1.BackgroundColor};
    padding: 50px 0;
    
`
const QuestionsWrapper = styled.div`
    padding-top: 50px;
`

export default function FaqSection() {
  return (
    <FaqWrapper>
        <Headline>
            FAQ
        </Headline>
        <QuestionsWrapper>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
            <QuestionBox question={"1. When can i start minting?"} answear = {"The date for the upcoming mint is available when pushing the mint button at the top of the page."}/>
        </QuestionsWrapper>
    </FaqWrapper>
  )
}
