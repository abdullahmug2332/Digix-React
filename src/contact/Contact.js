import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="contact1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>Contact Digix</p>
                    <h1 className='maintxt'>Lets know how to contact us </h1>
                    <NavLink to={'/admissionform'} className='btn btn-lg mainbtn  allbtns'>Enroll Now</NavLink>
                </div>
            </div>
            <div className='contact2'>
                <div className="container text-center">
                    <div className="col-12"><h1 className='om mt-5 mb-3 pt-5 fs-1 text-center'>Contact Sources</h1></div>
                    <div className='clinks'>
                        <div className='row'>
                            <div className="col-md-4 px-4 mb-5">
                                <div className='clink1 clink'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin location" width="130" height="130" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    <h5 className='cinfo'>6th floor,800/D 2/500D queens new Karim Block road,YBlock, lane Pakistan-1782</h5>
                                </div>
                            </div>
                            <div className="col-md-4 px-4  mb-5">
                                <div className='clink2 clink'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone phone" width="130" height="130" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    </svg>
                                    <h5 className='cinfo'>
                                        +10 367 826 2567 <br />
                                        +10 234 678 0963 <br />
                                        +10 235 765 8940
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-4 px-4 mb-5">
                                <div className='clink3 clink'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail email" width="130" height="130" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                        <path d="M3 7l9 6l9 -6" />
                                    </svg>
                                    <h5 className='cinfo'>
                                        contact@Digix.com <br />
                                        contactadmin@Digix.com <br />
                                        contacthr@Digix.com <br />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to={'/admissionform'} className='btn btn-lg my-5 mainbtn  allbtns'>Enroll Now</NavLink>
                </div>
            </div>
        </>
    )
}
