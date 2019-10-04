import React from 'react';

const InfoSkeleton = () => {
  return (
    <div>
      <div className="skeleton skeleton--room-info">
        <div className="skeleton__text skeleton__text--title" />
        <div className="skeleton__wrapper">
          <div className="skeleton__text" />
          <div className="skeleton__text" />
          <div className="skeleton__text" />
        </div>
        <div className="skeleton__text skeleton__text--line" />
        <div className="skeleton__text skeleton__text--line" />
        <div className="skeleton__block" />
      </div>
    </div>
  );
};

export default InfoSkeleton;
