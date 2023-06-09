import React, { useState } from 'react'
import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "../../axios"
import { useDispatch } from "react-redux"
import {  handleLogin } from '../../slice/userSlice';
import { BiArrowBack } from "react-icons/bi"
import logo from "../../img/profile-pic.png"

const Login = () => {
    const [email , setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [msg ,setMsg] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async(e)=>{
        e.preventDefault();
          await axios.post("/user/login",{
            email,
            password,}).then((res)=>{
              setMsg(res.data.msg)
              if(!res.data.token){
                navigate("/login") 
              }
              else{
                localStorage.setItem("token",res.data.token )
                dispatch(handleLogin(res.data.token))
                navigate("/")
              }
              
             
            }).catch((err)=>{
                  console.log(err);
                  
            })
 
    }
  return (
    <div className='login'>
        <h1>Admin Only</h1>
        <div className='login__container'>
        <Link to="/" className='login__back'><BiArrowBack /></Link>
          <p className='login__errmsg'>
            {msg}
          </p>
            <img src={logo} alt=""/>

        <form>
        <h5>E-mail :</h5>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your Email"
        />
        <h5>password :</h5>
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password"

        />
        <button className='login__Button' onClick={login}>
          Login</button>
      </form>
     
        </div>
    </div>
  )
}

export default Login