import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Fee = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="fee1 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-evenly ">
                    <p className='welcome'>Fee Structure of Digix</p>
                    <h1 className='maintxt'>Digix offers affordable fee structure</h1>
                    <NavLink to={'/admissionform'} className='btn btn-lg mainbtn  allbtns'>Enroll Now</NavLink>
                </div>
            </div>
            <div className='fee2'>
                <div className="container text-center ">
                    <div className="col-12"><h1 className='om mt-5 mb-3 pt-5 fs-1 text-center'>Fee Structure</h1></div>
                    <table className='table text-center '>
                        <tr className='bold'>
                            <th className="th">Courses</th>
                            <th className="th">Duration</th>
                            <th className="th">1st Installment</th>
                            <th className="th">2nd Installment</th>
                            <th className="th">3rd Installment</th>
                            <th className="th">Total Fee</th>
                        </tr>
                        <tr>
                            <th className="th">Web Development</th>
                            <td className="td">6 Months</td>
                            <td className="td">20,000</td>
                            <td className="td">20,000</td>
                            <td className="td">10,000</td>
                            <td className="td">50,000</td>
                        </tr>
                        <tr>
                            <th className="th">App Development</th>
                            <td className="td">6 Months</td>
                            <td className="td">40,000</td>
                            <td className="td">40,000</td>
                            <td className="td">20,000</td>
                            <td className="td">100,000</td>
                        </tr>
                        <tr>
                            <th className="th">Game Development</th>
                            <td className="td">12 Months</td>
                            <td className="td">50,000</td>
                            <td className="td">50,000</td>
                            <td className="td">50,000</td>
                            <td className="td">150,000</td>
                        </tr>
                        <tr>
                            <th className="th">Amazon Dropshipping</th>
                            <td className="td">6 Months</td>
                            <td className="td">40,000</td>
                            <td className="td">40,000</td>
                            <td className="td">20,000</td>
                            <td className="td">100,000</td>
                        </tr>
                        <tr>
                            <th className="th">Shopify Dropshipping</th>
                            <td className="td">6 Months</td>
                            <td className="td">40,000</td>
                            <td className="td">40,000</td>
                            <td className="td">20,000</td>
                            <td className="td">100,000</td>
                        </tr>
                        <tr>
                            <th className="th">Digital Marketing</th>
                            <td className="td">6 Months</td>
                            <td className="td">15,000</td>
                            <td className="td">15,000</td>
                            <td className="td">10,000</td>
                            <td className="td">40,000</td>
                        </tr>
                        <tr>
                            <th className="th">Graphic Designing</th>
                            <td className="td">6 Months</td>
                            <td className="td">40,000</td>
                            <td className="td">40,000</td>
                            <td className="td">20,000</td>
                            <td className="td">100,000</td>
                        </tr>
                        <tr>
                            <th className="th">English Spoken</th>
                            <td className="td">4 Months</td>
                            <td className="td">7,000</td>
                            <td className="td">7,000</td>
                            <td className="td">6,000</td>
                            <td className="td">20,000</td>
                        </tr>
                        <tr>
                            <th className="th">Artificial Intelligence</th>
                            <td className="td">6 Month</td>
                            <td className="td">100,000</td>
                            <td className="td">50,000</td>
                            <td className="td">50,000</td>
                            <td className="td">200,000</td>
                        </tr>
                    </table>
                    <NavLink to={'/admissionform'} className='btn btn-md mainbtn my-5 allbtns'>Enroll Now</NavLink>
                </div>
            </div>
        </>
    )
}
