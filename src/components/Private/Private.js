import React,{useState,useEffect} from 'react'
import "./Private.css"
import { Navigate, Outlet } from "react-router-dom"
import { useDispatch,useSelector} from "react-redux"
import { getUser, handleLogin } from "../../slice/userSlice"
const Private = () => {
    const user = useSelector(getUser)
    const [loading ,setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token && !user){
            dispatch(handleLogin(token))
        }
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    if(loading){
        return (
            <div className='private'>
                <img src='https://i.gifer.com/ZZ5H.gif' alt=''/>
            </div>
        )
    }
    if(!user){
        return<Navigate to="/login" />
    }
    return (
        <>
        <Outlet />
        </>
    
  )
}

export default Private