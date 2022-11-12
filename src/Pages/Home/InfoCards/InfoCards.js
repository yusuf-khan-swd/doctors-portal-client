import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardDetails = [
    {
      id: 1,
      title: 'Opening Hour',
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
      description: 'Open at 9:00AM to 5:00PM every day',
      icon: clock
    },
    {
      id: 2,
      title: 'Visit Our Location',
      bgClass: 'bg-accent',
      description: 'Open at 9:00AM to 5:00PM every day',
      icon: marker
    },
    {
      id: 3,
      title: 'Contact Us Now',
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
      description: 'Open at 9:00AM to 5:00PM every day',
      icon: phone
    }
  ];

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32'>
      {
        cardDetails.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
      }
    </div>
  );
};

export default InfoCards;