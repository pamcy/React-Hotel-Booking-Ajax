import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MosaicHeader from '../../components/MosaicHeader/index';
import RoomInfo from '../../components/RoomInfo/index';
import RoomAmenities from '../../components/RoomAmenities/index';
import BookingCard from '../../components/BookingCard/index';
import { apiGetSingleRoom } from '../../api';

class DetailsPage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        roomID: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    currentRoom: [],
  };

  componentDidMount() {
    this.getCurrentRoomData();
  }

  getCurrentRoomData = async () => {
    const { location } = this.props;

    try {
      const response = await apiGetSingleRoom(location.state.roomID);

      this.setState({ currentRoom: response.data.room[0] });
    } catch (e) {
      console.error(`🚫 Something went wrong fetching API calls on this room: ${e}`);
    }
  };

  render() {
    const { currentRoom } = this.state;
    const { name, imageUrl, amenities, normalDayPrice, holidayPrice } = currentRoom;

    return (
      <div className="container wrapper-l">
        <MosaicHeader name={name} images={imageUrl} />
        <main className="main">
          <div className="wrapper-m main__wrapper">
            <section className="main__left">
              <RoomInfo data={currentRoom} />
              <RoomAmenities amenities={amenities} />
            </section>
            <section className="main__right">
              <BookingCard normalDayPrice={normalDayPrice} holidayPrice={holidayPrice} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default DetailsPage;
