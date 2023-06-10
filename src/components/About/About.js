/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./About.css"
import hero  from "../../img/Mind map-pana.png"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className='about' id='about'>
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