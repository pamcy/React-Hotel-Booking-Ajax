import React from 'react';

import RoomPrice from './RoomPrice';
import BookingForm from './BookingForm';

const BookingCard = props => {
  const {
    roomIsLoading,
    normalDayPrice,
    holidayPrice,
    roomID,
    bookingData,
    refreshBookingData,
  } = props;
  return (
    <div className="booking-card">
      <div className="booking-card__wrapper">
        <RoomPrice
          roomIsLoading={roomIsLoading}
          normalDayPrice={normalDayPrice}
          holidayPrice={holidayPrice}
        />
        <BookingForm
          normalDayPrice={normalDayPrice}
          holidayPrice={holidayPrice}
          roomID={roomID}
          bookingData={bookingData}
          refreshBookingData={refreshBookingData}
        />
      </div>
    </div>
  );
};

export default BookingCard;
