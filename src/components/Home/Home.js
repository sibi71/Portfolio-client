import React from 'react'
import "./Home.css"
import profile from "../../img/profile.png"
import Typed from 'react-typed';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Home = () => {

  return (
      <motion.div
      initial={{y:-25,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2,delay:0.5}}
       className='home' id='home'>  

       <div className='home__container'>
        <div className='home__left'>
          <div className='home__title'>
        <h3>Hey There, I'm <span>Arunsibi</span></h3>
        <Typed  className='home__jobtitle'
         loop
         typeSpeed={70}
         backSpeed={30}
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
        <p>i design beautiful simple things, And i love what I do !</p>
        <Link
        to="/contact" className='home__contact'>contact with me </Link>
        </div>

        <div className='home__right'>
        <div 
         className='home__img'>
        <img src={profile} alt="proflie" />
       </div>
       <motion.div 
          animate={{
            x: [0,20],          
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0.4, 0.8, 1, 1.5, 2],
              repeat: Infinity,
              repeatDelay: 1
            }}
        className='web job'>web Developer</motion.div>
        <motion.div 
        animate={{
          x: [0,-20],          
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.2, 0.4, 0.8, 1, 1.5],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className='full job'>Full Stack Developer</motion.div>
           <motion.div 
        animate={{
          x: [0,20],          
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.2, 0.4, 0.8, 1, 1.5],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className='react job'>React Developer</motion.div>
          <motion.div 
        animate={{
          x: [0,-20],          
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.4, 0.8, 1, 1.5, 2],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className='mern job'>MERN Stack Developer</motion.div>
        
        
        </div>
        </div>
       
       
        
      
      </motion.div>
  )
}

export default Home