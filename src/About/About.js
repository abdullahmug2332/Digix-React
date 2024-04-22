import React from 'react'
import group from './group.jpeg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="about1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>About Digix</p>
                    <h1 className='maintxt'>Here you know about our success stories</h1>
                    <NavLink to={'/courses'} className='btn btn-lg mainbtn  allbtns'>Find Course</NavLink>
                </div>
            </div>
            <div className="about4 py-5 my-5">
                <div className="container">
                    <div className="row a4c shadow-lg ">
                        <div className="col-md-6 d-none d-md-block ">
                            <img className='atimg h-100' src={group} alt="" />
                        </div>
                        <div className="col-md-6 px-5 pb-4 pb-lg-0 px-md-3">
                            <p className="at mt-5">About Digix</p>
                            <p className="atxt">Welcome to Digix, a pioneering educational institute dedicated to empowering minds and shaping futures. At Digix, we believe in the transformative power of education to unlock boundless potential. Our commitment lies in providing a dynamic learning environment where innovation meets knowledge, fostering a culture of curiosity and critical thinking. With a team of passionate educators and cutting-edge resources, Digix strives to redefine the educational experience. Join us on a journey of discovery, where learning knows no limits. At Digix, we are not just imparting knowledge; we are sculpting the architects of tomorrow. Welcome to a world of limitless possibilities.</p>
                            <div className="row text-center mt-xl-5 pt-xl-5 ">
                                <div className="col-6 text-center">
                                    <p className="bigt">22+</p>
                                    <p className="smallt">Years of Experience</p>
                                </div>
                                <div className="col-5 text-center">
                                    <p className="bigt">70+</p>
                                    <p className="smallt">Num of Staff</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 text-center">
                                    <p className="bigt">700+</p>
                                    <p className="smallt">Certified Students</p>
                                </div>
                                <div className="col-5 text-center">
                                    <p className="bigt">10+</p>
                                    <p className="smallt">Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home3 mb-5">
                <div className="col-12"><h1 className='om mt-5 pt-5 fs-1 text-center'>Reviews</h1></div>
                <div className="ab3con">
                    <div className="container">
                        <div className="col-md-9 text-light px-3 pt-5">
                            <h2 className='py-4 tu'>What Parents Says About Us</h2>
                            <p className='fs-5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                            <div className='d-flex'>
                            <NavLink to={'/courses'} className='btn btn-md mainbtn allbtns my-5 mx-4'>Take a Course</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
