import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  // Pembulatan rating ke angka terdekat
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-center">
      {[...Array(10)].map((_, index) => {
        let starIcon;
        if (index < Math.floor(roundedRating)) {
          starIcon = <FaStar key={index} color="#EE9700" />;
        } else if (index + 0.5 === roundedRating) {
          starIcon = <FaStarHalfAlt key={index} color="#EE9700" />;
        } else {
          starIcon = <FaStar key={index} color="#e4e5e9" />;
        }
        return starIcon;
      })}
      <span className="ml-2">{roundedRating}</span>
    </div>
  );
};

export default RatingStars;

