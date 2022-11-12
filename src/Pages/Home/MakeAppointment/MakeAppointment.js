import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="hidden md:block lg:w-1/2 rounded-lg shadow-2xl -mt-32" alt='' />
          <div>
            <h4 className='text-xl font-bold text-primary'>Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment today</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;