import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary font-semibold justify-center"> {name} </h2>
        <p className='text-center'> {slots.length ? slots[0] : 'Make an appointment another time'} </p>
        <p className='text-center'> {slots.length + ` ${slots.length > 1 ? 'spaces' : 'space'} available`} </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary uppercase text-white">Book appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;