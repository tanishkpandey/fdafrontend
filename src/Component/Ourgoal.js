import { React, Fragment } from 'react';
import fda1 from "../Component/crm/assets/video/fda.mp4";

function Ourgoal() {
    return (
        <Fragment>
            <div className="container mt-3 mb-3">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h1 className='h1 fs-3 fw-bold' style={{ color: '#bac34e', fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>Why Choose Us</h1>
                        <h1 className='h1 fw-bold fs-lg-3 fs-sm-6 mt-5' style={{ color: "#0a472e", fontFamily: "poppins" }}>Our goal is to provide better services to people</h1>
                        <p className='fs-4'>Our goal is to provide better services to people and FMCG companies while also helping them to reduce their costs and maximize their profits. We will be focusing on providing people with access to innovative technologies, the latest agricultural practices, and the best quality inputs. In addition, we will also be working on developing and implementing efficient supply chain management practices for FMCG companies.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <video className="elementor-video" height={"550px"} width={"100%"} src={fda1} autoPlay loop muted="muted" controlsList="nodownload"></video>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Ourgoal
