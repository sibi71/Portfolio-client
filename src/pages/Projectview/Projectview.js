import React, { useEffect, useState } from 'react'
import "./Projectview.css"
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import {motion} from "framer-motion"
import { btnfilter } from '../../static/data'; 
import { useSelector } from "react-redux"
import {  getProject } from '../../slice/projectSlice';

const Projectview = () => {
  const [tap,setTap] =useState({name:"all"})
  const [active,setActive] = useState(0)
  const [work ,setWork] = useState([])
  const projectitem = useSelector(getProject)


useEffect(()=>{
  if(tap.name === "all"){
    setWork(projectitem)
  }
  else{
    const newwork = projectitem.filter((workImg)=>{
      return (
        workImg.data.category.toLowerCase() === tap.name
      )
    });
    setWork(newwork)
  }
},[ projectitem, tap]);


const activeTap = (e,index)=>{
  setTap({name:e.target.textContent.toLowerCase()})
  setActive(index)

}

  return (
    <div className='projectview'>
      <Link to="/" className='projectview__back'><MdOutlineArrowBackIosNew/></Link>
      <h1 className='projectview__title'>Project Work</h1>
      <motion.div
        initial={{y:-25}}
        animate={{y:-5}}
        transition={{duration:1}} 
        className='projectview__btn'>
      {btnfilter.map((btn,index)=>{
        return(
          <button 
          onClick={(e)=>activeTap(e,index)} key={index}
           className={`${active === index ? "active" : " "}`}>
            {btn}
            </button>
        )
      })}
      </motion.div>
      <motion.div 
      initial={{x:0,opacity:0}}
      whileInView={{x:[-250,0],opacity:1}}
      transition={{duration:1}}
      className='projectview__container'>
      {
      work.map((post,index)=>{
        return(
          <Post key={index} 
          title = {post.data.title}
          image = {post.data.image}
          description={post.data.description}
          git={post.data.gitHub}
          host={post.data.hosting}
          tools={post.data.techtools}
          
          />
        )
      })}
    </motion.div>
    </div>
  )
}

export default Projectview