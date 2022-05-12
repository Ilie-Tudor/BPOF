import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import Headline from './Headline'
import TeamMemberCard from './TeamMemberCard'

const TeamWrapper = styled.div`
    /* overflow: auto; */
    background: ${theme1.BackgroundColor};
    padding: 50px 0;
`
const CardsWrapper = styled.div`
    padding-top: 50px;
    position: relative;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export default function TeamSection() {
  return (
    <TeamWrapper>
        <Headline>
            OUR TEAM
        </Headline>
        <CardsWrapper>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
            <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
        </CardsWrapper>
    </TeamWrapper>
  )
}
