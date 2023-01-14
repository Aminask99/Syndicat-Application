import React from 'react'
import { useState,Navigate } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Connect() {

const [UserName, setUserName] = useState("")
const [Password, setPassword] = useState("")


const navigate = useNavigate()
const handleApi = (e) => {
e.preventDefault()

    axios.post('http://localhost:8080/api/login', {

    UserName: UserName,
    Password: Password

    })

.then(result => {
console.log(result)

console.log(result.data.token)
// console.log(result)
    localStorage.setItem("token",result.data.token);
    localStorage.setItem("UserName",result.data.user.UserName);
    navigate("/appartement")

    const msg = result.data.message;
    toast.success(msg)

})
.catch(err => {
    console.log(err)
    toast.error('this account does not exist')
})
}

  return (
    <div>

        
<form id="stripe-login">

        <div className="field padding-bottom--24">
            <label htmlFor="email">UserName</label>
            <input
                 name="UserName" 
                 value={UserName} 
                 onChange={(e)=> setUserName(e.target.value)}
            />
        </div>
        <div className="field padding-bottom--24">
            <div className="grid--50-50">
                <label htmlFor="password">Password</label>
            </div>
            <input 
                 type="password"
                 name="Password"
                 value={Password} 
                 onChange={(e)=> setPassword(e.target.value)} />
        </div>

        <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
            <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" /> Stay signed in for a week
            </label>
        </div>
        <div className="field padding-bottom--24">
            <input onClick={handleApi} type="submit" name="submit" defaultValue="Continue" />
        </div>
        <div className="field">
            <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
        </div>

</form>
    </div>
  )
}
