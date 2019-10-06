import React, { Component } from 'react';

import { Ellipsis } from 'react-spinners-css';

import HeroHeader from '../../components/HeroHeader/index';
import RoomCard from '../../components/RoomCard/index';
import { apiGetAllRooms } from '../../api';

class MainPage extends Component {
  state = {
    rooms: [],
    dataIsFetched: false,
    slidesAreLoaded: false,
  };

  componentDidMount() {
    this.getRoomsData();
    window.scrollTo(0, 0);
  }

  getRoomsData = async () => {
    try {
      const response = await apiGetAllRooms();
      this.setState({ rooms: response.data.items });
    } catch (e) {
      console.error(`🚫 Something went wrong fetching API calls: ${e}`);
    }

    this.setState({ dataIsFetched: true });
  };

  setSlidesAreLoaded = () => {
    this.setState({ slidesAreLoaded: true });
  };

  render() {
    const { rooms, dataIsFetched, slidesAreLoaded } = this.state;
    const allDownloaded = dataIsFetched && slidesAreLoaded;

    return (
      <>
        {!allDownloaded && (
          <div className="pre-loading">
            <img src="/images/hero-logo_white.svg" alt="White Space" className="hero__info-logo" />
            <Ellipsis color="#fff" />
          </div>
        )}
        <div className={`container wrapper-l ${!allDownloaded ? 'is-loading' : ''}`}>
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
