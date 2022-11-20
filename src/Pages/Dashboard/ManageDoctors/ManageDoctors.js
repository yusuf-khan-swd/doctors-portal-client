import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;

      } catch (error) {
        console.log('error: ', error);
      }
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  const handleDoctorDelete = id => {
    const canProceed = window.confirm("Are you sure you want to delete?");
    if (canProceed) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount) {
            toast.success('Successfully delete the doctor');
            refetch();
          }
        })
    }
  };

  return (
    <div>
      <h2 className='text-2xl mb-6 font-bold'>Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((doctor, index) => <tr key={doctor._id}>
                <th> {(index + 1) < 10 ? ('0' + (index + 1)) : index + 1} </th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button onClick={() => handleDoctorDelete(doctor._id)} className='btn btn-error btn-sm text-white'>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;