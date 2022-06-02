import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Admin from "./Componentes/Admin";
import Inicio from "./Componentes/Inicio";
import Loggin from "./Componentes/Loggin";
import Navbar from "./Componentes/Navbar";

function App() {
  return (
    <Router>
       <Navbar/>
       <Admin/>
    <div className="container">
     <Routes>
       <Route path="/" element={<Inicio/>}/>
       <Route path="login" element={<Loggin/>}/>
     </Routes>
    </div>
    
   { /*<div>
   <Routes>
       <Route path="/inmuebles" element={<Inmuebles/>}/>
       <Route path="muebles" element={<Mueble/>}/>
       <Route path="servicios" element={<Servicios/>}/>
     </Routes>
    </div>
  */}
    </Router>
   
  );
}

export default App;
