import React, { Fragment } from 'react'
import image1 from "../Component/crm/assets/images/slides/card web page.jpg";
import image2 from "../Component/crm/assets/images/slides/grocery.jpg";
import image3 from "../Component/crm/assets/images/slides/ORGANIC WEB.jpg";
import image4 from "../Component/crm/assets/images/slides/mission.jpg";
import "../Css/Marquees.css";
function Karousal() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="container d-block d-xxl-none d-xl-none">
                    <Marquees2></Marquees2>
                </div>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 d-none d-xxl-block d-xl-block">
                        <h5 className='text-center text-white rounded p-2' style={{ backgroundColor: "#ab183d" }}>Important Notice</h5>
                        <Marquees1></Marquees1>
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-sm-12 col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="3500">
                                    <img src={image1} className="d-block w-100 imgp" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3500">
                                    <img src={image2} className="d-block w-100 imgp" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3500">
                                    <img src={image3} className="d-block w-100 imgp" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3500">
                                    <img src={image4} className="d-block w-100 imgp" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Karousal

export function Marquees1() {
    return (
        <Fragment>
            <div className="Marquesdiv1 border border-2">
                <h2 className='para fs-6 text-center' style={{ color: "rgb(241, 114, 9)", fontWeight: "bold", fontFamily: "'Times New Roman', Times, serif" }}>
                    ONLY BIHAR AND JHARKHAND PEOPLE CAN APPLY FOR NOW.
                </h2>
            </div>
        </Fragment>
    )
}
export function Marquees2() {
    return (
        <Fragment>
            <div className="Marquesdiv2">
                <div className="marquee">
                    <span>ONLY BIHAR AND JHARKHAND PEOPLE CAN APPLY FOR NOW.</span>
                </div>
            </div>
        </Fragment>
    )
}