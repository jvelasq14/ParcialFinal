import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
  import { auth } from "./firebase";
import Admin from "./Componentes/Admin";
import Inicio from "./Componentes/Inicio";
import Loggin from "./Componentes/Loggin";
import Navbar from "./Componentes/Navbar";
function App() {
  const [fireuser, setFireuser] = React.useState(false)
  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      console.log(user)
      if(user){
           setFireuser(user)
      }else{
        setFireuser(null)
      }
    })
  },[])
  return fireuser!==false ?(
    <Router>
    <Navbar fireuser={fireuser}/>
    
 <div className="container">
  <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="admin" element={<Admin/>}/>
    <Route path="login" element={<Loggin/>}/>
  </Routes>
 </div>
 </Router>
  ):
  <p>Cargando...</p>
  ;
}

export default App;
