import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomCard = ({ data }) => {
  return (
    <div className="room-card">
      <div className="room-card__wrapper" style={{ backgroundImage: `url(${data.imageUrl})` }}>
        <Link
          className="room-card__link"
          to={{
            pathname: `/room/${data.id}`,
            state: { roomID: data.id },
          }}
        >
          <div className="room-card__content">
            <h2 className="room-card__title">{data.name}</h2>
            <div className="room-card__prices">
              <span className="room-card__price-l">
                NT${data.normalDayPrice} <span className="room-card__price-s">weekday</span>
              </span>
              <span className="room-card__price-s room-card__price-s--gray">
                NT${data.holidayPrice} weekend
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    normalDayPrice: PropTypes.number,
    holidayPrice: PropTypes.number,
  }).isRequired,
};

export default RoomCard;
