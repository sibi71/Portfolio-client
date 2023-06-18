/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./About.css"
import hero  from "../../img/Mind map-pana.png"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className='about' id='about'>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='about__wave'>
          <path fill="#fff" fill-opacity="1" d="M0,288L24,240C48,192,96,96,144,90.7C192,85,240,171,288,181.3C336,192,384,128,432,117.3C480,107,528,149,576,149.3C624,149,672,107,720,122.7C768,139,816,213,864,218.7C912,224,960,160,1008,149.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,192C1344,160,1392,96,1416,64L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
          </svg>
      <motion.div 

      initial ={{opacity:0}}
      whileInView = {{y:[-50,0],opacity:1}}
      className='about__title'>

        <h1>About Me</h1>
        </motion.div>
        <motion.div 
         initial ={{opacity:0}}
         whileInView = {{y:[-50,0],opacity:1}}
         animate={{y:0,opacity:1}}
         transition={{duration:2,delay:0.5}}
         className='about__container'>
          <motion.div
           className='about__left'>
            <motion.img 
           
            src={hero} alt="" />
          </motion.div>
            <motion.div 
            
            className='about__right'>
              <p>
              A passion for web development,
               I am eager to start my career as a MERN stack developer.
                I am proficient in using React, Node.js, Express, and MongoDB to 
              develop efficient and user-friendly web applications.
              </p>
              <span><i className="fa-solid fa-user"></i> Arunsibi</span>
              <span><i className="fa-solid fa-phone"></i> +7904613995</span>
              <span><i className="fa-solid fa-paper-plane"></i> thearunsibi@gmail.com</span>
              <motion.a
               whileHover={{scale:1.1}}
               transition={{duration:0.3}} 
               href='https://drive.google.com/file/d/1ygyKlIIMIHGmMaFBVN0Eh3nofcMoovFs/view?usp=share_link' target="_blank">
                download resume
              </motion.a>

            </motion.div>
        </motion.div>
    </div>
    
  )
}

export default About