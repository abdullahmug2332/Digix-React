import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center text-md-start">
              <NavLink to={'/'} className='digix navbar-brand '><p className="digix">Digix</p></NavLink>
            </div>
            <div className="col-md-7 mb-3 mb-md-0 d-flex justify-content-center   justify-content-md-start align-items-center">
              <div className="d-flex   align-items-center">
                <NavLink to={'/'} className='nav-link mx-2 mx-md-4' >Home</NavLink>
                <NavLink to={'/about'} className='nav-link mx-2 mx-md-4'>About</NavLink>
                <NavLink to={'/courses'} className='nav-link mx-2 mx-md-4'>Courses</NavLink>
                <NavLink to={'/fee'} className='nav-link mx-2 mx-md-4'>Fee</NavLink>
                <NavLink to={'/contact'} className='nav-link mx-2 mx-md-4'>Contact</NavLink>
              </div>
            </div>
            <div className="col-md-2 d-none d-lg-flex justify-content-center align-items-center">
              <NavLink to={'/admissionform'} className='btn btn-md allbtns' >Enroll Now</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
