import React from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'


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
        background: blue;
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
        <div className='pictureWrapper'>poza</div>
        <div className='nameWrapper'>{name}</div>
        <div className='jobWrapper'>- {job} -</div>
        <div className='descriptionWrapper'>{description}</div>
      </CardWrapper>
  )
}
