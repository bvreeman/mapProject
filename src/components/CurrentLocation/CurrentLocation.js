import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
    
    // [{elementType: 'geometry', stylers: [{color: '#172436'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    // {
    //     featureType: 'administrative.locality',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#d59563'}]
    // },
    // {
    //     featureType: 'poi',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#d59563'}]
    // },
    // {
    //     featureType: 'poi.park',
    //     elementType: 'geometry',
    //     stylers: [{color: '#768B8E'}]
    // },
    // {
    //     featureType: 'poi.park',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#ffffff'}]
    // },
    // {
    //     featureType: 'road',
    //     elementType: 'geometry',
    //     stylers: [{color: '#38414e'}]
    // },
    // {
    //     featureType: 'road',
    //     elementType: 'geometry.stroke',
    //     stylers: [{color: '#212a37'}]
    // },
    // {
    //     featureType: 'road',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#9ca5b3'}]
    // },
    // {
    //     featureType: 'road.highway',
    //     elementType: 'geometry',
    //     stylers: [{color: '#746855'}]
    // },
    // {
    //     featureType: 'road.highway',
    //     elementType: 'geometry.stroke',
    //     stylers: [{color: '#1f2835'}]
    // },
    // {
    //     featureType: 'road.highway',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#f3d19c'}]
    // },
    // {
    //     featureType: 'transit',
    //     elementType: 'geometry',
    //     stylers: [{color: '#2f3948'}]
    // },
    // {
    //     featureType: 'transit.station',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#d59563'}]
    // },
    // {
    //     featureType: 'water',
    //     elementType: 'geometry',
    //     stylers: [{color: '#000000'}]
    // },
    // {
    //     featureType: 'water',
    //     elementType: 'labels.text.fill',
    //     stylers: [{color: '#aaaaaa'}]
    // },
    // {
    //     featureType: 'water',
    //     elementType: 'labels.text.stroke',
    //     stylers: [{color: '#17263c'}]
    // }]
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};