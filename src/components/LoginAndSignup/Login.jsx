import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import hero from "../../assets/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GrAnalytics } from "react-icons/gr";
import Swal from "sweetalert2";
//import useDynamicPageTitle from "./DynamicPageTitle";

const Login = () => {
  //useDynamicPageTitle("Login");

  const [error, setError] = useState("");
  const [showPswd, setShowPswd] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { login, googleLogin } = useAuth();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
          draggable: true,
        });
        // toast("🦄 Welcome to the community!", {
        //   position: "bottom-left",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: false,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   transition: Bounce,
        // });
        navigate(`${location.state ? location.state : "/"}`, {
          state: { loginSuccess: true },
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
          draggable: true,
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`, {
          state: { loginSuccess: true },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        //toast.error(errorCode || "Login failed.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
          draggable: true,
        });
      });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPswd(!showPswd);
    setError(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
      className="hero flex flex-col bg-base-100 h-[90vh] p-10"
    >
      <div className="text-center lg:text-left p-3">
        <h1 className="text-5xl font-bold subtitle-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
          Login now!
        </h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-gray-600">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset space-y-3">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPswd ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                <p
                  className="absolute right-6 top-3 z-10"
                  onClick={handleShowPassword}
                >
                  {showPswd ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
                </p>
              </div>

              {/* {error && toast.error(error)} */}

              <div>
                <Link className="link link-hover" to="/auth/reset">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn btn-accent mt-4 bg-blue-300">
                <h2 className="font-bold text-xl title-text">Login</h2>
              </button>
              <hr
                style={{
                  //   color: "rgb(128, 128, 128)",
                  backgroundColor: "rgb(128, 128, 128)",
                  height: 2,
                  border: "none",
                  marginTop: 2,
                }}
              />
              <button
                className="btn btn-primary bg-[#dd921a]"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle size={36} /> Login with Google
              </button>
            </fieldset>
          </form>
          <Link to="/auth/register">
            <p>
              Don't have an account? Please{" "}
              <span className="text-bold title-text">register</span> first
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
