import React, { useState, Fragment } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { IoReturnUpBack } from "react-icons/io5"
import fdalogo from "../../assets/images/LOGO/fdalogo.png"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [checkPass, setCheckPass] = useState(false)
  const navigate = useNavigate()

  const fetchuser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: data.username,
          password: data.password,
        }
      )
      toast.success("Login successful!")
      navigate("/dashboard")
    } catch (error) {
      console.error("Login failed", error.response.data)
      toast.error("Login failed. Please check your username or password.")
      setCheckPass(true)
    }
  }

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
                You have to provide all of your valid information as we want.
              </p>
              <p className="text-center">
                <button className="btn btn-primary backbtn">
                  <a className="text-decoration-none text-white" href="/">
                    <IoReturnUpBack /> Back to home
                  </a>
                </button>
              </p>
            </div>
            <div
              className="col-md-6"
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

              {checkPass && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  Username or password wrong!
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setCheckPass(false)
                    }}
                  ></button>
                </div>
              )}

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
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                  />
                  {errors.username && (
                    <span className="text-danger fst-italic fw-none">
                      Username required
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
                      setPassword(event.target.value)
                    }}
                  />
                  {errors.password && (
                    <span className="text-danger fst-italic fw-none">
                      Password required
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
  )
}

export default Login
