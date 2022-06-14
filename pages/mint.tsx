import type { NextPage } from 'next';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { Box, ChakraProvider } from '@chakra-ui/react';
import styled from 'styled-components'

const MintPageWrapper  = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    background: black;
    color: white;
    padding: 0 5px;
    >div{
      position: relative;
      width: 100%;
      max-width: 400px;
      /* background: red; */
      border: 1px solid white;
      border-radius: 4px;
      padding: 50px 20px;
      box-sizing: border-box;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

`



const Mint = () => {
  
  return (
    <MintPageWrapper>
      <div>
      <ChakraProvider>
        
        <Box
        as="button"
        borderColor="elvenTools.color2.darker"
        borderWidth={2}
        bgColor="transparent"
        px={6}
        rounded="xl"
        fontWeight="normal"
        color="elvenTools.white"
        userSelect="none"
        transition="background-color .3s"
        style={{background: "white",  color: "black", borderRadius: '2px'}}
        >
        <a href="/">GO BACK</a>
        </Box>
        <MintHero />
        
      </ChakraProvider>
      </div>
    </MintPageWrapper>
  );
};

export default Mint;
