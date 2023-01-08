import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Update from'./Update'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './appartement.css';


export default function Appartemet() {

  
  let UserName = localStorage.getItem('UserName');

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //api 
  const [db,setDb]= useState([])
  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')

  const [Name_Client, setName_Client] = useState("")
  const [Recidance, setRecidance] = useState("")
  const [Nb_etage, setEtage] = useState("")
  const [ville, setVille] = useState("")
  const [prix, setPrix] = useState("")
  const [address, setAdress] = useState("")


  const getAppartement = async () => {
   
    const res = await axios.get('http://localhost:8080/api/getAllAppartemnet')
    setDb(res.data)
    setLoading(true)
  }
  useEffect(() => {
    getAppartement()
    SetUpdate('all data')
  }, [update])
  // console.log(db)

  const Appartement =(e)=>{
       e.preventDefault()
  axios.post('http://localhost:8080/api/craeteAppartement', {
   
  Name_Client: Name_Client,
  Recidance: Recidance,
  Nb_etage: Nb_etage,
  ville: ville,
  prix: prix,
  address: address

})

  .then(result => {
    SetUpdate('add data')
    setLoading(true)

})
.catch(err => {
console.log(err)
})
}
const deletApartement = (id)=> {
  // Simple DELETE request with axios
  axios.delete(`http://localhost:8080/api/delete/${id}`) //endPoint
  .then(result => {
    SetUpdate('delete data')
    setLoading(true)

    // console.log(result)
  })
  .catch(err => {
    console.log(err)
  })    
}


function logout() {

  localStorage.clear();
  window.location.replace('http://localhost:3000/')

}

 return (
    <div>
         <div>
  <div className="wrapper ">
 <div className="sidebar">
  <div className="sidebar-wrapper ">
    <div className="logo">
      <a href="http://www.creative-tim.com" className="simple-text logo-mini">
        CT
      </a>
      <a href="http://www.creative-tim.com" className="simple-text logo-normal">
        Creative Tim
      </a>
    </div>
    <ul className="nav">
      <li className="active ">
        <a href="/appartement">
          <i className="tim-icons icon-chart-pie-36" />
          <p>Dashboard</p>
        </a>
      </li>
      <li>
        <a href="/paiement">
          <i className="tim-icons icon-atom" />
          <p>Paiement</p>
        </a>
      </li>
     
    </ul>
  </div>
</div>
    <div className="main-panel">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent   ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto ">
              <div className="search-bar input-group">
       
                <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" /></button>
         
              </div>
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">
                    New Notifications
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Mike John responded to your email</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">You have 5 more tasks</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Your friend Michael is in town</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Another notification</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Another one</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="photo">
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Profile</a>
                  </li>
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Settings</a>
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Log out</a>
                  </li>
                </ul>
              </li>
              <li className="separator d-lg-none" />
            </ul>
          </div>
        </div>
      </nav>
      <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">


<form >
<div className="modal-header">

  <input type="text" className="form-control"  
  id="inlineFormInputGroup" placeholder="SEARCH" />
  <button type="submit" >
      save
      {/* <i className="tim-icons icon-simple-remove" /> */}
  </button>

</div>
  </form>

<div className="modal-footer">
</div>
</div>
        </div>
      </div>
      {/* End Navbar */}
      <div className="content  text-center">
        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
             <div className="card-header  ">
                <div className="row">
                  <div className="col-sm-6 text-left">

            <>
          
      <Button className="" variant="primary" onClick={handleShow}>
        add appartement
      </Button>
      <h1> {UserName} </h1>
      <Link to="/Register" className="book-a-table-btn scrollto d-none d-lg-flex" onClick={logout}>logout</Link>
        
      <Modal  className="text-white"show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title>Appartement</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark ">
          
     <form>
 
     <div className="form-group">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input type="text"
    name="Name_Client" value={Name_Client} onChange={(e) => setName_Client(e.target.value)} className="form-control text-red" id="exampleInputPassword1" placeholder="appartement" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">appartement</label>
    <input type="text"
    name="Recidance" value={Recidance} onChange={(e) => setRecidance(e.target.value)} className="form-control " id="exampleInputPassword1" placeholder="appartement" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">nb tage</label>
    <input type="text"
    name="Nb_etage" value={Nb_etage} onChange={(e) => setEtage(e.target.value)} className="form-control text-red" id="exampleInputPassword1" placeholder="nb etage" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">ville</label>
    <input type="text"
    name="ville" value={ville} onChange={(e) => setVille(e.target.value)} className="form-control text-red" id="exampleInputPassword1" placeholder="ville" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">prix</label>
    <input type="text"
    name="prix" value={prix} onChange={(e) => setPrix(e.target.value)} className="form-control text-red " id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group ">
    <label htmlFor="exampleInputEmail1">address</label>
    <input type="text"
    name="address" value={address} onChange={(e) => setAdress(e.target.value)}
     className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="address" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
  </div>

</form>

        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button    type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"variant="primary" onClick={Appartement}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    </div> 
     </div> 
      </div>
            </div>
          </div>
        </div>
        {/* <div className='element '>
        { db.map((item ) => {
    return(


<div  key={item.id}className="container mx-auto mt-4">
  <div className="row">
    <div className="col-md-4">
      <div className="card bghh" style={{width: '18rem'}}>
        <img src="assets/img/appar.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.Name_appartement }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.Nb_etage}</h6>
          <p className="card-text">{item.Nb_etage}</p>
          <h6 className="card-subtitle mb-2 text-muted">{item.prix}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{item.address}</h6>
          <a href="#" onClick={() => deletApartement(item.id)}  className="btn mr-2">delete</a>

          <a href="" onClick={()=>Update
            (item.id)} className="btn mr-2">update</a>





        
        </div>
      </div>
    </div>            
  </div>
</div>

    )
}
)
}
</div> */}

<div>
  <h2>Created with love by <a href="https://github.com/pablorgarcia" target="_blank">Pablo García</a></h2>
  <table className="container">
    <thead>
      <tr>
        <th><h1>id</h1></th>
        <th><h1>Name</h1></th>
        <th><h1>Recidance</h1></th>
        <th><h1>Nb_etage</h1></th>
        <th><h1>ville</h1></th>
        <th><h1>prix</h1></th>
        <th><h1>address</h1></th>
        <th><h1>update</h1></th>
        <th><h1>delete</h1></th>
      </tr>
    </thead>
    <tbody>
    { db.map((item ) => {
      return(
        
        <tr key={item._id}>
        <td>{item._id} </td>
        <td>{item.Name_Client }</td>
        <td>{item.Recidance }</td>
        <td>{item.Nb_etage}</td>
        <td>{item.ville}</td>
        <td>{item.prix}</td>
        <td>{item.address}</td>
      <td className='up'>
      <a href="#" onClick={() => deletApartement(item._id)}  className="btn mr-2">delete</a>

      </td>
      <td>
   
      <Update id={item._id}/>
      </td>
     
      </tr>
      )
    })}
 
    </tbody>
  </table>
</div>































     
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            ©
            made with <i className="tim-icons icon-heart-2" /> by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div></footer>
    </div>
  </div>
  <div className="fixed-plugin">
    <div className="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i className="fa fa-cog fa-2x"> </i>
      </a>
      <ul className="dropdown-menu">
        <li className="header-title"> Sidebar Background</li>
        <li className="adjustments-line">
          <a href="javascript:void(0)" className="switch-trigger background-color">
            <div className="badge-colors text-center">
              <span className="badge filter badge-primary active" data-color="primary" />
              <span className="badge filter badge-blue" data-color="blue" />
              <span className="badge filter badge-green" data-color="green" />
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="adjustments-line text-center color-change">
          <span className="color-label">LIGHT MODE</span>
          <span className="badge light-badge mr-2" />
          <span className="badge dark-badge ml-2" />
          <span className="color-label">DARK MODE</span>
        </li>
        <li className="button-container">
          <a href="https://www.creative-tim.com/product/black-dashboard" target="_blank" className="btn btn-primary btn-block btn-round">Download Now</a>
          <a href="https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block btn-round">
            Documentation
          </a>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container text-center">
          <button id="twitter" className="btn btn-round btn-info"><i className="fab fa-twitter" /> · 45</button>
          <button id="facebook" className="btn btn-round btn-info"><i className="fab fa-facebook-f" /> · 50</button>
          <br />
          <br />
          <a className="github-button" href="https://github.com/creativetimofficial/black-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}
