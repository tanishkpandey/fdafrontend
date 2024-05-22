import React, { Fragment, useRef, useState } from "react"
import "../../../../Css/Registration.css"
import { IoReturnUpBack } from "react-icons/io5"
import Axios from "axios"
import fdalogo from "../../assets/images/LOGO/fdalogo.png"
import { toast } from "react-hot-toast"
function Registrationpage() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    state: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    correct: false,
    isChecked: false,
  })

  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      username,
      email,
      state,
      mobile,
      password,
      confirmPassword,
      isChecked,
    } = formValues

    if (
      !username ||
      !email ||
      !state ||
      !mobile ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all required fields.")
      return
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    if (!isChecked) {
      alert("Please agree to the terms and conditions")
      return
    }

    const formData = {
      username,
      email,
      state,
      mobile,
      password,
      confirmPassword,
    }

    console.log("Form Data:", formData)

    Axios.post("http://localhost:4000/api/users/register", formData)
      .then((response) => {
        const work = response.data
        toast.success("Registered Successfully!")
        console.log(work)
        setFormValues({
          ...formValues,
          check: work.check,
          uname: username,
        })
        if (work.check) {
          formRef.current.reset()
        }
        if (response.data.errno === 1062) {
          setFormValues({
            ...formValues,
            
            dup: "User Exist! Change username or email!",
          })
        } else {
          setFormValues({
            ...formValues,
            dup: "",
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })

    setFormValues({
      username: "",
      email: "",
      state: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      correct: false,
      uname: "",
      dup: "",
      check: false,
      isChecked: false,
    })
  }

  return (
    <Fragment>
      <div
        className="container-fluid"
        style={{
          height: "115vh",
          fontFamily: "poppins",
          backgroundColor: "#023047",
        }}
      >
        <div className="container">
          <div className="row pt-4">
            <div
              className="col-md-6 d-none d-md-block"
              style={{
                height: "100vh",
                backgroundColor: "#023047",
                paddingTop: "30vh",
                fontFamily: "sans-serif",
                borderRight: "1px solid gray",
              }}
            >
              <p className="fs-1 fw-bold text-center text-white">
                Create New Account
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
              className="col-md-6 text-start"
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

              <div className={`${formValues.check ? "d-block" : "d-none"}`}>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{formValues.uname}</strong> registered successfully!
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setFormValues({ ...formValues, check: false })
                    }}
                  ></button>
                </div>
              </div>

              <form
                className="row g-md-4 text-light"
                ref={formRef}
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="inputusername" className="form-label">
                    Username <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputusername"
                    name="username"
                    pattern="[a-z0-9]+"
                    title="Username must contain only lowercase letters"
                    required
                    value={formValues.username}
                    onChange={handleChange}
                  />
                  <span
                    className="text-danger fst-italic"
                    style={{ fontSize: "15px" }}
                  >
                    {formValues.dup}
                  </span>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputemail" className="form-label">
                    E-Mail Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputemail"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    State <span className="text-danger">*</span>
                  </label>
                  <select
                    id="inputState"
                    name="state"
                    className="form-select text-secondary"
                    required
                    value={formValues.state}
                    onChange={handleChange}
                  >
                    <option hidden>State</option>
                    <option value="bihar">Bihar</option>
                    <option value="jharkhand">Jharkhand</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputmobile" className="form-label">
                    Mobile <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputmobile"
                    name="mobile"
                    pattern="\+91[0-9]{10}"
                    title="Mobile number must start with +91"
                    required
                    value={formValues.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputpassword" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputpassword"
                    name="password"
                    minLength="6"
                    required
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputconfirmPassword" className="form-label">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputconfirmPassword"
                    name="confirmPassword"
                    required
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <span
                    className={`fst-italic text-danger ${
                      formValues.correct ? "d-block" : "d-none"
                    }`}
                  >
                    Password not matched!
                  </span>
                </div>
                <div className="col-md-12 regdiv2 ms-2 pt-1">
                  <input
                    type="checkbox"
                    name="isChecked"
                    checked={formValues.isChecked}
                    onChange={handleChange}
                  />{" "}
                  I agree to the <a href="/">company policy</a>,
                  <a href="/">privacy policy</a>, and
                  <a href="/">terms and conditions</a>
                  <br />
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="mt-2 btn btn-primary w-100 fs-4"
                  >
                    Register
                  </button>
                  <button
                    type="reset"
                    className="mt-2 btn btn-primary w-100 fs-4"
                  >
                    Reset
                  </button>
                </div>
                <div className="col-md-12 regdiv2">
                  Already have an account? <a href="Login-page">Login Now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Registrationpage
