import React from 'react';
import './star.scss';

const Star = ({ gradientId, fillColor, strokeColor, value }) => {
  const valueInPercent = value * 100;

  return (
    <svg
      viewBox="0 0 51 48"
      className="star"
    >
      <linearGradient id={`star-gradient-${gradientId}`}>
        <stop stopColor={fillColor} offset="0%"/>
        <stop stopColor={fillColor} offset={`${valueInPercent}%`}/>
        {value < 1 && <stop stopColor="transparent" offset={`${valueInPercent}%`}/>}
      </linearGradient>
      <path
        fill={`url(#star-gradient-${gradientId})`}
        stroke={strokeColor}
        strokeWidth={3}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
    );
};

export default Star;
