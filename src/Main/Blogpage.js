import React, { Fragment } from 'react';
import blog1 from '../Component//crm/assets/images/Blogs/blog1.JPG'
import { Link } from 'react-router-dom';

function Blogpage() {
    return (
        <Fragment>
            <div className="container-fluid ">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-2">
                            <div className="card" style={{ width: "auto" }}>
                                <img src={blog1} className="card-img-top p-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Swabhimaan Card: Your Key to Success</h5>
                                    <p className="card-text" style={{ textAlign: "justify" }}><br /> FDA India introduces <b>SWABHIMAAN CARD</b> to every individual and agricultural business.
                                        With this card, they will get enough credit for their farming and business activities.
                                        Even today, the majority of our nation's population is still dependent on agriculture, and their
                                        economic condition is still very bad. If they need money for agriculture or any other reason,
                                        then they have only two options: -</p>
                                    <button className='btn btn-primary'><Link to="/Blogger-page/blog1-data" style={{ textDecoration: "none",color:"white" }}>Read more..</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-2">
                            <div className="card" style={{ width: "auto" }}>
                                <img src={blog1} className="card-img-top p-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Swabhimaan Card: Your Key to Success</h5>
                                    <p className="card-text" style={{ textAlign: "justify" }}><br /> FDA India introduces <b>SWABHIMAAN CARD</b> to every individual and agricultural business.
                                        With this card, they will get enough credit for their farming and business activities.
                                        Even today, the majority of our nation's population is still dependent on agriculture, and their
                                        economic condition is still very bad. If they need money for agriculture or any other reason,
                                        then they have only two options: -</p>
                                    <button className='btn btn-primary'>Read more..</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-2">
                            <div className="card" style={{ width: "auto" }}>
                                <img src={blog1} className="card-img-top p-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Swabhimaan Card: Your Key to Success</h5>
                                    <p className="card-text" style={{ textAlign: "justify" }}><br /> FDA India introduces <b>SWABHIMAAN CARD</b> to every individual and agricultural business.
                                        With this card, they will get enough credit for their farming and business activities.
                                        Even today, the majority of our nation's population is still dependent on agriculture, and their
                                        economic condition is still very bad. If they need money for agriculture or any other reason,
                                        then they have only two options: -</p>
                                    <button className='btn btn-primary'>Read more..</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-2">
                            <div className="card" style={{ width: "auto" }}>
                                <img src={blog1} className="card-img-top p-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Swabhimaan Card: Your Key to Success</h5>
                                    <p className="card-text" style={{ textAlign: "justify" }}><br /> FDA India introduces <b>SWABHIMAAN CARD</b> to every individual and agricultural business.
                                        With this card, they will get enough credit for their farming and business activities.
                                        Even today, the majority of our nation's population is still dependent on agriculture, and their
                                        economic condition is still very bad. If they need money for agriculture or any other reason,
                                        then they have only two options: -</p>
                                    <button className='btn btn-primary'>Read more..</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Blogpage
