/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./Post.css"
import {AiFillGithub} from "react-icons/ai"
import {
    BiLinkExternal
} from "react-icons/bi"
import Card from 'react-bootstrap/Card';
const Post = ({title,image, description, git, host, tools}) => {
  return (
      <Card className='post'>
        <Card.Img variant="top" src={image}  className='post__img'/>
        <Card.Body>
          <Card.Title className='post__title'>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Techtools: {tools}</Card.Subtitle>
          <Card.Text>
           {description}
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted post__host" >
            <a href={git} target="_blank" ><AiFillGithub /></a>
            <a href={host} target="_blank" ><BiLinkExternal /></a>
            </small>
        </Card.Footer>
      </Card>
    
  )
}

export default Post