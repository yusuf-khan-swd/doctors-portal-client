import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div className=''>
      <div className="hero bg-no-repeat bg-cover bg-center lg:h-[838px]" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;