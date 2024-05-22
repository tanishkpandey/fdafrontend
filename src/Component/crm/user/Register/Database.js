import Axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const Database = () => {
    const [datas, setdatas] = useState("");

 console.log(datas)

    useEffect(() => {
        // Axios.get("https://server-3a0j.onrender.com/yourdata").then((e) => {
            Axios.get("http://localhost:4000/api/users/getusers").then((e) => {
            console.log(e.data)
            setdatas(e.data);
        });
    }, []);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="container text-center">
                    <h1 className='card '>This is Database</h1>
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Id</th>
                                <th scope='col'>Username</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>State</th>
                                <th scope='col'>Mobile</th>
                                <th scope='col'>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                           

                        </tbody>
                    </table>
                </div>

            </div>
        </Fragment>
    )
}

export default Database
