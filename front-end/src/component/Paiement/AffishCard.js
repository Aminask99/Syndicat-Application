import React from 'react'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';
import './paiement.css';

export default function AffishCard() {
const [db,setDb]= useState([])
const [loading, setLoading] = useState(false)
const [update , SetUpdate] = useState('')

const contentCard = useRef();

const handlePrint=useReactToPrint({
   content: ()=> contentCard.current,

   onAterPrint:()=> alert('Print success')
})


const getAllPaiements = async () => {

const res = await axios.get('http://localhost:8080/api/getAllPaiements')
  setDb(res.data)
  SetUpdate('get data')
  setLoading(true)
}
  useEffect(() => {
  getAllPaiements()
  SetUpdate('all data')
  }, [update])


const deletePaiment = (id)=> {

axios.delete(`http://localhost:8080/api/deletePaiment/${id}`) //endPoint
  .then(result => {
  toast.success("delete Success")
  SetUpdate('delete factor')
  setLoading(true)
// console.log(result)

})
.catch(err => {
  console.log(err)
  toast.error('not delete factor')
  })
}

return (
<div>

    <div className="card-group shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
        { db.map((item ) => {
        return(


        <div className="container ">
            <div className="row">
                <div className="container-fluid">
                    <img src="assets/img/parrt.jpg" width="350px" alt=''/>
                    <div className="caption text-md-center"><em>Chief Executive Officer of Alphabet Inc.</em></div>
                </div>
                <hr />

                <div className="card card-1  text-md-center" ref={contentCard} id="card1">
                    <table className="table table-hover">
                        <tbody>
                            <tr key={item._id}>
                                <td><span className="bold">Name</span></td>
                                <td>
                                    <p> {item.Name_Client }<br /> </p>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="bold">la date de facteur</span></td>
                                <td>{item.date_facteur}</td>
                            </tr>
                            <tr>
                                <td><span className="bold"> date de payment</span></td>
                                <td colSpan={2}>{item.date_payment}</td>
                            </tr>
                            <tr>
                                <td><span className="bold">Recidance</span></td>
                                <td colSpan={2}>{item.Recidance}<br />
                                    appartemnet 300</td>

                            </tr>
                            <tr>
                                <td><span className="bold">Total price</span></td>
                                <td colSpan={2}>{item.prix}<br />
                                </td>

                            </tr>

                            <tr>
                                <td><span className="bold">Signature</span></td>
                                <td colSpan={2}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Larry_Page_google_signature.svg/150px-Larry_Page_google_signature.svg.png" alt='' />
                                </td>

                            </tr>
                            <td className='up'>

                            </td>

                        </tbody>
                    </table>
                </div>

                <button onClick={handlePrint} className="btn mr-2">Imprémer</button>
                <button onClick={()=> deletePaiment(item._id)} type="button" class="btn btn-danger">delete</button>
            </div>
        </div>
        )})
        }

    </div>


</div>
)
}