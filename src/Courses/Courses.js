import React from 'react'
import webdevelopment from './webdevelopment2.jpeg'
import appdevelopment from "./appdevelopment.jpeg"
import amazon from "./amazon2.png"
import gamedevelopment from './gamedevelopment.jpeg'
import shopify from './shopify2.jpeg'
import digitalmarketing from './digitalmarketing.jpeg'
import graphicdesigning from './graphicdesigning.jpeg'
import englishspoken from './english spoken.png'
import ai from './ai.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


export const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="courses1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>Courses of Digix</p>
                    <h1 className='maintxt'>Lets check which course do you like</h1>
                    <NavLink to={'/admissionform'} className='btn btn-lg mainbtn  allbtns'>Enroll Now</NavLink>
                </div>
            </div>
            <div className="courses2">
                <div className="container text-center">
                    <div className="col-12"><h1 className='om mt-5 mb-5 pt-5 fs-1 text-center'>Courses</h1></div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={webdevelopment} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Web Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={appdevelopment} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">App Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={amazon} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Amazon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={shopify} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Shopify</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={gamedevelopment} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Game Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={digitalmarketing} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={graphicdesigning} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Graphic Designing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={englishspoken} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">English Spoken</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <div className='imgdiv'>
                                    <img src={ai} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Articial Intelligence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to={'/admissionform'} className='btn btn-lg mainbtn mb-5 allbtns'>Enroll Now</NavLink> 
                </div>
            </div>
            {/* <div className='courses'>
                <div className="home3">
                    <div className="container">
                        <div className="col-12 my-5 pt-5"><h1 className='rt my-md-5 pt-md-5'>Destinations</h1></div>
                        <div className="row text-center ">
                            <div className="col-md-4 ">
                                <div className="card shadow-lg mb-5" >
                                    <img src={webdevelopment} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Web Development</p>
                                    </div>
                                </div>
                            </div>
                                       <p className="card-text">Game Development</p>
                                    </div>
                                </div>
                              <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={appdevelopment} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">App Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={amazon} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Amazon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center ">
                            <div className="col-md-4 ">
                                <div className="card shadow-lg mb-5" >
                                    <img src={gamedevelopment} className="card-img-top" alt="..." />
                                    <div className="card-body">
                           </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={shopify} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Shopify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={digitalmarketing} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Digital Marketing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center ">
                            <div className="col-md-4 ">
                                <div className="card shadow-lg mb-5" >
                                    <img src={graphicdesigning} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Graphic Designing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={englishspoken} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">English Spoken</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg mb-5" >
                                    <img src={ai} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Artificial Intelligence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to={'/admissionform'} className='btn btn-lg mainbtn  allbtns'>Find Course</NavLink>
            </div> */}
        </>
    )
}
