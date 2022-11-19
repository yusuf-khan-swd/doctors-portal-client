import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddDoctor = data => {
    console.log(data);
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-8'>Add a New Doctor</h2>
      <div className='w-96 shadow-lg rounded-2xl p-7 m-3'>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              <span className="label-text">Specialty</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Pick a Specialty</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="form-control mb-3 mt-4">
            <input className="btn" type="submit" value="sign up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;