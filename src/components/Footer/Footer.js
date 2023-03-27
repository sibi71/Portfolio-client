/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <div
    className='footer' id='footer'>
      <motion.div
       initial = {{opacity:0}}
       whileInView={{y:[50,0],opacity:1}}
       transition={{duration:1}}
       className='footer__container'>
      <div className='footer__social'>
      <a href='https://www.instagram.com/the_sibi_._' target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
        <a href='https://github.com/sibi71' target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/arunsibi-319b321a1/' target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <p className='footer__details'>copyright &copy;2023 all rights reserved | made by  <span>arunsibi</span></p>
      </motion.div>
      </div>
  )
}

export default Footer