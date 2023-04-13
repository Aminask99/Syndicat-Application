import Appartement from './component/Appartement/Appartemet'
import Login from './component/login/Login'
import Profil from './component/profil/Profill'
import Paiement from './component/Paiement/Paiement'
import ProtectedRoutes from './component/ProtectedRoutes'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
   
<Route exact path="/" element={<Login/>} />
<Route exact path="/profil" element={<Profil/>} />
<Route element={<ProtectedRoutes />}>
<Route exact path="/appartement" element={<Appartement/>} />
<Route exact path="/paiement" element={<Paiement/>} />
</Route>
</Routes>

<ToastContainer autoClose={200} />

</div>
  );
}

export default App;
