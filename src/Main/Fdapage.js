import React, { Fragment } from 'react'
import Banner from '../Component/Banner'
import { Outlet } from 'react-router-dom'

function Fdapage() {
  return (
    <Fragment>
      <Banner/>
      <Outlet/>
    </Fragment>
  )
}

export default Fdapage
