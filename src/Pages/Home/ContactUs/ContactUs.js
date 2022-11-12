import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bgImage from '../../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section className='mt-36 py-16' style={{ background: `url(${bgImage})` }}>
      <div className='text-center text-white'>
        <h4 className='text-primary font-bold text-xl'>Contact Us</h4>
        <h3 className='text-4xl'>Stay connect with us</h3>
      </div>
      <div className="card-body max-w-md mx-auto">
        <div className="form-control">
          <input type="text" placeholder="Email Address" className="input input-bordered" />
        </div>
        <div className='form-control'>
          <input type="text" placeholder="Subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <textarea className="textarea textarea-bordered" rows="3" placeholder="Your Message"></textarea>
        </div>
        <div className="mx-auto mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;