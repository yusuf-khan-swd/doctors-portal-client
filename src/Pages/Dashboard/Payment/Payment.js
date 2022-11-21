import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { price, treatment, appointmentDate, slot } = booking;

  return (
    <div>
      <h3 className='text-2xl font-semibold mb-3'>Payment for {treatment}</h3>
      <p>Please pay $<strong>{price}</strong> for your appointment on {appointmentDate} at {slot} </p>
      <div className='my-12 w-96 card card-body border shadow-lg'>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;