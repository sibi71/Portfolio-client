/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div
    className='footer' id='footer'>
      <div
       className='footer__container'>
      <div className='footer__social'>
      <a href='https://www.instagram.com/the_sibi_._' target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
        <a href='https://github.com/sibi71' target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/arunsibi-319b321a1/' target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <p className='footer__details'>copyright &copy;2023 all rights reserved | made by  <span>arunsibi</span></p>
      </div>
      </div>
  )
}

export default Footer