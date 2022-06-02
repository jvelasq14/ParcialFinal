import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-primary mb-3'>
        <Link className='navbar-brand' to="/"><h2>TechMantenimientos</h2></Link>
        <div>
            <div className='d-flex'>
                <Link to="/" className='btn btn-primary mr-3'><h5>Inicio</h5></Link>
                <Link to="/login" className='btn btn-primary mr-3'><h5>Log in</h5></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar