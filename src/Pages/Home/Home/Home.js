import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div className='mx-5 mt-2'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;