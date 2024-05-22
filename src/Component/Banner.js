import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import fdalogo from "../Component/crm/assets/images/LOGO/fdalogo.png";
import '../Css/Banner.css'

function Banner() {
    // const [bhome, setBhome] = useState("");
    // const [babout, setBabout] = useState("");
    // const [bcard, setBcard] = useState("");
    // const [bkendra, setBkendra] = useState("");
    // const [bcareer, setBcareer] = useState("");

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand ms-xxl-5 ms-xl-5 ms-lg-5 ps-2" to="/"><img src={fdalogo} alt="logo Of FDAIndia" height={"75px"} /></NavLink>
                    <div className="collapse navbar-collapse ps-xxl-5 ps-xl-5 ps-lg-2" id="navbarNavDropdown">
                        <ul className="navbar-nav ps-xxl-5 ps-xl-5 ps-lg-2 d-flex">
                            <li className="nav-item ps-xxl-5 ps-xl-5 ps-lg-2">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" exact to="/" > Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" to="/About-us" > About Us </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" to="/Swabhimaan-card" > Swabhimaan Card </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" to="/Swabhimaan-Kendra" > Swabhimaan Kendra</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" to="/Career" > Career</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3' activeClassName="active" to="/Our-blogs" > Our Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link fw-bold ps-3 pe-3 rounded text-light Bapply' to="/crm/user/register" style={{backgroundColor:"#ab183d",transition:"transform 100ms"}} > Apply Online </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Banner


export function Bannershopyourdream() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand ms-5 ps-2" to="/"><img src={fdalogo} alt="" height={"75px"} /></Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-5">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" aria-current="page" to="/About-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" to="/Swabhimaan-card">Swabhimaan Card</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" to="/Swabhimaan-Kendra">Swabhimaan Kendra</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" to="/Career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" to="/crm/user/register">Apply Online</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold p-4" style={{ color: "#a8b324" }} to="/products">Shop Your Dream</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link fw-bold p-4 bapply" to="/Database">Database</Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}