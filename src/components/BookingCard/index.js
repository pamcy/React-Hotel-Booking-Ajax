import React from 'react';

import RoomPrice from './RoomPrice';
import BookingForm from './BookingForm';

const BookingCard = props => {
  const { normalDayPrice, holidayPrice, roomID, bookingData } = props;
  return (
    <div className="booking-card">
      <div className="booking-card__wrapper">
        <RoomPrice normalDayPrice={normalDayPrice} holidayPrice={holidayPrice} />
        <BookingForm
          normalDayPrice={normalDayPrice}
          holidayPrice={holidayPrice}
          roomID={roomID}
          bookingData={bookingData}
        />
      </div>
    </div>
  );
};

export default BookingCard;
