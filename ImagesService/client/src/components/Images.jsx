import React from 'react';
import axios from 'axios';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleAndPhotos: {}
    }
  }

  componentDidMount() {
  this.getTitleAndPhotosByRoomId(1);
  }

  getTitleAndPhotosByRoomId(roomId) {
  axios.get(`http://localhost:8080/${roomId}/room_photos`)
    .then((response) => {
      this.setState({
        titleAndPhotos: response.data
      });
      console.log('titleAndPhotos: ', response.data);
    })
    .catch((err) => {
      console.log('error getting title and photos: ', err);
    })
  }

  render() {
    // return (

    // );
  }
}

export default Images;