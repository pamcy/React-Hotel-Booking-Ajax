import React from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../LineBreak/index';

const RoomInfo = ({ data }) => {
  if (!data.descriptionShort) return null;

  const { GuestMin, GuestMax, Footage, Bed, 'Private-Bath': privateBath } = data.descriptionShort;
  const { checkInEarly, checkInLate, checkOut } = data.checkInAndOut;

  return (
    <div className="room-info">
      <h2 className="room-info__title">{data.name}</h2>
      <ul className="room-info__intro-list">
        <li className="room-info__intro-item">
          Max number of guests: {`${GuestMin} - ${GuestMax}`}
        </li>
        <li className="room-info__intro-item">Room size: {Footage} m²</li>
        <li className="room-info__intro-item">Bed size: {Bed[0]}</li>
        <li className="room-info__intro-item">Private bath: {privateBath}</li>
      </ul>
      <p className="room-info__description">{data.description}</p>
      <LineBreak location="room-info" />
      <div className="room-info__checks">
        <div className="room-info__check">
          <span className="room-info__check-title">Check in</span>
          <span className="room-info__check-time">{`${checkInEarly} - ${checkInLate}`}</span>
        </div>
        <div className="room-info__check">
          <span className="room-info__check-title">Check out</span>
          <span className="room-info__check-time">{checkOut}</span>
        </div>
      </div>
    </div>
  );
};

RoomInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionShort: PropTypes.shape({
      GuestMin: PropTypes.number,
      GuestMax: PropTypes.number,
      Footage: PropTypes.number,
      Bed: PropTypes.array,
      'Private-Bath': PropTypes.number,
    }).isRequired,
    checkInAndOut: PropTypes.shape({
      checkInEarly: PropTypes.string,
      checkInLate: PropTypes.string,
      checkOut: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RoomInfo;
