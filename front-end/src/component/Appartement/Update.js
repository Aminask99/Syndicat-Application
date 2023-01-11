import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';



export default function Update(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false)
  const [update , SetUpdate] = useState('')


  const [item,setItem]= useState([])

  const getOneAppartement = async (id)=> {
  
   await axios.get(`http://localhost:8080/api/getOneAppartement/${id}`) //endPoint
    .then(result => {
      setItem(result.data)
      console.log(result.data)
      SetUpdate('delete data')
      setLoading(true)

      handleShow()
    })
    .catch(err => {
      console.log(err)
    })    
  }

  const updateAppartement= async(id)=>{
    await axios.put(`http://localhost:8080/api/update/${id}`) 
    .then((response)=>{
      toast.success("add appartement Success")
      console.log(response.data);
      SetUpdate('delete data')
      setLoading(true)

    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
<div className='w-50'>


<>
      <Button variant="dark"  onClick={() => getOneAppartement(props.id)}>
       update
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
               value= {item.Name_Client}
               onChange={(e) => setItem(e.target.value)}
                type="text"
                placeholder="entrer your Name"
                autoFocus
              />
               <Form.Label>Recidance</Form.Label>
                <Form.Select    className="mb-3"  name="Recidance"  value= {item.Name_Client}  onChange={(e) => setItem(e.target.value)} aria-label="Default select example">
      <option>recidence</option>
      <option >Marwa</option>
  <option >doha</option>
  <option >marhaba</option>

    </Form.Select>
    <Form.Label>Nb tage</Form.Label>
              <Form.Select    className="mb-3"   name="Nb_etage" value={item.Nb_etage} onChange={(e) => setItem(e.target.value)}  aria-label="Default select example">
              <option >Nb Tage</option>
  <option >1éme</option>
  <option >2éme </option>
  <option >3éme</option>
  <option >4éme</option>
  <option >5éme</option>
    </Form.Select>
    <Form.Label>Ville</Form.Label>
    <Form.Select  className="mb-3" name="Ville" value={item.ville}  onChange={(e) => setItem(e.target.value)} aria-label="Default select example">
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
                value={item.prix}
                 onChange={(e) => setItem(e.target.value)} 
                placeholder="enter price"
                autoFocus
              />
  
               <Form.Label>address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={item.address} onChange={(e) => setItem(e.target.value)}
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
          <Button variant="dark" onClick={updateAppartement} >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>


</div>

  )
}
