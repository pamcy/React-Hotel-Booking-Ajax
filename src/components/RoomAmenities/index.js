import React from 'react';
import PropTypes from 'prop-types';

const RoomAmenities = props => {
  const { amenities } = props;
  if (!amenities) return null;

  const {
    'Wi-Fi': wifi,
    Breakfast,
    'Mini-Bar': minibar,
    'Room-Service': roomService,
    'Air-Conditioner': airConditioner,
    'Great-View': greatView,
    'Smoke-Free': smokeFree,
    'Child-Friendly': childFriendly,
    'Pet-Friendly': petFriendly,
  } = amenities;

  return (
    <div className="room-amenities">
      <ul className="room-amenities__list">
        <li className={`room-amenities__item ${wifi ? '' : 'non-available'}`}>
          <img src="/images/room-wifi.svg" alt="Wifi" className="room-amenities__icon" />
          <span className="room-amenities__title">Wi-Fi</span>
        </li>
        <li className={`room-amenities__item ${Breakfast ? '' : 'non-available'}`}>
          <img src="/images/room-breakfast.svg" alt="Breakfast" className="room-amenities__icon" />
          <span className="room-amenities__title">Breakfast</span>
        </li>
        <li className={`room-amenities__item ${minibar ? '' : 'non-available'}`}>
          <img src="/images/room-bar.svg" alt="Mini Bar" className="room-amenities__icon" />
          <span className="room-amenities__title">Mini Bar</span>
        </li>
        <li className={`room-amenities__item ${roomService ? '' : 'non-available'}`}>
          <img src="/images/room_service.svg" alt="Room Service" className="room-amenities__icon" />
          <span className="room-amenities__title">Room Service</span>
        </li>
        <li className={`room-amenities__item ${airConditioner ? '' : 'non-available'}`}>
          <img
            src="/images/room-breeze.svg"
            alt="Air-Conditioner"
            className="room-amenities__icon"
          />
          <span className="room-amenities__title">Air Conditioner</span>
        </li>
        <li className={`room-amenities__item ${greatView ? '' : 'non-available'}`}>
          <img
            src="/images/room-mountain-range.svg"
            alt="Great-View"
            className="room-amenities__icon"
          />
          <span className="room-amenities__title">Great View</span>
        </li>
        <li className={`room-amenities__item ${smokeFree ? '' : 'non-available'}`}>
          <img
            src="/images/room-no-smoke-symbol.svg"
            alt="Smoke-Free"
            className="room-amenities__icon"
          />
          <span className="room-amenities__title">Smoke Free</span>
        </li>
        <li className={`room-amenities__item ${petFriendly ? '' : 'non-available'}`}>
          <img src="/images/room-dog.svg" alt="Pet Friendly" className="room-amenities__icon" />
          <span className="room-amenities__title">Pet Friendly</span>
        </li>
        <li className={`room-amenities__item ${childFriendly ? '' : 'non-available'}`}>
          <img
            src="/images/room-crawling-baby-silhouette.svg"
            alt="Child Friendly"
            className="room-amenities__icon"
          />
          <span className="room-amenities__title">Child Friendly</span>
        </li>
      </ul>
    </div>
  );
};

RoomAmenities.propTypes = {
  amenities: PropTypes.shape({
    'Wi-Fi': PropTypes.bool,
    Breakfast: PropTypes.bool,
    'Mini-Bar': PropTypes.bool,
    'Room-Service': PropTypes.bool,
    'Air-Conditioner': PropTypes.bool,
    'Great-View': PropTypes.bool,
    'Smoke-Free': PropTypes.bool,
    'Child-Friendly': PropTypes.bool,
    'Pet-Friendly': PropTypes.bool,
  }).isRequired,
};

export default RoomAmenities;
