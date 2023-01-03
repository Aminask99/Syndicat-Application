import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [UserName, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  // const [error, setError] = useState(false)

  // const navigate = useNavigate()
  const handleApi = (e) => {
    e.preventDefault()

    // if (email.length == 0 || password.length == 0) {
    //   setError(true)
   
    // }

    axios.post('http://localhost:8080/api/login', {

      UserName: UserName,
      Password: Password

    })

      .then(result => {
        console.log(result)
          // const role = result.data.user.role.role;

          // localStorage.setItem("role", role)
          // localStorage.setItem('email', result.data.user.email);
          // localStorage.setItem('name', result.data.user.name);

         
          // navigate('/' + role)
          toast.success("login Success")
        
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
       <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="login-wrap p-4 p-md-5">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-user-o" />
          </div>
          <h3 className="text-center mb-4">Have an account?</h3>
          <form action="#" className="login-form">
            <div className="form-group">
              <input type="text"
               name="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} 
               className="form-control rounded-left" placeholder="Username" required />
            </div>
            <div className="form-group d-flex">
              <input type="password"
              name="Password" value={Password} onChange={(e) => setPassword(e.target.value)} 
              className="form-control rounded-left" placeholder="Password" required />
            </div>
            <div className="form-group d-md-flex">
              <div className="w-50">
                <label className="checkbox-wrap checkbox-primary">Remember Me
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="w-50 text-md-right">
                <a href="#">Forgot Password</a>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" 
              onClick={handleApi}
              className="btn btn-primary rounded submit p-3 px-5">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
