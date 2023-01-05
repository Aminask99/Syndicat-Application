import React from 'react'
import { Navigate, Outlet } from "react-router"
import SignIn from "./login/Login"

const adminAuth = ()=>{
    const  user = {loggedIn:false}
    return user && user.loggedIn
}
 function ProtectedRoutes() {
    const isAuth = adminAuth();
  return isAuth ? <Outlet/> : <Navigate to="/"/>
  

}

export default ProtectedRoutes