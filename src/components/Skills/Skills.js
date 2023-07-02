import React, { useState } from 'react'
import "./Skills.css"
import {motion} from "framer-motion"
import {service} from "../../static/data"
import { skillsicon } from '../../static/data'

const Skills = () => {

  const [toggle ,setToggle] = useState(false)
  return (
    <div className='skills'id='skills'>
      <motion.div 
      inherit={{ opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      transition={{duration:1}}
      className='skills__title'>
        <h1>Skills & Service</h1>
        
      </motion.div>
        
      {
        !toggle ? ( 
        <motion.div className='skills__servicetool' >
        <div className='skills__changebtn'>
        <button onClick={()=>setToggle(!toggle)} >Skills</button>
        </div>
        <motion.div  initial={{y:-25}}
          animate={{y:-5}}
          transition={{duration:1}}
           className='skills__service'>
            {service.map((item ,index)=>{
            return(
              <div className={`skills__servicecontainer skills__sevice${index} `} key={index}>
                <div className={`skills__left`}>
                <img src={item.img} alt={item.title}/>
                </div>
                <div className={`skills__right`}>
                <h5>{item.title}</h5>
                <p>{item.services}</p>
                </div>
              </div>
            )
            })
    
            }
            </motion.div>
          </motion.div>
          ):
          (
          
         <motion.div 
      className='skills__tool' > 
       <div className='skills__backbtn'>
        <button onClick={()=>setToggle(!toggle)} >service</button>
        </div>
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

      </motion.div>
        )
      }
     


      
      </div>
  )
}

export default Skills