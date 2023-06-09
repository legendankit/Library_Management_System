import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../../src/bookreading.jpeg'

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container">
    
    <NavLink className="navbar-toggler" type="NavLink" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
        
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-4" to="/" style={{marginRight: "400px"}}>Library Management System</NavLink>
      <NavLink to= "/" ><img src={logo} alt="Logo" style={{height: "50px", weight: "50px"}}/></NavLink>
      {/* <NavLink to= "/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className='fa fa-user-plus me-2'></i></NavLink> */}
    </div>
  </div>
</nav>
    </div>
  )
}
