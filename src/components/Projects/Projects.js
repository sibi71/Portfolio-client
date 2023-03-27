/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React,{useState,useEffect} from 'react'
import "./Projects.css"
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from "../../firebase"
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BiLinkExternal
} from "react-icons/bi"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from 'react-router-dom'
import {AiFillGithub} from "react-icons/ai"
import {motion} from "framer-motion"

const Projects = () => {
  const [posts,setPosts] = useState([]) 

  useEffect(()=>{
      const q = query(collection(db,"posts"));
      onSnapshot(q,(Snapshot)=>{
        setPosts(
          Snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              data:doc.data()
            }
          })
        )
      })
  },[])

  return (
    <div className='projects' id='project'>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      
      className='projects__title'>
        <span>my Work</span>
        <h1>awsome projects</h1> 
      </motion.div>
       
    <div 
    className='projects__container'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
     {posts.map((post,index)=>{
      return(
          <>
         <SwiperSlide key={index}>
          <img src={post.data.image} alt="" />
          <div className='project__details'>
            <h5>{post.data.title}</h5>
          <span>
          <a href={post.data.gitHub} target="_blank" ><AiFillGithub /></a>
           <a href={post.data.hosting} target="_blank" ><BiLinkExternal /></a>
           </span>
          </div>
        </SwiperSlide>
        </>
      )

     })

     }
       </Swiper>
       </div>
       <Link to="/projectview" className='projects__view' >view more</Link>
    </div>
  )
}

export default Projects