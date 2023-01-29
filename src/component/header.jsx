import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import {Link} from "react-router-dom";

function header() {
  
   
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid container">
    
    <Link to="/" class="navbar-brand" ><img src="images/Ecare-Academy-Logo.png" alt="Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-auto" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">হোম</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">গ্যালারী</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">আমাদের সম্পর্কে</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">যোগাযোগ</Link>
        </li>
      </ul>
      <span className="navbar-text">
            <button className="login"><FaAngleRight></FaAngleRight> লগইন</button>
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default header