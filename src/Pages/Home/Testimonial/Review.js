import React from 'react';

const Review = ({ review }) => {
  const { name, img, review: userReview, location } = review;

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p> {userReview} </p>
        <div className="flex items-center mt-8">
          <div className="avatar mr-4">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <p> {name} </p>
            <p> {location} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;