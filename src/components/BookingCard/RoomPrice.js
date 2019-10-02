import React from 'react';

const RoomPrice = ({ normalDayPrice, holidayPrice }) => {
  return (
    <div className="booking-card__prices">
      <div className="booking-card__price-item">
        <span className="booking-card__price-title">Mon-Thu per night</span>
        <span className="booking-card__price-per-night">NT${normalDayPrice}</span>
      </div>
      <div className="booking-card__price-item">
        <span className="booking-card__price-title">Fri-Sun per night</span>
        <span className="booking-card__price-per-night">NT${holidayPrice}</span>
      </div>
    </div>
  );
};

export default RoomPrice;
