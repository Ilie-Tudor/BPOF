import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const StackingWrapper = styled.div`
    background: black;
    color: white;
    width: 100%;
    height: 100vh;
    *{
        margin: 0;
        padding: 0;
    }
    >ul{
        position: relative;
        display: block;
        max-width: 900px;
        /* background: red; */
        margin: auto;
        top: 50%;
        transform: translateY(-50%);
        >.line{
            margin-bottom: 20px;
            border-bottom: 1px solid white;
            list-style: none;
            padding: 2px;
        }
        >.title{
            margin-bottom: 50px;
            list-style: none;
            font-size: 140%;
        }
    }
`

export default function stacking() {


    const [stackingInfo, setStackingInfo] = useState([])

    useEffect(() => {
      fetch('/stacking.json')
        .then(response=>{return response.json()})
        .then(data=>{
            setStackingInfo(data)
            console.log(data)
        })
        .catch(err=>console.log(err))
    },[])
    
    return (
        // <div onClick={()=>{console.log(stackingInfo)}}>stacking</div>

        <StackingWrapper>
            <ul>
                <li className='title'>Stacking Results</li>
                {stackingInfo.map((elem)=><li className='line' key={elem.wallet}>wallet:{elem.wallet} <br/><br/> percent:{elem.percent} &nbsp;&nbsp;today_stack:{elem.today_stack} &nbsp;&nbsp;total_stack:{elem.total_stack} </li>)}
            </ul>
        </StackingWrapper>
    )
}
