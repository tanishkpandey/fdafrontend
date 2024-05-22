import React, { Fragment, useState } from 'react';
import "../../../Css/Kyc-form.css";
import states from '../../JsonFile/Stateanddistrict.json';



function Kycform() {

    const [show, setShow] = useState("d-block")
    const statedata = states.states;
    return (
        <Fragment>
            <h1 className='text-center text-white fs-2' style={{ paddingTop: "10rem", height: "15rem" }}>KYC FROM</h1>
            <br />
            <div className="container-fluid p-5 kyccontainer-fluid">
                <div className="container kyccontainer">
                    <form className='p-3' method='get'>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="father-name">Name of Father</label>
                            <input type="text" className="form-control kyctext" id="father-name" name="father-name" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="mother-name">Name of Mother</label>
                            <input type="text" className="form-control kyctext" id="mother-name" name="mother-name" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel'>Gender</label>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-male" value="male" />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-male">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-female" value="female" />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-female">Female</label>
                            </div>
                            <div className="form-check">
                                <input className="ms-1 form-check-input" type="radio" name="gender" id="gender-other" value="other" />
                                <label className="ms-1 kyclabel form-check-label" htmlFor="gender-other">Other</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel ' htmlFor="state">State</label>
                            <select className="form-control marital" id="state" name="state">
                                <option disabled>Select State </option>
                                {statedata.map((d, a) => {
                                    return (
                                        <option value={d.state}>{++a+". "} {d.state}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel ' htmlFor="state">State</label>
                            <select className="form-control marital" id="state" name="state">
                                <option disabled>Select district </option>
                                {statedata.map((d, a) => {
                                    return (
                                        <option value={d.state}>{++a+". "} {d.state}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="marital-status">Marital status</label>
                            <select className="form-control marital" id="marital-status" name="marital-status" onChange={(e) => {
                                if (e.target.value === "married") {
                                    setShow("d-block");
                                }
                                else {
                                    setShow("d-none");
                                }
                            }}>
                                <option value="married">Married</option>
                                <option value="unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className={`mb-3 ${show} `} id='kycwife'>
                            <label className='kyclabel' htmlFor="spouse-name">Wife Name</label>
                            <input type="text" className="form-control kyctext" id="spouse-name" name="spouse-name" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="blood-group">Blood Group</label>
                            <input type="text" className="form-control kyctext" id="blood-group" name="blood-group" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="qualification">Qualification</label>
                            <input type="text" className="form-control kyctext" id="qualification" name="qualification" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="medical-history">Medical history</label>
                            <input type="text" className="form-control kyctext" id="medical-history" name="medical-history" />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel form-label' htmlFor="formFileMd">Id proof</label>
                            <input className="form-control form-control-md" id="formFileMd" type="file" />
                        </div>

                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="domecile">Domecile certificate</label>
                            <input className="form-control form-control-md" id="domecile" name="domecile" type="file" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="adharcard">Aadhar Card</label>
                            <input type="file" className="form-control form-control-md" id="adharcard" name="adharcard" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="pancard">Pan card</label>
                            <input className="form-control form-control-md" type="file" id="pancard" name="pancard" />
                        </div>
                        <div className="mb-3">
                            <label className='kyclabel' htmlFor="lpc">LPC Type File</label>
                            <input type="file" className="form-control form-control-md" id="lpc" name="lpc" />
                        </div>
                        <button type="submit" className="btn w-100 text-light" style={{ backgroundColor: "#336699" }}>Submit</button>
                    </form>

                </div>
            </div>
        </Fragment>
    )
}

export default Kycform
