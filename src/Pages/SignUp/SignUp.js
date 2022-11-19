import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [savedUserEmail, setSavedUserEmail] = useState("");
  const [token] = useToken(savedUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");

    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("You are register successfully")

        const userInfo = {
          displayName: data.name
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch(err => {
            console.log("update user: ", err);
            setSignUpError(err.message);
          })
      })
      .catch(error => {
        console.log("register user: ", error);
        setSignUpError(error.message);
      })
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('save use: ', data);
        setSavedUserEmail(email);
      })
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully sign up with google");
      })
      .catch(err => {
        console.log("Google Sign up", err);
        setSignUpError(err.message);
      })
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 shadow-lg rounded-2xl p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600 mt-1 mb-2">{errors?.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600 mt-1 mb-2">{errors?.email?.message}</p>
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have a uppercase, lowercase, number and a special character like (Aa1@)"
                }

              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600 mt-1 mb-2">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className="form-control mb-3 mt-4">
            <input className="btn" type="submit" value="sign up" />
          </div>
        </form>
        <p>
          Already have an account?
          <Link to="/login" className="text-secondary ml-1">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignUp} className="btn btn-outline btn-accent w-full">
          Continue with google
        </button>
        <div className="mb-3 mt-4">
          {signUpError && <p className="text-red-600"> {signUpError} </p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
