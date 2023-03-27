import React,{useState} from 'react'
import "./Upload.css"
import {BiImageAdd} from "react-icons/bi"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage,db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Link} from "react-router-dom"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import {motion} from "framer-motion"


const Upload = () => {

  const [title,setTitle] = useState("")

  const [image,setImage] = useState("")

  const [description,setDescription] = useState("")

  const [git , setGit] = useState("")

  const [host,setHost] = useState("")

  const [tool,setTool] = useState("")

  const [category,setCategory] = useState("")

  const [process ,setProcess] = useState("")

const handleSubmit =(e)=>{
  e.preventDefault();
  const storageRef = ref(storage,`image/${title}`);
  const uploadTask = uploadBytesResumable(storageRef,image)
  uploadTask.on(
    "state_changed"
    ,(snapshot)=>{
      const process = Math.round(snapshot.bytesTransferred / snapshot.totalBytes)*100;
      setProcess(process);
    },
    (err)=>{
      console.log(err);
    },

    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=>{
        await addDoc(collection(db,"posts"),{
          title:title,
          image:downloadUrl,
          description:description,
          gitHub:git,
          hosting:host,
          techtools:tool,
          category:category

        })
        setHost("")
        setDescription("")
        setGit("")
        setImage("")
        setProcess(0);
        setTitle("")
        setTool("")
        setCategory("")
      }).catch((err)=>{
        console.log(err);
      })
    }
  )

};

  return (
    <motion.div 
    initial = {{opacity:0}}
    whileInView={{y:[-50,0],opacity:1}}
    transition={{duration:1}}
    className='upload'>
      <Link to="/" className='upload__back'><MdOutlineArrowBackIosNew/></Link>
       <h1>Upload Project file</h1>
      <div className='upload__container'>
        <form className='upload__form'>
           <label className='upload__file'>
            <BiImageAdd/>
           <input type="file" className='upload__inputfile'
           onChange={(e)=>setImage(e.target.files[0])}/>
           </label>
           <input type="text" placeholder='Enter Your Project Title'
           className='upload__inputtext' 
           onChange={(e)=>setTitle(e.target.value)} value={title}  />
          <textarea className="upload__inputdescription"
          rows="4" cols="50" 
          onChange={(e)=>setDescription(e.target.value)} value={description}
          placeholder='Enter Your Project description' />
           <input type="text" placeholder='Enter Your Git&GitHub link'
           className='upload__inputtext' onChange={(e)=>setGit(e.target.value)}
           value={git}/>
            <input type="text" placeholder='Enter Your hosting link'
           className='upload__inputtext' onChange={(e)=>setHost(e.target.value)}
           value={host}
           />
          <input type="text" className='upload__inputtech' 
          placeholder='Enter Your Techsused'
          onChange={(e)=>setTool(e.target.value)}
          value={tool}
          />
           <input type="text" className='upload__inputtech' 
          placeholder='Enter Project Category'
          onChange={(e)=>setCategory(e.target.value)}
          value={category}
          />
          <button type='submit' onClick={handleSubmit}>{
            process ? (
              <img src='https://i.gifer.com/ZZ5H.gif' alt=''  className='loader'/>
            ):"Submit"
          }</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Upload