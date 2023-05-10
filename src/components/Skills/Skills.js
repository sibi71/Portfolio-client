import React from 'react'
import "./Skills.css"
import { skillsicon } from '../../static/data'
import {motion} from "framer-motion"
const Skills = () => {
  return (
    <div className='skills'id='skills'>
      <motion.div 
      inherit={{ opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      transition={{duration:1}}
      className='skills__title'>
        <h1>Skills & Service</h1>
      </motion.div>
      <motion.div 
      inherit={{ opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      transition={{duration:1,delay:0.5}}
      className='skills__details'>  
        {
            skillsicon.map((icon,index)=>{
              return(
                <div 
                className='skills__icons' key={index}>
                  <img src={icon} alt="" />
                </div>
              )
            })
        }

      </motion.div>


      
      </div>
  )
}

export default Skills