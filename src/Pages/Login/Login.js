import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='h-[400px] flex justify-center items-center'>
      <div className='w-96 shadow-lg rounded-2xl p-7'>
        <h2 className='text-xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <label className="label hover:link">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <div className="form-control my-3">
            <input className='btn' type="submit" value="login" />
          </div>
        </form>
        <p>New to doctors portal? <Link to='/signup' className='text-secondary'>Create new account</Link> </p>
        <div className="divider">OR</div>
        <button className='btn btn-outline btn-accent w-full'>Continue with google</button>
      </div>
    </div>
  );
};

export default Login;