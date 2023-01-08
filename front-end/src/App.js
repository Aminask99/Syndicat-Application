
import Appartement from './component/Appartement/Appartemet'
import Login from './component/login/Login'
import Paiement from './component/Paiement/Paiement'
import ProtectedRoutes from './component/ProtectedRoutes'
import Update from'./component/Appartement/Update'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
   

    



  {/* <Route exact path="/ " element={<PDFFile />} /> */}
<Route exact path="/" element={<Login/>} />

<Route element={<ProtectedRoutes />}>
<Route exact path="/appartement" element={<Appartement/>} />
{/* <Route exact path='/update' element={<Update/>}/> */}
<Route exact path="/paiement" element={<Paiement/>} />
</Route>


</Routes>

<ToastContainer />

</div>
  );
}

export default App;
