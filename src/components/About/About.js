/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./About.css"
import hero from "../../img/5484597.jpg"
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
        <div className='about__container'>
          <motion.div
          initial={{x:0,opacity:0}}
          whileInView={{x:[-250,0],opacity:1}}
          transition={{duration:1}}
           className='about__left'>
            <img src={hero} alt="" />
          </motion.div>
            <motion.div 
            initial={{x:0,opacity:0}}
            whileInView={{x:[250,0],opacity:1}}
            transition={{duration:1}}
            className='about__right'>
              <p>
              A passion for web development,
               I am eager to start my career as a MERN stack developer.
                I am proficient in using React, Node.js, Express, and MongoDB to 
              develop efficient and user-friendly web applications.
              </p>
              <span><i class="fa-solid fa-user"></i> Arunsibi</span>
              <span><i class="fa-solid fa-phone"></i> +7904613995</span>
              <span><i class="fa-solid fa-paper-plane"></i> thearunsibi@gmail.com</span>
              <motion.a
               whileHover={{scale:1.1}}
               transition={{duration:0.3}} 
               href='https://drive.google.com/file/d/1n7Q6o4UfRCl4kz7KJPMTT9aX-PsJ-2rh/view?usp=share_link' target="_blank">
                download resume
              </motion.a>

            </motion.div>
        </div>
    </div>
  )
}

export default About