import React, { Fragment } from 'react'

function Deposit() {
    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>Deposit History</h1>
            <div className="container-fluid pt-5">
                <div className="row mt-5 pt-5">
                    <div className="col d-none d-xxl-block d-xl-block"></div>
                    <div className="col d-flex" style={{ height: "50px",justifyContent:"space-evenly" }}>
                        <div>
                            <button className='btn btn-primary fw-bold text-light' style={{ fontSize: "12px",height:"50px" }}>+Deposit Now</button>
                        </div>
                        <div className='d-flex'>
                            <input type='text' className='form-control' placeholder='TRX No..' style={{ boxShadow: "none", borderTopRightRadius: "0", borderBottomRightRadius: "0" }} />
                            <button className='btn btn-outline-info btn-success text-white' style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }} >Search</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mt-5">
                <div class="d-flex text-center rounded-top text-light fw-bold" style={{ backgroundColor: "rgb(2,41,71)" }}>
                    <div class="p-3 flex-fill">S.N.</div>
                    <div class="p-3 flex-fill">GATEWAY | TRX NO.</div>
                    <div class="p-3 flex-fill">INITIATED</div>
                    <div class="p-3 flex-fill">AMOUNT</div>
                    <div class="p-3 flex-fill">CONVERSION</div>
                    <div class="p-3 flex-fill">STATUS</div>
                    <div class="p-3 flex-fill">DETAILS</div>
                </div>
                <div class="d-flex text-center rounded-bottom text-light fw-bold" style={{ backgroundColor: "gray" }}>
                    <div class="p-3 flex-fill"></div>
                    <div class="p-3 flex-fill"></div>
                    <div class="p-3 flex-fill"></div>
                    <div class="p-3 flex-fill">no data found</div>
                    <div class="p-3 flex-fill"></div>
                    <div class="p-3 flex-fill"></div>
                    <div class="p-3 flex-fill"></div>
                </div>
            </div> */}
        </Fragment>
    )
}

export default Deposit
