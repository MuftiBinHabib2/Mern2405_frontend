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
          dispatch(userInfo(res.data.data))
        }).catch((err)=>{
          console.log(err)
        })
    },[])
  return (
    <div>{children}</div>
  )
}

export default VerifyUser