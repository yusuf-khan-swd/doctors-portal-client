import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 shadow-lg rounded-2xl p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
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
        <button className="btn btn-outline btn-accent w-full">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;