import React, { Fragment } from 'react';
import "../Css/Swabhimaancard.css";
import Kendrahead from '../Component/crm/assets/images/Header/Kendra.jpg'

function Kendra() {
    return (
        <Fragment>
            <img className='w-100' src={Kendrahead} alt="Kendra" />
            <div className="container sw">
                <div className="container" style={{textAlign:"justify",minWidth:"50vw",maxWidth:"50vh"}}>
                    <h1 className='fw-bold mt-5 mb-5 text-center rounded p-2' style={{textAlign:"justify", color: "White", fontFamily: "poppins", backgroundColor: "blue", boxShadow: "2px 2px 0 0 black" }}>Swabhimaan Kendra</h1>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <h1 className='h1 fs-3 fw-bold' style={{textAlign:"justify", color: '#bac34e', fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>Eligibility Criteria</h1>
                        <p className='text-start ms-2 mt-3 fs-5 fw-bold' style={{textAlign:"justify", fontFamily: "poppins", color: "black" }}>Eligibility Criteria For Opening Swabhimaan Kendra</p>
                        <ul className='ms-4'>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>Interested candidate must have their own space of a minimum of 300 to 3000 sqft.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>The corporation would only offer the initial stock amount, which is up to 5 lakh. You must provide your funding amount if you wish to Increase or refill your stock. </li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>The candidate should be an Indian citizen and must be older than 23 years.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>Candidates should have local residences and be willing to be active on the system for at least 8 hours with the biometrics login.</li>
                        </ul>
                    </div>
                    <div className="col-xl-12 col-lg-12 text-center">
                    </div>
                </div>
            </div>
            {/*Second Part*/}
            <div className="container p-4">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pt-5 mb-5 text-center">
                    </div>
                    <div className="col-xl-12 col-lg-12">
                        
                        <div className="container" style={{textAlign:"justify",minWidth:"50vw",maxWidth:"50vh"}}>
                            <h1 className='fw-bold mb-5 text-center rounded p-2' style={{textAlign:"justify", color: "White", fontFamily: "poppins", backgroundColor: "blue", boxShadow: "2px 2px 0 0 black" }}>Advantages</h1>
                        </div>

                        <p className='text-start ms-2 mt-3 fs-5 fw-bold' style={{textAlign:"justify", fontFamily: "poppins", color: "black" }}>Advantages of Owning Swabhimaan Kendra</p>
                        <ol type='number'>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>Our company is your one-stop destination for all farming-related needs. From seeds and fertilizers to equipment and tools, we stock a diverse range of high-quality items essential for successful agriculture. With our comprehensive inventory, people can find everything they need conveniently under one roof, saving time and ensuring they have access to the best resources for their operations. Whether you're a small-scale people or managing a large agricultural enterprise, rely on us to provide the broad range of products necessary to support your growth and success.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>Our organization specializes in facilitating smooth transactions for people by providing a varied range of products adapted to their requirements. We are capable of procuring and distributing a wide range of products, including agricultural equipment, livestock feed, and crop supplies. With a comprehensive grasp of farming needs and a commitment to quality and cost, we act as a reliable partner for people, ensuring they have access to the tools they need for successful production. From purchase to delivery, we're with people every step of the way, allowing them to focus on what they do best: caring for their land and communities.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>At our company, we believe in providing exceptional value to our customers. That's why we're committed to offering goods and services at prices lower than the prevailing market rates. By keeping our costs competitive without compromising on quality, we aim to make essential products and services more accessible to everyone. Whether you're a people in need of supplies or a business seeking cost-effective solutions, you can trust us to deliver affordability without sacrificing excellence. Experience the difference with our commitment to fair pricing and exceptional value.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>DP will have a margin value of up to 30 per cent depending on the product region / or segment.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>Availability of all FMCG products on preceding demand.</li>
                            <li className='ps-1 pt-2 fs-6 fst-italic' style={{textAlign:"justify" }}>We recognize the critical role agriculture plays in our communities and economies. That's why we're committed to assisting people and agricultural enterprises by providing subsidies and financial help for the purchase of necessary supplies. Whether it's seeds, equipment, or fertilizers, we're here to make sure people have everything they need to succeed. We are happy to be a valued partner in developing growth and prosperity in the agricultural sector, thanks to our commitment to promoting sustainable agriculture and supporting rural livelihoods.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Kendra


