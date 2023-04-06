import React from 'react'
import "./Home.css"
import profile from "../../img/profile-pic.png"
import Typed from 'react-typed';
import { motion } from "framer-motion"
const Home = () => {

 

  return (
      <motion.div

      initial={{y:-25,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2,delay:0.5}}
       className='home' id='home'>  

       <div className='home__container'>
        <motion.div 
           
         
       
          className='home__img'>
        <img src={profile} alt="proflie" />
        </motion.div>
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
          animate={{
          y: [0,-15],          
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
         
       
        href="#contact" className='home__contact'>contact with me </motion.a>
        <motion.div 
          animate={{
            x: [0,20],          
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
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
            times: [0.1, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className='full job'>MERN Stack Developer</motion.div>
       </div>
      </motion.div>
  )
}

export default Home