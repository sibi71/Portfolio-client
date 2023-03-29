/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, handleLogin, logout } from '../../slice/userSlice'
import { navbarlink } from '../../static/data'
import { HiMenuAlt3 ,HiX} from "react-icons/hi"
import { motion} from "framer-motion"
import Navlink from '../Navlink/Navlink'
const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [scroll ,setScroll] = useState(false)

      const user = useSelector(getUser)
      const dispatch = useDispatch();
      const navigate = useNavigate()

      useEffect(()=>{
          let token = localStorage.getItem("token")
          if(token && !user){
            dispatch(handleLogin(token))
          }
      },[])

      useEffect(()=>{
        window.addEventListener("scroll",()=>{
          setScroll(window.scrollY > 20)
        })
      },[])
      
 const login =()=>{
  if(user){
    dispatch(logout())
     
  }
  else{
    navigate("/login")
  }
}




  return (
   <motion.div 
   initial={{y:-25}}
   animate={{y:-5}}
   transition={{duration:1}}
   className={scroll ?"navbar__active":"navbar"}>
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <h1>A</h1>
      </div>
      <div className='navbar__info'>
        {
            navbarlink.map((navlink,index)=>{
              return(
                <div className='navbar__link' key={index}>
                  <a href={`#${navlink}`}  
                   className="navbar__option">{navlink}</a>
                </div>  
              )
            })
        }
        
      <div className='navbar__link'>
      <Link to="/upload" className="navbar__option" >upload</Link>
      <Link to="/login" className='navbar__login navbar__option' onClick={login}> {user? "logOut":"logIn"}</Link>
      </div>
       
      </div>
      <div className='navbar__social'>
        <a href='https://www.instagram.com/the_sibi_._' target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
        <a href='https://github.com/sibi71' target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/arunsibi-319b321a1/' target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <div className='navbar__menu'>
        <HiMenuAlt3  onClick={()=>setToggle(!toggle)}  className ="navbar__menuicon"/>
      </div>
      {
        toggle && (
          <motion.div 
          initial={{x:0,opacity:0}}
          whileInView={{x:[250,0],opacity:1}}
          transition={{duration:1 ,delay:0.1}} 
           className='navbar__menudetalls'>
        <div 
          
        className='navbar__menuitems'>
          {
            navbarlink.map((link,index)=>{
              return(
                    <Navlink link={link} key={index} setToggle={setToggle}/>            
              )
            })  
           
          }
        </div>
        <HiX className='navbar__closeicon' onClick={()=>setToggle(!toggle)} />
        </motion.div>
        )      
      }
    
    </div>
    </motion.div> 
  )
}

export default Navbar