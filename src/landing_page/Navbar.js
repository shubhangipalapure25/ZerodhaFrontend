import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border sticky-tope"  style={{backgroundColor:'white'}}>
  <div className="container-fluid ms-5" >
    <Link to='/' className='navbar-brand'>
    <img className='ms-5' src='/media/images/logo.svg' alt='Logo' style={{width:'20%'}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
      
      <form className="d-flex ms-auto me-5">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link  to='/signup' className="nav-link active" aria-current="page">Signup</Link>
        </li>
        <li className="nav-item ">
        <Link  to='/about' className="nav-link">About</Link>
        </li>
        <li className="nav-item ">
        <Link  to='/products' className="nav-link">Products</Link>
        </li>
        <li className="nav-item ">
          <Link  to='/pricing' className="nav-link">Pricing</Link>
        </li>
        <li className="nav-item ">
         <Link  to='/support' className="nav-link">Support</Link>
        </li>
      </ul>
          </form>
    </div>
  </div>
</nav>
      );
}

export default Navbar;
