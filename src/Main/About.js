import React, { Fragment } from 'react'
import Aboutus, { Ourvision, Ourmission, Howwework, Oursupply } from '../Component/Aboutus'
import Footer from '../Component/Footer'
import Abouthead from "../Component/crm/assets/images/Header/ABOUTUS.jpg"

// .Swdiv1{
//   height: 50vh;
//   width: 100%;
//   background-color: rgb(225, 178, 91);
// }

// .Sw{
//   padding-top: 8rem;
//   text-align: center;
//   font-family: poppins;
//   color: rgb(24, 91, 5);
//   letter-spacing: .5px;
// }
function About() {
  return (
    <Fragment>
        <img className='w-100' src={Abouthead} alt="" />
      <div className="mt-3" style={{ margin: "0 auto", width: "96%" }}>
        <Aboutus></Aboutus>
        <Ourvision></Ourvision>
        <Ourmission></Ourmission>
        <Howwework></Howwework>
        <Oursupply></Oursupply>
        <Footer></Footer>

      </div>
    </Fragment>
  )
}

export default About
