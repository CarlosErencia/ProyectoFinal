import React, { Component } from 'react';
import { Map, GoogleApiWrapper , InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '45%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div class="Mapa">
        <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={
          {
            lat:  41.36839966486906,
            lng:  2.190030116902249
          }
        }
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Hotel W Barcelona'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjEi4sXweebTI1gYWubxNbJHLP-_6RHC8'
})(MapContainer);