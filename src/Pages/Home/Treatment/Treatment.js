import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png';

const Treatment = () => {
  return (
    <div className="card md:card-side bg-base-100 lg:p-28">
      <figure className='md:w-1/2 md:mr-10'>
        <img src={treatmentImg} className="rounded-lg" alt="Treatment" />
      </figure>
      <div className="card-body md:w-1/2 justify-center">
        <div>
          <h2 className="card-title font-bold text-5xl mb-6">Exceptional Dental Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        </div>
        <div className="card-actions justify-start mt-11">
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;