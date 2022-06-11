import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'

import FounderImg from '../resources/images/team_icon_founder_1.svg'

const CardWrapper = styled.div`
    width: 200px;
    position: relative;
    margin: 0px 10px 10px 10px;
    color: ${theme1.AccentColor};
    >.pictureWrapper{
        position: relative;
        width: 150px;
        height: 150px;
        margin: auto;
        background: transparent;
        >img{
          position: absolute;
          width: 175px;
          top: 0;
          left: 50%;
          transform: translateX(-50%);          
        }
    }
    >.nameWrapper{
      text-align: center;
      padding: 0px 2px;
      font-size: 120%;
    }
    >.jobWrapper{
      text-align: center;
      padding: 0px 2px;
      color: ${theme1.SecondaryColor};
      /* padding-bottom: 10px; */
    }
    >.descriptionWrapper{
      text-align: center;
      padding: 0 2px;
      padding-bottom: 30px;

    }
`

export default function TeamMemberCard({picture,name,job,description}) {
  return (
      <CardWrapper>
        <div className='pictureWrapper'><img src={FounderImg} alt="Founder Icon" /></div>
        <div className='nameWrapper'>{name}</div>
        <div className='jobWrapper'>- {job} -</div>
        <div className='descriptionWrapper'>{description}</div>
      </CardWrapper>
  )
}
