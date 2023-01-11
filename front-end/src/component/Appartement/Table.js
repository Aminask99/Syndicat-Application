import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Update from'./Update'
import Ajouter from'./AjouterAppartement'
import { toast } from 'react-toastify';

export default function Table() {

  const [db,setDb]= useState([])
  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')
  
    const getAppartement = async () => {
   
        const res = await axios.get('http://localhost:8080/api/getAllAppartemnet')
        setDb(res.data)
        SetUpdate('get data')
        setLoading(true)
      }
      useEffect(() => {
        getAppartement()
        SetUpdate('all data')
      }, [update])
      
    
      const deletApartement = (id)=> {
        // Simple DELETE request with axios
        axios.delete(`http://localhost:8080/api/delete/${id}`) //endPoint
        .then(result => {
          toast.success("delete Success")
          SetUpdate('delete data')
          setLoading(true)
      
          // console.log(result)
        })
        .catch(err => {
          console.log(err)
        })    
      }
  return (
    <div>
        
        
        <div className="card">
            <div className="card-header">
              <h2>les info perso</h2>
<Ajouter/>
              {/* <button>See all <span className="fas fa-arrow-right" /> </button> */}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table width="100%">
                  <thead>
                    <tr>
                    <td> Name</td>
                      <td> Recidance</td>
                      <td>Nb_etage</td>
                      <td>ville</td>
                      <td>prix</td>
                      <td>address</td>
                      <td>delete</td>
                      <td>update</td>
                    </tr>
                  </thead>
                  <tbody>
                  { db.map((item ) => {
      return(
        
        <tr key={item._id}>
        {/* <td>{item._id} </td> */}
        <td>{item.Name_Client }</td>
        <td>{item.Recidance }</td>
        <td>{item.Nb_etage}</td>
        <td>{item.ville}</td>
        <td>{item.prix}</td>
        <td>{item.address}</td>
      <td className='up'>
      <button onClick={() => deletApartement(item._id)} type="button" class="btn btn-danger">delete</button>
     

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
          </div>









       
    </div>
  )
}
