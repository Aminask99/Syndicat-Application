import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'



export default function Update(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //api
  // const [Name_Client, setName_Client] = useState("")
  // const [Recidance, setRecidance] = useState("")
  // const [Nb_etage, setEtage] = useState("")
  // const [ville, setVille] = useState("")
  // const [prix, setPrix] = useState("")
  // const [address, setAdress] = useState("")

  const [item,setItem]= useState([])

  const getOneAppartement = async (id)=> {
    // Simple get request with axios
   await axios.get(`http://localhost:8080/api/getOneAppartement/${id}`) //endPoint
    .then(result => {
      setItem(result.data)
      console.log(result.data)

      handleShow()
    })
    .catch(err => {
      console.log(err)
    })    
  }

  const updateAppartement= async(id)=>{
    await axios.put(`http://localhost:8080/api/update/${id}`) 
    .then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
<div className='w-50'>

<>

<button onClick={() => getOneAppartement(props.id)}  className="btn mr-2" >update</button>  

    <Modal  className="text-white"show={show} onHide={handleClose}>
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title>Appartement</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark ">
        
   <form>

   <div className="form-group">
  <label htmlFor="exampleInputPassword1">Name</label>
  <input type="text"
 value= {item.Name_Client} onChange={(e) => setItem(e.target.value)}
  className="form-control text-red" id="exampleInputPassword1" placeholder="appartement" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">appartement</label>
  <input type="text"
 value= {item.Recidance}  onChange={(e) => setItem(e.target.value)}
  className="form-control " id="exampleInputPassword1" placeholder="appartement" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">nb tage</label>
  <input type="text"
  name="" value={item.Nb_etage}  onChange={(e) => setItem(e.target.value)}
    className="form-control text-red" id="exampleInputPassword1" placeholder="nb etage" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">ville</label>
  <input type="text"
  name=""  value={item.ville} onChange={(e) => setItem(e.target.value)}
   className="form-control text-red" id="exampleInputPassword1" placeholder="ville" />
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">prix</label>
  <input type="text"
  name="" value={item.prix}  onChange={(e) => setItem(e.target.value)}
   className="form-control text-red " id="exampleInputPassword1" placeholder="Password" />
</div>
<div className="form-group ">
  <label htmlFor="exampleInputEmail1">address</label>
  <input type="text"
  name=""value={item.address}  onChange={(e) => setItem(e.target.value)}
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
        <Button  onClick={updateAppartement} type="button"
        className="btn btn-light"
        data-bs-dismiss="modal"variant="primary" >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
</div>



  )
}
