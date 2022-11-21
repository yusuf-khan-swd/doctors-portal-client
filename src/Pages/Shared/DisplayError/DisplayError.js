import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign out successful.");
        navigate('/login');
      })
      .catch(err => console.log(err))
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className='text-5xl text-red-400 mb-5'>Something Went Wrong</p>
      <p className="text-red-500 mb-3 font-semibold">
        {error.statusText || error.message}
      </p>
      <p className='text-2xl mb-3'>Please sign out and sign in again</p>
      <button className='btn btn-sm btn-error' onClick={handleLogOut}>Sign Out</button>
    </div>
  );
};

export default DisplayError;