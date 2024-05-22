import React, { Fragment } from 'react';
import Karousal from '../Component/Karousal';
import Home2, { Home3 } from '../Component/Home2';
import Thoughts from '../Component/Thoughts';
import Whyus from '../Component/Whyus';
// import Ourgoal from '../Component/Ourgoal';
import Ourblogs, { Extralogo } from '../Component/Ourblogs';
import Footer from "../Component/Footer";
// import Banner from '../Component/Banner';
import Home from '../Component/Home';


function LandingPage() {
  
  return (
    <Fragment>
        <Karousal></Karousal>
        <Home></Home>
        <Home2></Home2>
        <Home3></Home3>
        <Thoughts></Thoughts>
        <Whyus></Whyus>
        <Ourblogs></Ourblogs>
        <Extralogo></Extralogo>
        <Footer></Footer>
    </Fragment>
  )
}

export default LandingPage
