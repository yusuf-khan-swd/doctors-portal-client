import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
  const booking = useLoaderData();
  const { price, treatment, appointmentDate, slot } = booking;

  return (
    <div>
      <h3 className='text-2xl font-semibold mb-3'>Payment for {treatment}</h3>
      <p>Please pay $<strong>{price}</strong> for your appointment on {appointmentDate} at {slot} </p>
    </div>
  );
};

export default Payment;