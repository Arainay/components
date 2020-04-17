import React from 'react';
import Star from './Star';
import './star-rating.scss';

const StarRating = ({ value, max }) => (
  <div className="star-rating">
    <div className="star-rating__stars">
      {Array.apply(null, Array(max)).map((_, id) => (
        <Star
          key={id}
          gradientId={id + 1}
          value={value - id > 1 ? 1 : value - id}
          fillColor="rgb(199, 166, 87)"
          strokeColor="rgb(199, 166, 87)"
        />
      ))}
    </div>
    <span className="star-rating__value">
      {value}
    </span>
  </div>
);

export default StarRating;
