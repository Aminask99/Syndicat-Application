
import Appartement from './component/Appartement/Appartemet'
import Login from './component/login/Login'
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
    {/* <Nav/> */}

<Route exact path="/" element={<Login/>} />
<Route exact path="/appartement" element={<Appartement/>} />
</Routes>
  );
}

export default App;
