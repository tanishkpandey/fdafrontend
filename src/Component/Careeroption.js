import React, { Fragment } from 'react'
import "../Css/Careeroption.css";
import { TfiViewListAlt } from "react-icons/tfi";
import { HiViewGrid } from "react-icons/hi";

function Careeroption() {
    return (
        <Fragment>
            <div className="container-fluid Careerdiv1">
                <h1 className='Ch fw-bold fs-lg-3 fs-sm-6'>Career</h1>
            </div>

            {/* For Input Area */}

            <div className="container border-1 border border-secondary mt-5 text-center text-xxl-start">
               <div className='m-2'>
               <input type="text" className='Keyword' placeholder='Keyword' />
                <select name="catagory" id="catagory" className='catagory'>
                    <option value="hidden">All Job Catagory</option>
                    <option value="Agriculture">Agriculture</option>
                </select>
                <select name="Jobtype" id="Jobtype" className='jobtype'>
                    <option value="hidden">All Job Type</option>
                    <option value="part-time">Part-Time</option>
                    <option value="Full-time">Full-Time</option>
                </select>
                <select name="Joblocation" id="Joblocation" className='joblocation'>
                    <option value="hidden">All Job Location</option>
                    <option value="noida">Noida</option>
                </select>
                <button className='btn btn-primary searchjob'>Search Job</button>
               </div>

            </div>
            <div className="container">
                <div className=" m-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='fs-5 fw-bold '>1 Job Found</h1>
                            <p className='fs-6 fw-bold text-secondary'>Displayed Here:  1-1 Jobs</p>
                        </div>
                        <div className="col-lg-6 text-end d-none d-lg-block d-xl-block d-xxl-block">
                            <span>Views </span>
                            <button className='Clogo2'><TfiViewListAlt size={"1.3rem"} /></button>
                            <button className='Clogo2'><HiViewGrid size={"2rem"} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container border-1 border border-secondary mb-5">
                <div className="row">
                    <div className="col-6">
                        <h1 className='fs-4'>FDA</h1>
                        <p className='fs-5 text-secondary'>FDA</p>
                        <h1 className='fs-4 fw-bold'>Experience:<span className='fs-6 text-secondary'> 2 Years</span></h1> 
                        <h1 className='fs-4 fw-bold'>Location:<span  className='fs-6 text-secondary'> Noida</span></h1>
                    </div>

                    <div className="col-6 text-end">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 className='fs-4 fw-bold'>Deadline:<span className='fs-6 text-secondary'> Close</span></h1> 
                        <h1 className='fs-4 fw-bold'>Job Type:<span  className='fs-6 text-secondary'> Full Time</span></h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Careeroption
