import React, { Fragment } from 'react';
import vill1 from "../Component/crm/assets/images/village1.jpg";
import vill2 from "../Component/crm/assets/images/villunsplash.jpg";
import vill3 from "../Component/crm/assets/images/childunsplash.jpg";
import logo1 from "../Component/crm/assets/images/LOGO/100 natural.png"
import logo2 from "../Component/crm/assets/images/LOGO/eco.png"
import logo3 from "../Component/crm/assets/images/LOGO/healthy.png"
import logo4 from "../Component/crm/assets/images/LOGO/naturalbeauty.png"
import logo5 from "../Component/crm/assets/images/LOGO/organic.png"
import logo6 from "../Component/crm/assets/images/LOGO/secondnatural.png"
import "../Css/Ourblogs.css";

function Ourblogs() {
    return (
        <Fragment>
            <div className="container text-center">
                <h1 className='h1 fs-3 fw-bold' style={{ color: '#bac34e', fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>From Our Blog</h1>
                <h1 className='h1 fw-bold fs-lg-3 fs-sm-6 mt-5' style={{ color: "#0a472e", fontFamily: "poppins" }}>Latest Updated</h1>
            </div>
            <div className="container">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="card" >
                                <img src={vill1} className="card-img-top" alt="..." style={{aspectRatio:"1.5"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Smile Together</h5>
                                    <p className="card-text">text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="card" >
                                <img src={vill2} className="card-img-top" alt="..." style={{aspectRatio:"1.5"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Learn Seeding</h5>
                                    <p className="card-text">text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="card" >
                                <img src={vill3} className="card-img-top" alt="..." style={{aspectRatio:"1.5"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Alone Kid</h5>
                                    <p className="card-text">text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        </Fragment>
    )
}

export default Ourblogs

export function Extralogo(){
    return(
        <Fragment>
            <div className="container mb-5">
                <div className="row text-center fs-1" style={{ fontFamily: "poppins"}}>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo1} alt="" /> </div>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo2} alt="" /> </div>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo3} alt="" /> </div>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo4} alt="" /> </div>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo5} alt="" /> </div>
                    <div className="col-lg-2 lh-1 col-md-4 col-sm-6 imgL"><img src={logo6} alt="" /> </div>
                </div>
                </div>

        </Fragment>
    )
} 
