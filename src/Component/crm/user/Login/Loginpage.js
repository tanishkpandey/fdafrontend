import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fdalogo from "../../assets/images/LOGO/fdalogo.png";
import { IoReturnUpBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Axios from "axios";
import "../../../../Css/Registration.css";

const Loginpage = () => {
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const userData = localStorage.getItem("user");

  useEffect(() => {
    if (!userData) {
      Navigate("/crm/user/Login-page");
    } else {
      Navigate("/crm/user/dashboard");
    }
  }, [userData, Navigate]);

  const fetchuser = (all) => {
    console.log(all);
    setUsername(all.username);
    setPassword(all.password);
    // Axios.post("https://server-3a0j.onrender.com/logs", {
    Axios.post("http://localhost:4000/logs", {
      Username: username,
      Password: password,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.login) {
          localStorage.setItem("user", JSON.stringify(response.data.udata));
          Navigate("/crm/user/dashboard");
        }
        if (response.data.code === 143) {
          setCheckPass(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          fontFamily: "poppins",
          backgroundColor: "#023047",
        }}
      >
        <div className="container">
          <div className="row pt-4">
            <div
              className="col-md-6 d-none d-md-block"
              style={{
                height: "90vh",
                backgroundColor: "#023047",
                paddingTop: "30vh",
                fontFamily: "sans-serif",
                borderRight: "1px solid gray",
              }}
            >
              <p className="fs-1 fw-bold text-center text-white">
                Login Into Your Account
              </p>
              <p className="fs-6 text-center text-white">
                {" "}
                You have to provide all of your valid information as we want.
              </p>
              <p className="text-center">
                <button className="btn btn-primary backbtn">
                  <a className="text-decoration-none" href="/">
                    <IoReturnUpBack /> Back to home
                  </a>
                </button>
              </p>
            </div>
            <div
              className="col-md-6 "
              style={{
                backgroundColor: "#023047",
                borderLeft: "1px solid gray",
              }}
            >
              <div className="top text-center mb-5">
                <a href="/" className="account-logo">
                  <img src={fdalogo} height={"100px"} alt="logo" />
                </a>
              </div>

              <div className={`${checkPass ? "d-block" : "d-none"}`}>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  username or password wrong!
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setCheckPass(false);
                    }}
                  ></button>
                </div>
              </div>

              <form
                className="row g-md-4 text-light"
                onSubmit={handleSubmit(fetchuser)}
              >
                <div className="">
                  <label htmlFor="loginusername" className="form-label">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="loginusername"
                    {...register("username", { required: true })}
                    onChange={(evet) => {
                      setUsername(evet.target.value);
                    }}
                  />
                  {errors.username && (
                    <span className="text-danger fst-italic fw-none">
                      username required
                    </span>
                  )}
                </div>
                <div className="">
                  <label htmlFor="loginpassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginpassword"
                    {...register("password", { required: true })}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  {errors.password && (
                    <span className="text-danger fst-italic fw-none">
                      password required
                    </span>
                  )}
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="mt-2 btn btn-primary w-100 fs-3"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-12 regdiv2">
                  Create an account ? <a href="register"> Register Now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Loginpage;
