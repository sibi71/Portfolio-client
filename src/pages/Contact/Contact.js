/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Contact.css"
import {ImLocation} from "react-icons/im"
import {SiMinutemailer} from "react-icons/si"
import { IoCallSharp } from "react-icons/io5"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
const Contact = () => {
  return (
    <div className='contact'>
      <motion.div 
      initial = {{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      className='contact__title'>
      <span>get in touch</span>
      <h1>contact me</h1>
      </motion.div>
      <div className='contact__container'>
        <motion.div 
        initial={{x:0,opacity:0}}
        whileInView={{x:[-250,0],opacity:1}}
        transition={{duration:1}}
        className='contact__left'>
          <h2>just say hi!</h2>
          <p>To be involved in work where I can utilize the skill and creativity within the system that effectively contributes to the growth of the Organization.</p>
          <div className='contact__details'>
            <p>
              <ImLocation />
             <span>Thogaimalai,karur-621313</span> 

            </p>
            <p>
              <SiMinutemailer />
              <span>Thearunsibi@gmail.com</span>
            </p>
            <p>
              <IoCallSharp />
              <span>+7904613995</span>  
            </p>
            
          </div>
          <div className='contact__media'>
          <a href='https://www.instagram.com/the_sibi_._' target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
        <a href='https://github.com/sibi71' target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/arunsibi-319b321a1/' target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
        <Link to="/" className='conatactback__home'>Back</Link>
          </div>
        </motion.div>
        <motion.div 
        initial={{x:0,opacity:0}}
        whileInView={{x:[250,0],opacity:1}}
        transition={{duration:1}}
        className='contact__right'>
          <h2>get in touch</h2>
          <form>
          <input type="text" placeholder='Enter Your Name'
          />
          <input type="number" placeholder='Enter Your Phone'
          />
           <input type="email" placeholder='Enter Your Email'
          />
          <textarea className="contact__message"
          rows="4" cols="50" 
          placeholder='message' />
          <button type='submit'>send</button>
          </form>
        </motion.div>
      </div>
     

    </div>
  )
}

export default Contact