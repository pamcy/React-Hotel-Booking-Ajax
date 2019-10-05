import React, { Component } from 'react';

import { Ellipsis } from 'react-spinners-css';

import HeroHeader from '../../components/HeroHeader/index';
import RoomCard from '../../components/RoomCard/index';
import { apiGetAllRooms } from '../../api';

class MainPage extends Component {
  state = {
    rooms: [],
    slidesAreLoaded: false,
  };

  componentDidMount() {
    this.getRoomsData();
  }

  getRoomsData = async () => {
    try {
      const response = await apiGetAllRooms();
      this.setState({ rooms: response.data.items });
    } catch (e) {
      console.error(`🚫 Something went wrong fetching API calls: ${e}`);
    }
  };

  setSlidesAreLoaded = () => {
    this.setState({ slidesAreLoaded: true });
  };

  render() {
    const { rooms, slidesAreLoaded } = this.state;

    return (
      <>
        {!slidesAreLoaded && (
          <div className="pre-loading">
            <img src="/images/hero-logo_white.svg" alt="White Space" className="hero__info-logo" />
            <Ellipsis color="#fff" />
          </div>
        )}
        <div className={`container wrapper-l ${!slidesAreLoaded ? 'is-loading' : ''}`}>
          <HeroHeader setSlidesAreLoaded={this.setSlidesAreLoaded} />
          <div className="room-cards">
            <div className="room-cards__list wrapper-m">
              {rooms.map(room => (
                <RoomCard key={room.id} data={room} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
