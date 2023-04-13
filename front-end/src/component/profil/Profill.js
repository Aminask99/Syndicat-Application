import React from 'react'
import '../Appartement/appartement.css';
import { useState,useEffect } from 'react';
import axios from 'axios'


export default function Profill() {
  const [db,setDb]= useState([])
  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')
  
    const getAppartement = async () => {

        const res = await axios.get('http://127.0.0.1:8080/api/getProfil')
        setDb(res.data)
        SetUpdate('delete data')
        setLoading(true)
    }
        useEffect(() => {
        getAppartement()
        SetUpdate('all data')
        }, [update])

return (

  
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
                                            <h4>{item.lastName}</h4>
                                            <small>{item.dommaine }</small>
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

)
}