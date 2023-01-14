import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

export default function AjouterFactr() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//api

const [db,setDb]= useState([])
const [loading, setLoading] = useState(false)
const [update , SetUpdate] = useState('')

const [Name_Client, setName_Client] = useState("")
const [date_facteur, setDatefacteur] = useState("")
const [date_payment, setDate_payment] = useState("")
const [Recidance, setRecidance] = useState("")
const [prix, setPrix] = useState("")
const [companyList,setCompanyList]=useState([])

  useEffect(()=>{
    const fetchData =async ()=>{
    const response = await fetch(`http://localhost:8080/api/getAllAppartemnet`)
    const newData = await response.json();
    setCompanyList(newData);
    // console.log(newData)
    };
    fetchData();

  },[] )

    useEffect(() => {
    SetUpdate('all data')
    }, [update])

const Paiement =(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8080/api/creationPaiement', {

    Name_Client: Name_Client,
    date_facteur: date_facteur,
    date_payment: date_payment,
    Recidance: Recidance,
    prix: prix,

})

.then(result => {
    toast.success("add factur Success")
    SetUpdate('add data')
    setLoading(true)
    handleClose()

})
.catch(err => {
    console.log(err)
})
}
    useEffect(() => {

    SetUpdate('all data')
    }, [update])

return (
<div>

    <>
        <Button variant="dark" onClick={handleShow}>
            add factor
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>add factor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Select className="mb-3" name="Name_Client" onChange={(e)=> setName_Client(e.target.value)}
                            aria-label="Default select example">
                            {companyList.map(conpan =>(
                            <option value={conpan.Name_Client}key={conpan.id}>{conpan.Name_Client}</option>
                            ))}

                        </Form.Select>


                        <Form.Label>Recidance</Form.Label>
                        <Form.Select className="mb-3" name="Recidance" onChange={(e)=>
                            setRecidance(e.target.value)}aria-label="Default select example">
                            {companyList.map(conpan =>(
                            <option value={conpan.Recidance}key={conpan.id}>{conpan.Recidance}</option>
                            ))}


                        </Form.Select>


                        <Form.Label>date payment</Form.Label>
                        <Form.Control className="mb-3" type="date" name="date_payment" onChange={(e)=>
                            setDate_payment(e.target.value)}
                            placeholder="enter price" autoFocus
                        />

                        <Form.Label>dat factor</Form.Label>
                        <Form.Control type="date" name="date_facteur" onChange={(e)=>
                            setDatefacteur(e.target.value)}
                            placeholder="enter address"autoFocus
                        />

                        <Form.Label>Price Total</Form.Label>
                        <Form.Select className="mb-3" name="prix" onChange={(e)=>
                              setPrix(e.target.value)}aria-label="Default select example">
                              {companyList.map(conpan =>(
                              <option value={conpan.prix} key={conpan.id}>{conpan.prix}</option>
                              ))}

                        </Form.Select>

                         </Form.Group>
                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={Paiement}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </>

</div>
)
}