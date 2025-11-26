"use client"

import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const VerifyUser = ({children}) => {
  let dispatch = useDispatch()


  let token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{

        axios.get(`${process.env.SERVER_URL}/auth/verifyuser`,{
          headers: {"token" : token}
        }).then((res)=>{
          console.log(res )
        
          localStorage.setItem("token",JSON.stringify(res.data.token))
        })
    },[])
  return (
    <div>{children}</div>
  )
}

export default VerifyUser