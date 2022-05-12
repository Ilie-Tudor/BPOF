import { useState, useEffect } from "react";





function useWindowWidth(){

    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{

        const HandleResize = ()=>{
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", HandleResize)
        return () => window.removeEventListener("resize", HandleResize)
    },[])

    return width;
}

export default useWindowWidth;