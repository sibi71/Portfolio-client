/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React,{useEffect} from 'react'
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

import {motion} from "framer-motion"
import Card from 'react-bootstrap/Card';
import { addToProject, getProject } from '../../slice/projectSlice';
import {useDispatch,useSelector} from "react-redux"


const Projects = () => {
   const dispatch = useDispatch();
  const projectdata= useSelector(getProject)

  useEffect(()=>{
      const q = query(collection(db,"posts"));
      onSnapshot(q,(Snapshot)=>{
        
          Snapshot.docs.map((doc)=>{
            return(
              dispatch(
                addToProject({
                    id:doc.id,
                    data:doc.data()
                })
              )
              
            )
          })
       
      })
  },[dispatch])



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
        
       
     {projectdata.map((post,index)=>{
      return(
          <>
         <SwiperSlide key={index}>
        <Card className='project_card' key={post.id}  >
        <Card.Img variant="top" src={post.data.image}  className='project__img'/>
        <Card.Body className='project__body'>
          <Card.Title className='project__title'>{post.data.title}</Card.Title>
          <a href={post.data.hosting} target="_blank" ><BiLinkExternal /></a>
        </Card.Body>
        <Card.Footer>
          <small className="card__footer " >
          <Card.Subtitle className="mb-2 project__host">Techtools: {post.data.techtools}</Card.Subtitle>
            </small>
        </Card.Footer>
        
      </Card>
        </SwiperSlide>
        </>
      )

     })

     }
       </Swiper>
       </div>
       <div className='projects__view'>
       <Link to="/projectview" className='projects__viewbtn' > view More</Link>
       </div>
       <div className='projects__contant'>
        <div className='projects__contantleft'>
         <h2>just say hi!</h2>
          <p>To be involved in work where I can utilize the skill and creativity within the system that effectively contributes to the growth of the Organization.</p>
        </div>
        <div className='projects__contantright' id="contact">
        <Link to="/contact" className='projects__contantlink' >Contact Me</Link>
        </div>
       
       </div>
      
    </div>
  )
}

export default Projects