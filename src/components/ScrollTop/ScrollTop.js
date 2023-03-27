import React, { useEffect, useState } from 'react'
import "./ScrollTop.css"
import { BiChevronUp } from 'react-icons/bi' 
import {motion} from "framer-motion"
const ScrollTop = () => {

    const [ display ,setDispaly] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setDispaly(window.scrollY > 300)
        })
       
    },[])
  return (
    <>
        {display && (
            <motion.div 
            initial={{y:-15,opacity:0}}
             animate={{y:0,opacity:1}}
            transition={{duration:2,delay:0.5}}
             className='scroll'>
                <a href='#home' ><BiChevronUp /></a>
                
            </motion.div>
        )
    }</>
  )
}

export default ScrollTop