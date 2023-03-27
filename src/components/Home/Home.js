import React from 'react'
import "./Home.css"
import profile from "../../img/5484597.jpg"
import Typed from 'react-typed';
import { motion } from "framer-motion"
const Home = () => {

  const moveVariants = {
    animation:{
      y:[0, -15],
      transition:{
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      }
    }
  }

  return (
      <motion.div
      initial={{y:-25,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2,delay:0.5}}

       className='home' id='home'>  
       <div className='home__container'>
        <div className='home__img'>
        <img src={profile} alt="proflie" />
        </div>
        <div className='home__info'>
            <h3>Hey There, I'm <span>Arunsibi</span></h3>
        
        <div className='home__job'>
        <Typed  className='home__jobtitle'
         loop
         typeSpeed={70}
         backSpeed={20}
         strings={["Web Developer", "MERN Stack Developer", "Full Stack Developer"]}
         smartBackspace
         shuffle={false}
         backDelay={1}
         fadeOut={false}
         fadeOutDelay={200}
         loopCount={0}
         showCursor
         cursorChar="|"/>
        </div>
        <div className='home__details'>
          <p>i design beautiful simple things, And i love what I do !</p>
        </div>
        </div>
        <motion.a 
        variants={moveVariants}
        animate="animation"
        whileHover={{scale:1.1}}
        transition={{duration:0.3}}
        
        href="#contact" className='home__contact'>contact with me </motion.a>
        <div className='web job'>web Developer</div>
        <div className='full job'>MERN Stack Developer</div>
       </div>
      </motion.div>
  )
}

export default Home