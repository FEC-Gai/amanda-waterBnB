import React from 'react';
import axios from 'axios';
//import PhotoGrid from './PhotoGrid.jsx';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      mainPhoto: {},
      carouselHidden: true
    }
    this.getPhotosByRoomId = this.getPhotosByRoomId.bind(this);
    //this.getTitleByRoomId = this.getTitleByRoomId.bind(this);
  }

  componentDidMount() {
    let search = window.location.search;
    let roomId = Number(search.split('?').pop());
    console.log('roomId (not being used now): ', roomId);
    this.getPhotosByRoomId(roomId);

    //this.getTitleByRoomId();
  }

  getPhotosByRoomId(id) {
    //console.log('id: ', id);
    axios.get(`http://localhost:3001/images/${id}`)
      .then((response) => {
        console.log('images data by room id: ', response.data);
        const roomPhotos = response.data[0].room_photos.slice();
        this.setState({
          photos: roomPhotos,
          mainPhoto: roomPhotos[0]
        });
      })
      .catch((err) => {
        console.log('error getting photos by id from server: ', err);
      })
  }

  // getTitleByRoomId(roomId) {
    // axios.get(`http://localhost:3001/${roomId}/title`)
    //   .then((response) => {
    //     console.log('photos: ', response.data);
    //     let allPhotos = [];
    //     allPhotos.push(response.data[0]);
    //     this.setState({
    //       photos: allPhotos,
    //       hasLoaded: true
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('error getting photos: ', err);
    //   })
  // }

  render() {
    const { title } = this.state;
    const { photos } = this.state;
    const { mainPhoto } = this.state;
    const { carouselHidden } = this.state;
    //   return (
    //     <h1>{ title }</h1>
    //     <PhotoGrid photos={ photos } />
    //   );
    return (
      <div className="photo-gallery">
        <h1>Unique Glamping Experience</h1>
      </div>
    );
  }
}

export default Images;