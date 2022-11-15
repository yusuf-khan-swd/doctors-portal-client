import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setLoginError("");
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
        navigate(from, { replace: true })
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

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 shadow-lg rounded-2xl p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="text"
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
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600"> {errors?.password?.message} </p>
            )}
            <label className="label hover:link">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <div className="form-control my-3">
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
        <div className="mb-3 mt-4">
          {loginError && <p className="text-red-600"> {loginError} </p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
