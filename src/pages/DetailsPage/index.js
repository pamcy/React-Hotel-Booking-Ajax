import React, { Component } from 'react';

import MosaicHeader from '../../components/MosaicHeader/index';
import RoomInfo from '../../components/RoomInfo/index';
import RoomAmenities from '../../components/RoomAmenities/index';
import BookingCard from '../../components/BookingCard/index';
import { apiGetSingleRoom } from '../../api';

class DetailsPage extends Component {
  state = {
    currentRoom: [],
    bookingData: [],
  };

  componentDidMount() {
    this.getCurrentRoomData();
  }

  getCurrentRoomData = async () => {
    const { location } = this.props;

    try {
      const response = await apiGetSingleRoom(location.state.roomID);

      this.setState({
        currentRoom: response.data.room[0],
        bookingData: response.data.booking,
      });
    } catch (e) {
      console.error(`🚫 Something went wrong fetching API calls on this room: ${e}`);
    }
  };

  refreshBookingData = async () => {
    const { location } = this.props;

    try {
      const response = await apiGetSingleRoom(location.state.roomID);

      this.setState({
        bookingData: response.data.booking,
      });
    } catch (e) {
      console.error(`🚫 Something went wrong fetching API calls on this room: ${e}`);
    }
  };

  render() {
    const { location } = this.props;
    const { roomID } = location.state;
    const { currentRoom, bookingData } = this.state;
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
              <BookingCard
                normalDayPrice={normalDayPrice}
                holidayPrice={holidayPrice}
                roomID={roomID}
                bookingData={bookingData}
                refreshBookingData={this.refreshBookingData}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default DetailsPage;
