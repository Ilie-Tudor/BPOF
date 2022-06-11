import React, {useState} from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import Headline from './Headline'
import TeamMemberCard from './TeamMemberCard'

import TeamBackground from '../resources/images/stars_background.jpg'


const TeamWrapper = styled.div.attrs({id:"TeamSection"})`
    /* overflow: auto; */
    background: ${theme1.BackgroundColor};
    /* background: url(${TeamBackground});
    background-size: cover;
    background-position: center; */
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

const ExpandBtn = styled.button`
    position: relative;
    display: block;
    margin: auto;
    width: 150px;
    height: 30px;
    background: ${theme1.AccentColor};
    padding-top: 0;
    :hover{
        cursor: pointer;
        background: ${theme1.SecondaryColor};
        >div{
            background: ${theme1.SecondaryColor};

        }
    }
    >div{
        position: absolute;
        width: 100%;
        height: 30px;
        background: ${theme1.AccentColor};
    }
    >.expanded{  
        bottom: 98%;
        left: 50%;
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
        transform: translateX(-50%);
    }
    >.collapsed{
        top: 100%;
        left: 50%;
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
        transform: translateX(-50%) rotate(180deg);
    }
`


export default function TeamSection() {

    const [showAll, setShowAll] = useState(false)
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
            
                
                {showAll?
                <>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                </>
                :<></>}

            
            </CardsWrapper>
            <ExpandBtn onClick={()=>{setShowAll(!showAll)}}>{showAll?"Hide entire team":"Show entire team"} <div  className={showAll?'expanded':'collapsed'}></div></ExpandBtn>
        </TeamWrapper>
    )
}
