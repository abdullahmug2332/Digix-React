import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="home1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>Welcome to Digix</p>
                    <h1 className='maintxt'>Best <strong className='online'>online</strong> Courses from Digix</h1>
                    <NavLink to={'/courses'} className='btn btn-lg mainbtn  allbtns'>Find Course</NavLink>
                </div>
            </div>
            <div className="home2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 text-center cards card1">
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate icon1" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                                    <path d="M6 9l12 0" />
                                    <path d="M6 12l3 0" />
                                    <path d="M6 15l2 0" />
                                </svg>
                            </div>
                            <h3 className='cardsbig mt-2'>Certified Teachers</h3>
                            <p className='cardssm'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p></div>
                        <div className="col-sm-6 col-lg-3 text-center cards card2">
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school icon2" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                                </svg>
                            </div>
                            <h3 className='cardsbig mt-2'>Special Education</h3>
                            <p className='cardsm'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center cards card3">
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books icon3" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                                    <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                                    <path d="M5 8h4" />
                                    <path d="M9 16h4" />
                                    <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
                                    <path d="M14 9l4 -1" />
                                    <path d="M16 16l3.923 -.98" />
                                </svg>
                            </div>
                            <h3 className='cardsbig mt-2'>Books & Library</h3>
                            <p className='cardsm'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center cards card4">
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate-2 icon4" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M10 7h4" />
                                    <path d="M10 18v4l2 -1l2 1v-4" />
                                    <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
                                </svg>
                            </div>
                            <h3 className='cardsbig mt-2'>Certication</h3>
                            <p className='cardsm'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home3 mb-5">
                <div className="col-12"><h1 className='om mt-5 pt-5 fs-1 text-center'>Our Motive</h1></div>
                <div className="omcon">
                    <div className="container">
                        <div className="col-md-9 text-light px-3 pt-5">
                            <h2 className='py-4 tu'>Teaching our students some good skills</h2>
                            <p className='fs-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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

export default Home
