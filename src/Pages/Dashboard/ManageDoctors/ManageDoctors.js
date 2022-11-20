import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
  const { data: doctors = [] } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/doctors');
      const data = await res.json();
      return data;
    }
  });

  return (
    <div>
      <h2 className='text-2xl mb-6'>Manage Doctors: {doctors?.length}</h2>
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
                <td>Blue</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;