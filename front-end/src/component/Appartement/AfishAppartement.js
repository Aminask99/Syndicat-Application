// import React from 'react'
// import axios from 'axios'
// import { useState,useEffect } from 'react';

// export default function AfishAppartement() {

//   const [db,setDb]= useState([])
//   const [loading, setLoading] = useState(false)
//   const [update , SetUpdate] = useState('')

//   const getAppartement = async () => {
   
//     const res = await axios.get('http://localhost:8080/api/getAllAppartemnet')
//     setDb(res.data)
//     setLoading(true)
//   }
//   useEffect(() => {
//     getAppartement()
//     SetUpdate('all data')
//   }, [update])

//   const deletApartement = (id)=> {
//     // Simple DELETE request with axios
//     axios.delete(`http://localhost:8080/api/delete/${id}`) //endPoint
//     .then(result => {
//       SetUpdate('delete data')
//       setLoading(true)
  
//       console.log(result)
//     })
//     .catch(err => {
//       console.log(err)
//     })    
//   }
//   return (
  
//     <div>

//       <div className='element '>
//     { db.map((item ) => {
// return(


// <div  key={item.id}className="container mx-auto mt-4">
// <div className="row">
// <div className="col-md-4">
//   <div className="card bghh" style={{width: '18rem'}}>
//     <img src="assets/img/appar.jpg" className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">{item.Name_appartement }</h5>
//       <h6 className="card-subtitle mb-2 text-muted">{item.Nb_etage}</h6>
//       <p className="card-text">{item.Nb_etage}</p>
//       <h6 className="card-subtitle mb-2 text-muted">{item.prix}</h6>
//       <h6 className="card-subtitle mb-2 text-muted">{item.address}</h6>
//       <a href="#" onClick={() => deletApartement(item.id)}  className="btn mr-2">delete</a>


    
//     </div>
//   </div>
// </div>            
// </div>
// </div>

// )
// }
// )
// }
// </div>
//     </div>
//   )
// }
