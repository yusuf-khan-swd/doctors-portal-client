import React from 'react';
import { format } from 'date-fns';

const AppointmentAvailable = ({ selectedDate }) => {
  return (
    <div className='mt-4'>
      <p className='text-xl text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')} </p>
    </div>
  );
};

export default AppointmentAvailable;