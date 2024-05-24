import "./Css/Style.css"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/js/bootstrap.bundle"
import React, { Suspense, lazy } from "react"
import Fallbackdata from "./Component/Fallbackdata"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "react-hot-toast"

const Fdapage = lazy(() => import("./Main/Fdapage"))
const UsersList = lazy(() => import("./Component/crm/user/UsersList"))
const LandingPage = lazy(() => import("./Main/LandingPage"))
const About = lazy(() => import("./Main/About"))
const Swabhimaan = lazy(() => import("./Main/Swabhimaan"))
const Swabhimaankendra = lazy(() => import("./Main/Swabhimaankendra"))
const Career = lazy(() => import("./Main/Career"))
const User = lazy(() => import("./Component/crm/user/User"))
const Dashboard = lazy(() => import("./Component/crm/user/Dashboard/Dashboard"))
const Userdashboard = lazy(() =>
  import("./Component/crm/user/Dashboard/Userdashboard")
)
const Deposit = lazy(() => import("./Component/crm/user/Dashboard/Deposit"))
const Kycform = lazy(() => import("./Component/crm//user/Kycform"))
const Websiteisonworking = lazy(() =>
  import("./Component/crm/user/Websiteisonworking")
)
const Loginpage = lazy(() => import("./Component/crm/user/Login/Loginpage"))
const Register = lazy(() => import("./Component/crm/user/Register/Register"))
const Product = lazy(() => import("./Main/Product"))
const Blogpage = lazy(() => import("./Main/Blogpage"))
const Bloogerpage = lazy(() => import("./Component/Ourblogs/Bloogerpage"))
const Blogs1 = lazy(() => import("./Component/Ourblogs/Blogs1"))
// const Blogs2 = lazy(()=>import ('./Component/Ourblogs/Blogs2'));
// const Blogs3 = lazy(()=>import ('./Component/Ourblogs/Blogs3'));
// const Blogs4 = lazy(()=>import ('./Component/Ourblogs/Blogs4'));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<Fallbackdata />}>
              <Fdapage />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <LandingPage />
              </Suspense>
            }
          ></Route>

          <Route
            path="About-us"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <About />
              </Suspense>
            }
          />

          <Route
            path="users-list"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <UsersList />
              </Suspense>
            }
          />

          <Route
            path="Swabhimaan-card"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Swabhimaan />
              </Suspense>
            }
          />

          <Route
            path="Swabhimaan-Kendra"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Swabhimaankendra />
              </Suspense>
            }
          />

          <Route
            path="Career"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Career />
              </Suspense>
            }
          />

          <Route
            path="Our-blogs"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Blogpage />
              </Suspense>
            }
          />

          <Route
            path="Blogger-page"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Bloogerpage />
              </Suspense>
            }
          >
            <Route
              path="blog1-data"
              element={
                <Suspense fallback={<Fallbackdata />}>
                  <Blogs1 />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="crm"
          element={
            <Suspense fallback={<Fallbackdata />}>
              <User />
            </Suspense>
          }
        >
          <Route
            path="user"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Dashboard />
              </Suspense>
            }
          >
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<Fallbackdata />}>
                  <Userdashboard />
                </Suspense>
              }
            />
            <Route
              path="deposit"
              element={
                <Suspense fallback={<Fallbackdata />}>
                  <Deposit />
                </Suspense>
              }
            />
            <Route
              path="kyc-form"
              element={
                <Suspense fallback={<Fallbackdata />}>
                  <Kycform />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Fallbackdata />}>
                  <Websiteisonworking />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="user/Login-page"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Loginpage />
              </Suspense>
            }
          />
          <Route
            path="user/register"
            element={
              <Suspense fallback={<Fallbackdata />}>
                <Register />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="products"
          element={
            <Suspense fallback={<Fallbackdata />}>
              <Product />
            </Suspense>
          }
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
