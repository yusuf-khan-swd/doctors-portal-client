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
    <div className='mb-36'>
      <div className='text-center'>
        <h2 className='text-secondary font-bold text-xl mb-2 uppercase'>Our Services</h2>
        <h3 className='text-accent text-4xl mb-16'>Services We Provide</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          servicesData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;