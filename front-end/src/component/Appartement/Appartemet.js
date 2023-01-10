import React from 'react'
import Table from './Table'
import { useState,useEffect } from 'react';
import axios from 'axios'
import './appartement.css';



export default function Appartemet() {

  const [db,setDb]= useState([])
  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')

let UserName = localStorage.getItem('UserName');

function logout() {

  localStorage.clear();
  window.location.replace('http://localhost:3000/')

}
const getAppartement = async () => {
   
  const res = await axios.get('http://localhost:8080/api/getAllAppartemnet')
  setDb(res.data)
  SetUpdate('delete data')
  setLoading(true)
}
useEffect(() => {
  getAppartement()
  SetUpdate('all data')
}, [update])


 return (
 <div>

    
<div>
  <input type="checkbox" id="nav-toggle" />
  <div className="sidebar">
    <div className="sidebar-brand">
      <h1> <span className="fab fa-asymmetrik"> </span> <span>SyndicaT</span>
      </h1>
    </div>
    <div className="sidebar-menu">
      <ul>
        <li>
          <a href="#" className="active">
            <span className="fas fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
     
        <li>
          <a href="/appartement">
            <span className="fas fa-stream" />
            <span>appartement</span>
          </a>
        </li>
     
        <li>
          <a href="/paiement">
            <span className="fas fa-boxes" />
            <span>les factor</span>
          </a>
        </li>
       
        <li>
          <a href="/">
            <span className="fas fa-arrow-right" onClick={logout} />
            <span>logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>    
  <div className="main-content">
  

  <header>
      <h2>
        <label htmlFor="nav-toggle">
          <span className="fas fa-bars" />
        </label>
        Dashboard
      </h2>
      <div className="user-wrapper">
        <img src="https://bit.ly/3bvT89p" width="40px" height="40px" alt="profile-img" />
        <div className>
          <h4>Welcom {UserName}</h4>
          <small>Super Admin</small>
        </div>
      </div>
    </header> 

    <main>
   
      <div className="recent-grid">
        <div className="projects">
         




<Table/>








        </div>
        <div className="customers">
          <div className="card">
            <div className="card-header">
              <h2>les Client</h2>
              <button>See all <span className="fas fa-arrow-right" /> </button>
            </div>
            <div className="card-body">
              { db.map((item) =>{
return(
  <div className="customer">
  <div className="info">
    <img src="https://bit.ly/3bvT89p" height="40px" width="40px" alt="customer" />
    <div>
      <h4>{item.Name_Client }</h4>
      <small>{item.Recidance }</small>
    </div>
  </div>
  <div className="contact">
    <span className="fas fa-user-circle" />
    <span className="fas fa-comment" />
    <span className="fas fa-phone-alt" />
  </div>
</div>

)
})}



          
            </div>
          </div>
        </div>
      </div>  
    </main>
  </div>
</div>




</div>

  )
}
