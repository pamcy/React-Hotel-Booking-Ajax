import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MosaicHeader from '../../components/MosaicHeader/index';
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
    const { name, imageUrl } = this.state.currentRoom;

    return (
      <div className="container wrapper-l">
        <MosaicHeader name={name} images={imageUrl} />
      </div>
    );
  }
}

export default DetailsPage;
