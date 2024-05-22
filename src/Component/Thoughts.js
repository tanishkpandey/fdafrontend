import React from 'react'
import { Fragment } from 'react';
import "../Css/Thought.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



function Thoughts() {
    return (
        <Fragment>
            <div className="container-fluid p-5" style={{ backgroundColor: "#fdf4eb" }}>
                <div className="container">
                    <div id="carouselExampleIndicators2" className="carousel slide text-center" data-bs-ride="carousel">
                        <div className="carousel-indicators text-center">
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active w-100 part1">
                                <img src="https://fdaindia.in/wp-content/uploads/2023/08/dp.png" style={{ height: "65px", width: "65px" }} alt="..." />
                                <div className="carousel-caption">
                                    <p className="text-dark">This card enables people to swiftly pay for supplies, saving time and money. It also grants access to competitive interest rates and crucial insurance policies for farm investments.</p>

                                    <h5 className='text-dark'>Satish Kumar</h5>
                                </div>
                            </div>
                            <div className="carousel-item w-100 part2">
                                <img src="https://fdaindia.in/wp-content/uploads/2023/08/dp.png" className="" style={{ height: "65px", width: "65px" }} alt="..." />
                                <div className="carousel-caption">
                                    <p className='text-dark'>This card additionally rewards people for increased usage and offers the flexibility of buying now and paying later, ensuring easier access to funds when needed.</p>
                                    <h5 className='text-dark'>Santosh</h5>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span className="Sleft" ><FaArrowLeft className='arrow' size={"1.5rem"} /></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span className='Sright'><FaArrowRight className='arrow' size={"1.5rem"} /></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Thoughts
