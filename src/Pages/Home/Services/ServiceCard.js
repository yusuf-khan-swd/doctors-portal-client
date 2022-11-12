import React from 'react';

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure>
        <img src={icon} alt={title} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {title} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default ServiceCard;