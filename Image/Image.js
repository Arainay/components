import React from 'react';
import './image.css';

const Image = ({ sources = [], alt = 'alt', className, originalSrc, originalSrcset }) => {
  if (sources.length === 0) {
    return (
      <img
        className={className ? className : ''}
        srcSet={originalSrcset}
        src={originalSrc}
        alt={alt}
      />
    );
  }

  return (
    <picture className={'image-container' + className ? ` ${className}` : ''}>
      {sources.map(source => (
        <source key={source.srcset} srcSet={source.srcset} {...source}/>
      ))}
      <img
        className="image-container__img"
        srcSet={originalSrcset}
        src={originalSrc}
        alt={alt}
      />
    </picture>
  );
};

export default Image;
