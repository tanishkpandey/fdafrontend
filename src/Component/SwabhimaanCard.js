import React, { Fragment } from 'react';
import "../Css/Swabhimaancard.css";
import card1 from "../Component/crm/assets/images/Card-1.jpg";
import card2 from "../Component/crm/assets/images/TwoCard.jpg";
import card3 from "../Component/crm/assets/images/Swabhimaan-card-2.jpg"
import Cardhead from '../Component/crm/assets/images/Header/Card.jpg'

function SwabhimaanCard() {
    return (
        <Fragment>
            <img src={Cardhead} alt="Card" className='w-100'/>
            <div className="container">
                <div className="container" style={{ minWidth: "50vw", maxWidth: "50vh" }}>
                    <h2 className='fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "White", fontFamily: "poppins", backgroundColor: "green", boxShadow: "2px 2px 0 0 black" }}>Key Feature</h2>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <h1 className='h1 fs-2 fw-bold' style={{ color: 'orange', fontFamily: "sens serif" }}>Swabhimaan Card</h1>

                        <p className='text-start' style={{fontWeight:"500"}}>
                            Wallet balance of 1 lakh rupees starting first capping 10 thousand in 2nd cycle 25 thousand in 3rd cycle 37 thousand and in  4th cycle 76 thousand.
                        </p>
                        <ul className='ms-4'>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>First Emi will have 60 days looking period.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>70 days later first reminder should be sent to user.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>On 90th day they need to pay first Emi, And cycle continues.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Advance payment could also be done</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Minimum once in a financial year it should be used or maintenance charges will be impose as fine of 700 rupees per annum</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Rate of compound interest 2% per annum on failure of emi</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Balance can be added to the wallet via any payment gateway and banking wire system.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Direct recharge can be done by shop as well as from Swabhimaan Kendra.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>And put all required terms and conditions as per by laws of buy now pay later.</li>
                        </ul>
                        <p className='ps-1 pt-2 fs-5 fst-italic fw-bold' style={{ color: "blue" }}>Note: <span className='text-left fs-6'>financial year refers as 1 April to next year 31st march of Christian calendar.</span></p>
                    </div>
                    <div className="col-xl-6 col-lg-6 text-center bg-light">
                        <br /><br />
                        <img src={card1} className='w-100' alt="" />
                    </div>
                </div>


            </div>

<SwabhimaanCard2></SwabhimaanCard2>
<SwabhimaanCard3></SwabhimaanCard3>
<SwabhimaanCard4></SwabhimaanCard4>
        </Fragment>
    )
}
export default SwabhimaanCard



export function SwabhimaanCard2() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 pt-5 mb-5 text-center bg-light">
                        <br /><br />
                        <img src={card2} className='w-100' alt="" />

                    </div>
                    <div className="col-xl-6 col-lg-6">

                        <div className="container">
                            <h2 className='fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "White", fontFamily: "poppins", backgroundColor: "green", boxShadow: "2px 2px 0 0 black" }}>Eligibility Criteria</h2>
                        </div>


                        <h1 className='h1 fs-2 fw-bold' style={{ color: 'orange', fontFamily: "sens serif" }}>Get Your Swabhimaan Card</h1>

                        <ul>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Indian citizenship</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Above 20 yrs to 65 yrs (if borrowed after age window then it will automatically transferred to their son or daughter or wife)</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Valid kyc documents (Aadhar card, pan card, voter id card, school leaving certificate, PDS card per ration card or any doc issued by Govt. official organization).</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Income certificate.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Local address proof (Aadhar, voter id, gram panchayat certificate attested by head authority, domicile certificate, ration card , passport)</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Land possession certificate.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Cibil score. Existing loan borrower.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Live photo.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Applicant must have his own residence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export function SwabhimaanCard3() {
    return (
        <Fragment>
            <div className="container mt-5 p-4">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="container">
                            <h2 className='fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "White", fontFamily: "poppins", backgroundColor: "green", boxShadow: "2px 2px 0 0 black" }}>Offers Through The Card</h2>
                        </div>


                        <h1 className='h1 fs-2 fw-bold' style={{ color: 'orange', fontFamily: "sens serif" }}>Swabhimaan Card Offers</h1>
                        <ul>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>All available agricultural products (seeds, fertilizers organic and inorganic bio products, agricultural chemicals etc).</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>All FMCG products can be purchased available at store.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Buy now pay later option.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Daily consumable products can be purchased.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Emergency financial support system up to 1 lakh rupees cash disbursement terms and conditions applied ( if any sudden death happens to the card holders family or dependents for 1 year ).</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Deposits system.</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Social harmony support system (For the marriage of a child, up to 10 lakh can be availed for 5 years after using the card for 3 years without any EMI failure)</li>
                            <li className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}>Purchasing and selling of crops.</li>
                        </ul>

                    </div>
                    <div className="col-xl-2 col-2 col-lg-2">

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export function SwabhimaanCard4() {
    return (
        <Fragment>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 pt-5 mb-5 text-center bg-light">
                        <br /><br />
                        <img src={card3} height={"250px"} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        
                        <div className="container">
                            <h1 className='fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "White", fontFamily: "poppins", backgroundColor: "green", boxShadow: "2px 2px 0 0 black" }}>Card Will Help People</h1>
                        </div>

                        
                        <h1 className='h1 fs-2 fw-bold' style={{ color: 'orange', fontFamily: "sens serif" }}>Swabhimaan Card By FDA</h1>
                        <p className='ps-1 pt-2 fs-6' style={{textAlign:"justify"}}> Swabhimaan Card by FDA  India is an innovative and revolutionary product in the market these days. It has been designed to provide financial assistance to the country’s people and agricultural businesses along with the every individual personal of country. This card will help people get access to the virtual money they need to purchase their needed supplies and investments for their farm ventures and intraday usable FMCG consumables needed for survivals in society. This card enables people to make payments of up to one lakh rupees without any hassles or lengthy paperwork. This card allows people to instantly pay for their supplies so that they can purchase them immediately and also save time and money. Additionally, this card provides people with access to competitive interest rates and insurance policies that are important for their farm investments.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}