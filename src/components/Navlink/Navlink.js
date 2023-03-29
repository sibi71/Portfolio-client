import React from 'react'
import "./Navlink.css"

const Navlink = ({link,index ,setToggle}) => {
   
  return (
    <div 
   
    className='navlink' key={index} onClick={prev=>setToggle(!prev)}>
            <a href={`#${link}`} className="navlink__option" >{link}</a> 
    </div>
  )
}

export default Navlink