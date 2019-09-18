import React from 'react';
import PropTypes from 'prop-types';

const TotalAmount = props => {
  return (
    <div className="booking-card__total">
      <ul className="booking-card__total-list">
        <li className="booking-card__total-item">
          <span className="booking-card__total-text">Weekday $3425 x 2 nights</span>
          <span className="booking-card__total-text">NT$7000</span>
        </li>
        <li className="booking-card__total-item">
          <span className="booking-card__total-text">Weekend $3825 x 1 night</span>
          <span className="booking-card__total-text">NT$3825</span>
        </li>
        <li className="booking-card__total-item">
          <span className="booking-card__total-text bold">Total</span>
          <span className="booking-card__total-text bold large">NT$10922</span>
        </li>
      </ul>
    </div>
  );
};

TotalAmount.propTypes = {};

export default TotalAmount;
