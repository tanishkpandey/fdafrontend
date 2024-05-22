import React, { Fragment, useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import fdalogo from "../../assets/images//LOGO/fdalogo.png"
import dash from "../../assets/images/dash.jpg"

function Dashboard() {

  const Navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (!userData) {
      Navigate("/crm/user/Login-page")
    }
  }, [userData,Navigate])

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top  fw-bold" style={{ backgroundColor: "rgba(29,44,57,.9)" }}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand ms-5 ps-2" to="/"><img src={fdalogo} alt="" height={"75px"} /></Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link text-light" aria-current="page" to="dashboard">DASHBOARD</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link text-light' to="deposit">DEPOSIT</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link text-light' to="withdraw">WITHDRAW</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link text-light' to="loan">LOAN</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link text-light' to="transfer">TRANSFER</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link text-light' to="more">MORE</Link>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-warning" onClick={() => {
                localStorage.clear();
                Navigate("/crm/user/Login-page")
              }}>LOGOUT</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fuild" style={{ height: "22rem", backgroundImage: `url(${dash})`,backgroundPosition:"center" }}>
        <Outlet></Outlet>
      </div>
    </Fragment>
  )
}

export default Dashboard
