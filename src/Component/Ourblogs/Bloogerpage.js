import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'


function Bloogerpage() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default Bloogerpage;
