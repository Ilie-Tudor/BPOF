import React, {useState} from 'react'
import styled from 'styled-components'
import theme1 from '../resources/colors/theme1'


const CardWrapper = styled.div`
    width: 200px;
    position: relative;
    margin: 0px 10px 10px 10px;
    color: ${theme1.AccentColor};
    padding-bottom: 30px;
    cursor: pointer;
    >.pictureWrapper{
        position: relative;
        width: 200px;
        height: 150px;
        margin: auto;
        background: transparent;
        >img{
          position: absolute;
          width: 100%;
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
      min-height: 50px;

      /* padding-bottom: 10px; */
    }
    >.descriptionWrapper{
      text-align: center;
      padding: 0 2px;
      
      .details{
        border: 1px solid ${theme1.AccentColor};
        border-radius: 2px;
      }
    }
`

export default function TeamMemberCard({picture,name,job,description,imgSrc}) {
  const [visible, setVisible] = useState(false)
  return (
      <CardWrapper onClick={()=>{setVisible(!visible)}}>
        <div className='pictureWrapper'><img src={imgSrc} alt="Founder Icon" /></div>
        <div className='nameWrapper'>{name}</div>
        <div className='jobWrapper'>- {job} -</div>
        
        {visible?
        <div className='descriptionWrapper'>{description}</div>
        :
        <div className='descriptionWrapper'><div className='details'>Details</div></div>}
      </CardWrapper>
  )
}
