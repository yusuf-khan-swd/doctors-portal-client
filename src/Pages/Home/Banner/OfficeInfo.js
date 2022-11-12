import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

const OfficeInfo = () => {
  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='bg-gradient-to-r from-secondary to-primary py-12 px-6 rounded-xl flex'>
        <FaRegClock className='font-bold text-7xl mr-5'></FaRegClock>
        <div>
          <h3 className='font-bold text-xl'>Opening hour</h3>
          <p>9am to 9pm 7/days total 12 Hours</p>
        </div>
      </div>
      <div className='bg-accent py-12 px-6 rounded-xl flex'>
        <FaMapMarkerAlt className='font-bold text-7xl mr-5'></FaMapMarkerAlt>
        <div>
          <h3 className='font-bold text-xl'>Visit our location</h3>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className='bg-gradient-to-r from-secondary to-primary py-12 px-6 rounded-xl flex'>
        <FaPhoneAlt className='font-bold text-7xl mr-5'></FaPhoneAlt>
        <div>
          <h3 className='font-bold text-xl'>Contact us now</h3>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;