import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server-alpha.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['/bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  });

  return (
    <div>
      <h2 className="text-2xl mb-6">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, index) =>
                <tr key={booking._id}>
                  <th> {index + 1} </th>
                  <td>{booking.patient} </td>
                  <td> {booking.treatment} </td>
                  <td> {booking.appointmentDate} </td>
                  <td> {booking.slot} </td>
                  <td className='font-semibold'> ${booking.price} </td>
                  <td>
                    {
                      booking.price && !booking.paid &&
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className='btn btn-primary text-white btn-sm'>Pay</button>
                      </Link>
                    }
                    {
                      booking.price && booking.paid &&
                      <button className='btn btn-success text-white btn-sm bg-green-600 hover:bg-green-500'>Paid</button>
                    }
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;