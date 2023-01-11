import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

export default function AjouterAppartement() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //api
  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')

  const [Name_Client, setName_Client] = useState("")
  const [Recidance, setRecidance] = useState("")
  const [Nb_etage, setEtage] = useState("")
  const [ville, setVille] = useState("")
  const [prix, setPrix] = useState("")
  const [address, setAdress] = useState("")

 
    const AjouterAppartement =()=>{

   axios.post('http://localhost:8080/api/craeteAppartement', { 

   Name_Client: Name_Client,
   Recidance: Recidance,
   Nb_etage: Nb_etage,
   ville: ville,
   prix: prix,
   address: address
 })
   .then(result => {
    toast.success("add appartement Success")
    SetUpdate('add appartement')
    setLoading(true)
    handleClose()
    console.log(result)
 
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
      <Button variant="dark"  onClick={handleShow}>
        add appartement
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add appartement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control  className="mb-3"
               name="Name_Client" 
               onChange={(e) => setName_Client(e.target.value)}
                type="text"
                placeholder="entrer your Name"
                autoFocus
              />
               <Form.Label>Recidance</Form.Label>
                <Form.Select    className="mb-3"  name="Recidance" onChange={(e) => setRecidance(e.target.value)} aria-label="Default select example">
      <option>recidence</option>
      <option >Marwa</option>
  <option >doha</option>
  <option >marhaba</option>

    </Form.Select>
    <Form.Label>Nb tage</Form.Label>
              <Form.Select    className="mb-3"   name="Nb_etage"onChange={(e) => setEtage(e.target.value)}  aria-label="Default select example">
              <option >Nb Tage</option>
  <option >1éme</option>
  <option >2éme </option>
  <option >3éme</option>
  <option >4éme</option>
  <option >5éme</option>
    </Form.Select>
    <Form.Label>Ville</Form.Label>
    <Form.Select  className="mb-3" name="Ville"onChange={(e) => setVille(e.target.value)} aria-label="Default select example">
      <option>Ville</option>
      <option >El jadida</option>
  <option  >Marakesh</option>
  <option  >raba</option>
    </Form.Select>

   
    <Form.Label>price</Form.Label>
              <Form.Control
                 className="mb-3"
                type="text"
                name="prix"
                value={prix} onChange={(e) => setPrix(e.target.value)} 
                placeholder="enter price"
                autoFocus
              />
  
               <Form.Label>address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address} onChange={(e) => setAdress(e.target.value)}
                placeholder="enter address"
                autoFocus
              />
    
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
           
            </Form.Group>
    </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={AjouterAppartement}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  















  




    </div>
  )
}
