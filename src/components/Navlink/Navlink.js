import React from 'react'
import "./Navlink.css"

const Navlink = ({title,icon,index ,setToggle}) => {
   
  return (
    <div 
   
    className='navlink' key={index} onClick={prev=>setToggle(!prev)}>
              {icon}
            <a href={`#${title}`} className="navlink__option" >{title}</a> 
    </div>
  )
}

export default Navlink