import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

function Usersdata() {
    const [sv, setfunc] = useState([]);

    // useEffect(() => {
    //     axios.get("https://fdaindiaserver-0gng.onrender.com /yourdata").then((d) => {
    //         console.log(d.data);
    //         setfunc(d.data);
    //     });
    // }, [])

    return (
        <Fragment>
            <div className='container-fluid'>
                <h1 className='text-center text-danger'># Database #</h1>
                <div className="container mt-5 text-end">
                    <table class="table text-start">
                        <thead>
                            <tr>
                                <th scope='col'>Sno</th>
                                <th scope='col'>Key</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">State</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        {sv.map((p, a) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{++a}</td>
                                        <td>{p.id}</td>
                                        <td>{p.username}</td>
                                        <td>{p.email}</td>
                                        <td>{p.state}</td>
                                        <td>{p.mobile}</td>
                                        <td>{p.password} & {p.confirmpassword}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                    <button className='btn btn-warning'><a className='boder-none text-danger' href="/">Back To Home</a></button>
                </div>
            </div>
        </Fragment>
    )
}

export default Usersdata
