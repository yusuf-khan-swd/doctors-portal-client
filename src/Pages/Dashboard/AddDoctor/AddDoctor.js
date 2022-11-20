import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbbKey;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentSpecialty');
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  const handleAddDoctor = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData.success) {

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url
          }

          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(result => {
              if (result.acknowledged) {
                toast.success(`Doctor ${data.name} added successfully`);
                navigate('/dashboard/managedoctors');
              }
            })
        }
      })
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
              <span className="label-text">Select a Specialty</span>
            </label>
            <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
              {
                specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
              }
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              {...register("image", { required: "Image is required." })}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && (
              <p className="text-red-600 mt-1 mb-2">{errors?.img?.message}</p>
            )}
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