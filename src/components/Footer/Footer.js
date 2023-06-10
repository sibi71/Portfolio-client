/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div
   id='footer' className="footer ">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

      <path fill="#273036"   fillOpacity="1" d="M0,224L13.3,202.7C26.7,181,53,139,80,122.7C106.7,107,133,117,160,138.7C186.7,160,213,192,240,181.3C266.7,171,293,117,320,80C346.7,43,373,21,400,42.7C426.7,64,453,128,480,144C506.7,160,533,128,560,122.7C586.7,117,613,139,640,133.3C666.7,128,693,96,720,106.7C746.7,117,773,171,800,186.7C826.7,203,853,181,880,165.3C906.7,149,933,139,960,149.3C986.7,160,1013,192,1040,213.3C1066.7,235,1093,245,1120,240C1146.7,235,1173,213,1200,224C1226.7,235,1253,277,1280,277.3C1306.7,277,1333,235,1360,224C1386.7,213,1413,235,1427,245.3L1440,256L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
      </svg>
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