
import Appartement from './component/Appartement/Appartemet'
import Login from './component/login/Login'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import './App.css';

function App() {
  return (
    <div>
    <Routes>
    {/* <Nav/> */}

<Route exact path="/" element={<Login/>} />
<Route exact path="/appartement" element={<Appartement/>} />
</Routes>

<ToastContainer />

</div>
  );
}

export default App;
