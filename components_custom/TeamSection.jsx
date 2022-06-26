import React, {useState} from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'
import Headline from './Headline'
import TeamMemberCard from './TeamMemberCard'

let TeamBackground = '/resources/images/stars_background.jpg'
let FounderIcon = '/resources/images/Founder.png'
let Developer1Icon = '/resources/images/Developer1.png'
let Developer2Icon = '/resources/images/Developer2.png'
let Marketing1Icon = '/resources/images/Marketing1.png'
let Marketing2Icon = '/resources/images/Marketing2.png'
let Marketing3Icon = '/resources/images/Marketing3.png'
let GraphicIcon = '/resources/images/Graphic.png'
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
                <TeamMemberCard imgSrc={FounderIcon} name={"Rares-Petru Stan"} job={"Co-Founder"} description={`CEO of a Real-Estate Development Company
                                                                                            Business Representative & Advisor
                                                                                            Computer Science Engineer keen to develop any futuristic business concept by appliying traditional as well as modern methods.`}/>
                <TeamMemberCard imgSrc={FounderIcon} name={"Cristian Chiata"} job={"Co-Founder"} description={`CEO of an IoT Company that provides software automation solutions and hardware equipment with business studies in London.
                                                                                            Co-Owner and Marketing Manager of a Horeca and Entertainment Company.`}/>
                <TeamMemberCard imgSrc={Developer2Icon} name={"Mara Culda"} job={"Development lead"} description={"UX Software Developer with strong interest in business, creative processes and blockchain with studies in Computer Science & Business."}/>
                <TeamMemberCard imgSrc={Developer1Icon} name={"Andrei Rohatin"} job={"Chief Technical Operator"} description={"Blockchain developer being on a neverending learning spree with studies in Computer Science."}/>
                <TeamMemberCard imgSrc={Marketing1Icon} name={"Eduard Toth"} job={"Marketing Manager"} description={"I believe there is more in marketing than promoting products/services. When done right, it brings people together, generates new ideas and creates astonishing communities. That is my philosophy on marketing and I have practiced it for the past 3 years."}/>
                <TeamMemberCard imgSrc={GraphicIcon} name={"Luca Stan"} job={"Graphic Designer "} description={"Designer with a great passion for emerging art and technology and fine art and engineering studies. "}/>
                <TeamMemberCard imgSrc={Developer1Icon} name={"Serban Filote"} job={"Software Developer"} description={"Developer with a zeal for innovation, cryptocurrencies and gaming with studies in Computer Science."}/>
                <TeamMemberCard imgSrc={Developer1Icon} name={"Vlad Miu"} job={"Game Development Team Lead"} description={"The worst thing a person can say about his responsibilities is that they are too hard. The worst thing a person can say about a game is that it's too easy."}/>
                <TeamMemberCard imgSrc={GraphicIcon} name={"Marko Art "} job={"Graphic Designer"} description={"Experienced artist in digital and traditional art experimenting with all forms of art that helps with self expression. It's my mission to create content you will love."}/>
                <TeamMemberCard imgSrc={Developer1Icon} name={"Ilie Tudor"} job={"FrontEnd and DevOps lead"} description={"Software Developer that has a strong interest in business, blockchain and product development with studies in Computer Science."}/>
                {showAll?
                <>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                <TeamMemberCard name={"Gigel Frone"} job={"job title"} description={"ceva descriere acilea"}/>
                </>
                :<></>}

            
            </CardsWrapper>
            <ExpandBtn onClick={()=>{setShowAll(!showAll)}}>{showAll?"Hide":"Show"} <div  className={showAll?'expanded':'collapsed'}></div></ExpandBtn>
        </TeamWrapper>
    )
}
