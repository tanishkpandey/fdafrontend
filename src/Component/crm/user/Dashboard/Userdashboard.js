import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../../../Css/Userdashboard.css";


function Userdashboard() {
    const [date, setDate] = useState(new Date());
    const Navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!userData) {
            Navigate("/crm/user/Login-page")
        }
    }, [userData, Navigate])

    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Dashboard</h1>
            <div className="container mt-5 pt-5">
                <div className="row pt-5">
                    <div className="col-12">
                        <h4 className='text-end'>{date.toLocaleTimeString('en-US', { hour12: true })}</h4>
                        <div class="card text-white mb-3" style={{ backgroundColor: "#023047" }}>
                            <div class="card-header fs-4">KYC Verification required</div>
                            <div class="card-body">
                                <p class="card-text">Dear User, we need your KYC Data for some action. Don't hesitate to provide KYC Data, It's so much potential for us too. Don't worry, it's very much secure in our system.</p>
                                <Link class="text-decoration-none fs-5" to="/crm/user/kyc-form">Click Here to Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-xxl4 col-xl-4 col-lg-12">
                        <div class="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div class="card-body text-start">
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div class="fs-6" >Username:  </div>
                                    <div className='fs-6 fst-italic text-warning'>{userData[0].username}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div class="fs-6" >Email:  </div>
                                    <div className='fs-6 fst-italic text-warning'>{userData[0].email}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div class="fs-6" >Mobile: </div>
                                    <div className='fs-6 fst-italic text-warning'> {userData[0].mobile}</div>
                                </div>
                                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <div class="fs-6" >State: </div>
                                    <div className='fs-6 fst-italic text-warning'>{userData[0].state}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div class="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div class="card-body text-center">
                                <div class="fs-6 pt-2 pb-3" >Account Number</div>
                                <h4>{userData[0].token}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div class="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div class="card-body text-center">
                                <div class="fs-6 pt-2 pb-3">Available Balance</div>
                                <h4>₹0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deposit withdraw transfer loan */}
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div class="card text-white mb-3 dwtb">
                            <div class="card-body text-start" style={{ height: "8rem" }}>
                                <div class="fs-6 pt-3 pb-3">₹0.00</div>
                                <span className='fs-6 fw-bold'>Deposits</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                        <div class="card text-white mb-3 dwtb">
                            <div class="card-body text-start">
                                <div class="fs-6 pt-3 pb-3">₹0.00</div>
                                <span className='fs-6 fw-bold'>Withdrawals</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4">
                        <div class="card text-white mb-3 dwtb">
                            <div class="card-body text-start">
                                <div class="fs-5 pt-3 pb-3">0</div>
                                <span className='fs-6 fw-bold'>Transactions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12">
                        <div class="card text-white mb-3" style={{ backgroundColor: "#023047", height: "8rem" }}>
                            <div class="card-body text-start">
                                <div class="fs-5 pt-3 pb-3">0</div>
                                <span className='fs-6 fw-bold'>Borrow Money</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-xxl-block d-xl-block"></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center bg-dark text-light'>
                            Date: 
                            {date.toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                        })}
                        </h1>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Userdashboard
