import { useState, useEffect } from "react";

function useWindowWidth(){

    const [width,setWidth] = useState(1)

    useEffect(()=>{

        const HandleResize = ()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", HandleResize)
        setWidth(window.innerWidth)
        return () => window.removeEventListener("resize", HandleResize)
    },[])
    useEffect(()=>{
        console.log("Aaa", width)

    },[width])

    return width;
}

export default useWindowWidth;