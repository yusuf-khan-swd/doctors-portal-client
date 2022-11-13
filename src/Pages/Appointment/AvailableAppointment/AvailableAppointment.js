import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data => setAppointmentOptions(data))
  }, []);

  return (
    <div className='mt-4'>
      <p className='text-xl text-secondary text-center p-12'>Available Appointments on {format(selectedDate, 'PP')} </p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option}></AppointmentOption>)}
      </div>
    </div>
  );
};

export default AvailableAppointment;