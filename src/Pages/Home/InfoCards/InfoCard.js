import React from 'react';

const InfoCard = ({ card }) => {
  const { icon, title, description, bgClass } = card;
  return (
    <div className={`card md:card-side shadow-xl text-white p-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body p-0 md:p-8">
        <h2 className="card-title"> {title} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default InfoCard;