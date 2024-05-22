import React, { Fragment } from 'react'

function Home() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{ textAlign: 'justify' }}>
                            <div className='fs-3 fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "white", fontFamily: "poppins", backgroundColor: "brown", boxShadow: "2px 2px 0 0 black",maxWidth:"40rem",margin:"0 auto" }}>Meet FDA India: Empowering Change</div>

                            <p className='' style={{ color: "black" }}><b className='text-dark fw-bold'>FDA India</b> was founded in 2022 to address the impact of rising inflation due to the
                                COVID-19 pandemic, which affected the economic strength of each individual personal and
                                agriculture business.
                            </p>
                            <p className='' style={{ color: "black" }}>
                                Our aim is to support each individual person in various ways, ensuring they have access to the resources, funds, knowledge, and technologies needed to improve their livelihoods and agricultural productivity. That is why FDA India introduces <b className='text-dark fw-bold'>Swabhimaan Card </b>and <b className='text-dark fw-bold'> Swabhimaan Kendra</b>, two of its products, so that everyone can get access to funds or products when they need them the most.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
