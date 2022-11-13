import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='h-[400px] flex justify-center items-center'>
      <div>
        <h2 className='text-xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register('email')} type="text" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register('password')} type="password" className="input input-bordered w-full max-w-xs" />
          </div>
          <Link className='link' to='/'>Forgot Password?</Link>
          <div className="form-control mt-3">
            <input className='btn' type="submit" value="login" />
          </div>
        </form>
        <p> {data} </p>
      </div>
    </div>
  );
};

export default Login;