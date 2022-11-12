import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import OfficeInfo from './OfficeInfo';

const Banner = () => {
  return (
    <div className='px-9'>
      <div className="hero bg-no-repeat bg-cover bg-center h-[838px]" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
      <OfficeInfo></OfficeInfo>
    </div>
  );
};

export default Banner;