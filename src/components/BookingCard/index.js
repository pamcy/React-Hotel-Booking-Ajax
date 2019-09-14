import React from 'react';
import PropTypes from 'prop-types';

import RoomPrice from './RoomPrice';

const BookingCard = props => {
  const { normalDayPrice, holidayPrice } = props;
  return (
    <div className="booking-card">
      <div className="booking-card__wrapper">
        <RoomPrice normalDayPrice={normalDayPrice} holidayPrice={holidayPrice} />
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  normalDayPrice: PropTypes.number,
  holidayPrice: PropTypes.number,
};

export default BookingCard;
