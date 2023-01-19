import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn, googleSignIn, forgotPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [token] = useToken(loggedInUserEmail);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignIn = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast.success("Login successful");
        setLoggedInUserEmail(user.email);
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message);
      })
  };

  const handleGoogleSignIn = () => {
    setLoginError("");
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Sign in with Google was successful.')
      })
      .catch(err => {
        console.log("Google Error: ", err);
        setLoginError(err.message);
      })
  };

  const handleForgotPassword = event => {
    event.preventDefault();

    const email = event.target.email.value;
    console.log(email)

    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Please check your spam folder.")
      })
      .catch(err => {
        console.log("Forgot password ", err);
        toast.error(err.message)
      })
  };

  return (
    <>
      <div className="m-2 text-center">
        <p className="mb-1"><small>Copy and paste the Email and Password</small></p>
        <p>john@wick.com</p>
        <p>passwordAa1@</p>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <div className="w-96 shadow-lg rounded-2xl p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email Address is required" })}
                type="email"
                defaultValue={"new@user.com"}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600"> {errors?.email?.message} </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 character or more.",
                  },
                })}
                type="password"
                defaultValue={"passwordAa1@"}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600"> {errors?.password?.message} </p>
              )}
              <label htmlFor="forgot-modal" className="label hover:link">
                <span className="label-text">Forgot Password?</span>
              </label>
            </div>
            <div>
              {loginError && <p className="text-red-600 font-semibold"> {loginError} </p>}
            </div>
            <div className="form-control mt-3 mb-3">
              <input className="btn" type="submit" value="login" />
            </div>
          </form>
          <p>
            New to doctors portal?
            <Link to="/signup" className="text-secondary ml-1">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent w-full">
            Continue with google
          </button>
        </div>
        {/* Modal Start */}
        <input type="checkbox" id="forgot-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="forgot-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold mb-3">Please enter your email address</h3>
            <form onSubmit={handleForgotPassword}>
              <div className="form-control w-full">
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs mx-auto"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="form-control my-3">
                <input className="btn btn-primary w-full max-w-xs mx-auto" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
