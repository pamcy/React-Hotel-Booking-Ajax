import React from 'react';
import PropTypes from 'prop-types';

import { subDays, eachDayOfInterval } from 'date-fns';

const TotalAmount = props => {
  const { normalDayPrice, holidayPrice, startDate, endDate } = props;
  let totalNormalNights = 0;
  let totalHolidayNights = 0;
  let pricePerDay;

  if (!startDate || !endDate) return null;

  const totalPrice = eachDayOfInterval({
    start: startDate,
    end: subDays(endDate, 1),
  })
    .map(day => day.getDay(day))
    .map(day => {
      const holiday = day === 0 || day === 5 || day === 6;

      if (holiday) {
        totalHolidayNights += 1;
      } else {
        totalNormalNights += 1;
      }

      pricePerDay = holiday ? holidayPrice : normalDayPrice;

      return pricePerDay;
    })
    .reduce((sum, currentPrice) => {
      return sum + currentPrice;
    }, 0);

  return (
    <div className="booking-card__total">
      <ul className="booking-card__total-list">
        <li className="booking-card__total-item">
          <span className="booking-card__total-text">
            Weekday ${normalDayPrice} x {totalNormalNights} night(s)
          </span>
          <span className="booking-card__total-text">NT${normalDayPrice * totalNormalNights}</span>
        </li>
        <li className="booking-card__total-item">
          <span className="booking-card__total-text">
            Weekend ${holidayPrice} x {totalHolidayNights} night(s)
          </span>
          <span className="booking-card__total-text">NT${holidayPrice * totalHolidayNights}</span>
        </li>
        <li className="booking-card__total-item">
          <span className="booking-card__total-text bold">Total</span>
          <span className="booking-card__total-text bold large">NT${totalPrice}</span>
        </li>
      </ul>
    </div>
  );
};

TotalAmount.propTypes = {
  normalDayPrice: PropTypes.number,
  holidayPrice: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default TotalAmount;
