
import Appartement from './component/Appartement/Appartemet'
import Login from './component/login/Login'
import Paiement from './component/Paiement/Paiement'
import ProtectedRoutes from './component/ProtectedRoutes'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import PDFFile from './component/PdfFille'
import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
    {/* <Nav/> */}
    <Route exact path="/PDFFile" element={<PDFFile />} />
<Route exact path="/" element={<Login/>} />

<Route element={<ProtectedRoutes />}>
<Route exact path="/appartement" element={<Appartement/>} />
<Route exact path="/paiement" element={<Paiement/>} />
</Route>


</Routes>

<ToastContainer />

</div>
  );
}

export default App;
