import React from "react";
import './Map.css';
// import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = [
    {elementType: 'geometry', stylers: [{color: '#172436'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#768B8E'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#000000'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#aaaaaa'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
    }
];

export class MapContainer extends React.PureComponent{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
    
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
 
    onClose = (props) => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
        }
    };

    render() {
        console.log('on load', this.props)
        return (
            <div className='mapProject'>
                <div className="row zipEntry">
                    <div className="col-md-6 col-xs-12">
                        <input id="zipCodeID" className="zipCode" placeholder="Enter US Zip Code" type='number' maxLength='5'></input>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <button type="button" id="getAdventureButton" className="btn btn-custom">
                            Get my Adventure!
                        </button>
                    </div>
                </div>  
                <div className="col-md-12 col-xs-12 mapContainer">
                    <Map 
                        centerAroundCurrentLocation
                        className='mapDiv'
                        google={this.props.google} 
                        zoom={10}
                        styles={mapStyles}
                        initialCenter={{
                            lat:  44.986656,
                            lng: -93.258133
                        }}
                        >
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} 
                        />

                        <InfoWindow 
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_APIKEY
})(MapContainer)