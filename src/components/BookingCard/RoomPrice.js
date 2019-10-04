import React from 'react';

import { Ellipsis } from 'react-spinners-css';

const RoomPrice = ({ roomIsLoading, normalDayPrice, holidayPrice }) => {
  return (
    <div className="booking-card__prices">
      <div className="booking-card__price-item">
        <span className="booking-card__price-title">Mon-Thu per night</span>
        <span className="booking-card__price-per-night">
          {roomIsLoading ? <Ellipsis color="#111" /> : `NT${normalDayPrice}`}
        </span>
      </div>
      <div className="booking-card__price-item">
        <span className="booking-card__price-title">Fri-Sun per night</span>
        <span className="booking-card__price-per-night">
          {roomIsLoading ? <Ellipsis color="#111" /> : `NT${holidayPrice}`}
        </span>
      </div>
    </div>
  );
};

export default RoomPrice;
