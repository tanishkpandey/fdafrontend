import React, { Fragment } from 'react';
import card2 from "../Component/crm/assets/images/Swabhimaan-card-2.jpg";
import { FaPiedPiperPp } from "react-icons/fa";
import { FaHandHoldingDollar, FaBowlFood } from "react-icons/fa6";
import '../Css/Home2.css';
import arrow1 from "../Component/crm/assets/images/arraw1.png";
import arrow2 from "../Component/crm/assets/images/arrow2.png";

function Home2() {
    return (
        <Fragment>
            <div className="container">
                <div className="row g-2 g-lg-3">
                    <div className="col-12 text-center" style={{ font: "16px" }}>
                        <img className="" src={card2} alt="" style={{ height: "20em", width: "20em" }} />
                    </div>
                </div>
            </div>
            <div className="m-5 d-lg-none d-xl-none d-xxl-none"></div>
        </Fragment>
    )
}

export default Home2

export function Home3() {
    return (
        <Fragment>
            <div className="mt-3 container text-center mb-5">
                <div className="homediv1 d-none d-xl-block">
                    <img src={arrow1} alt="" />
                </div>
                <div className="homediv2 d-none d-xl-block">
                    <img src={arrow2} alt="" />
                </div>
                <div className="d-lg-flex justify-content-between">
                    <div className="">
                        <FaHandHoldingDollar id='Fahandhold' color='#0a472e' size={"3rem"} />
                        <h1 className='pt-4 fs-6 fw-bold' color='#0a472e'>Need to purchase</h1>
                        <p className='p-3 text-dark'>This card will help people get access to the virtual money they need to purchase their needed supplies and investments for their farms.</p>
                    </div>

                    <div className="">
                        <FaBowlFood id='Fahandhold' color='#0a472e' size={"3rem"} />
                        <h1 className='pt-4 fs-6 fw-bold' color='#0a472e'>People to make payments</h1>
                        <p className='p-3 text-dark'>This card allows people to instantly pay for their supplies so that they can purchase them immediately and also save time and money.</p>

                    </div>

                    <div className="">
                        <FaPiedPiperPp id='Fahandhold' color='#0a472e' size={"3rem"} />
                        <h1 className='pt-4 fs-6 fw-bold' color='#0a472e'>Insurance policies</h1>
                        <p className='p-3 text-dark'>Additionally, this card provides people with access to competitive interest rates and insurance policies that are important for their farm investments.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
