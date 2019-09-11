import React, { Component } from 'react';

import HeroHeader from '../../components/HeroHeader/index';
import RoomCard from '../../components/RoomCard/index';
import { apiGetAllRooms } from '../../api';

class MainPage extends Component {
  state = {
    rooms: [],
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

  render() {
    const { rooms } = this.state;

    return (
      <div className="container wrapper-l">
        <HeroHeader />
        <div className="room-cards">
          <div className="room-cards__list wrapper-m">
            {rooms.map(room => (
              <RoomCard key={room.id} data={room} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
