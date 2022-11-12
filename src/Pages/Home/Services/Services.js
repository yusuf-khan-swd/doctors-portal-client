import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: fluoride,
      title: 'Fluoride Treatment',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
      id: 2,
      icon: cavity,
      title: 'Cavity Filling',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
      id: 3,
      icon: whitening,
      title: 'Teeth Whitening',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
  ];

  return (
    <div>
      <h2 className='text-secondary font-bold text-xl text-center mb-2'>Our Services</h2>
      <h3 className='text-accent text-4xl text-center mb-16'>Services We Provide</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          servicesData.map(service => <ServiceCard id={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;