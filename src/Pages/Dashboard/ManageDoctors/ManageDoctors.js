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
      <h2 className='text-2xl mb-6'>Manage Doctors</h2>
    </div>
  );
};

export default ManageDoctors;