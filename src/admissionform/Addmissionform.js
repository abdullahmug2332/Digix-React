import React from 'react'
import { NavLink } from 'react-router-dom'
import admission from './admission.jpeg'
import { useEffect } from 'react'

export const Addmissionform = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="addmission1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>Admission in Digix</p>
                    <h1 className='maintxt'>Lets know how to Enroll in Digix</h1>
                    <NavLink to={'/about'} className='btn btn-lg mainbtn allbtns'>About us</NavLink>
                </div>
            </div>
            <div className="about4  my-5">
                <div className="col-12"><h1 className='om mt-5 mb-3 pt-5 fs-1 text-center'>Admission Form</h1></div>
                <div className="container">
                    <div className="row b4c shadow-lg ">
                        <div className="col-md-4 px-5 pb-4 pb-lg-0 px-md-3 form">
                            <div className="col-12 px-3 mt-3 inputss ">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1 '>Name:</p>
                                <input className='w-100 inputs' type="text" />
                            </div>
                            <div className="col-12 px-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Phone:</p>
                                <input className='w-100 inputs' type="number" />
                            </div>
                            <div className="col-12 px-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Email:</p>
                                <input className='w-100 inputs' type="email" />
                            </div>
                            <div className="col-12 px-3 mt-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>CNIC:</p>
                                <input className='w-100 inputs' type="number" />
                            </div>
                            <div className="col-12 px-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Gender:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Transgender</option>
                                </select>
                            </div>
                            <div className="col-12 px-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Qualification:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">Matric</option>
                                    <option value="">Intermediate</option>
                                    <option value="">Bachlors</option>
                                    <option value="">Master</option>
                                    <option value="">PHD</option>
                                </select>
                            </div>
                            <div className="col-12 px-3 inputss">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Course:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">Web Development</option>
                                    <option value="">App Development</option>
                                    <option value="">Amazon</option>
                                    <option value="">Game Development</option>
                                    <option value="">Shopify</option>
                                    <option value="">Digital Marketing</option>
                                    <option value="">Graphic Designing</option>
                                    <option value="">English Spoken</option>
                                    <option value="">Artificial Intelligence</option>
                                </select>
                            </div>
                            <div className="col-12 bbtndiv inputss">
                                <button className="btn btn-md bbtn btnrelative ">Book Now</button>
                            </div>
                        </div>
                        <div className="col-md-8 d-none d-md-block ">
                            <img className='bimg h-100' src={admission} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
