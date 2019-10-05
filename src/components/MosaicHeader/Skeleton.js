import React from './node_modules/react';

const MosaicSkeleton = () => {
  return (
    <div className="mosaic-header__items">
      <div className="mosaic-header__item mosaic-header__item--1">
        <div className="mosaic-header__placeholder" />
      </div>
      <div className="mosaic-header__item mosaic-header__item--2">
        <div className="mosaic-header__placeholder" />
      </div>
      <div className="mosaic-header__item mosaic-header__item--3">
        <div className="mosaic-header__placeholder" />
      </div>
    </div>
  );
};

export default MosaicSkeleton;
