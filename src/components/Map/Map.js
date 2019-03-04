import React from "react";
import './Map.css';
// import {Link} from 'react-router-dom';
import {InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from '../CurrentLocation';

let zipCodeVariable;

export class MapContainer extends React.PureComponent{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        zipCode: '',
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

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const z = document.forms["zipCodeForm"]["zipCode"].value;
      
        if(!/^[0-9]+$/.test(z)){
          alert("Please only enter numeric characters only for the Zip Code! (Allowed input:0-9)")
        } else if (z.length < 5 || z.length > 5){
            alert("Zip Code must be 5 characters long")
        }
        console.log(this.state, 'state onSubmit')
        document.getElementById("zipCodeForm").reset();
        // this.props.history.push('/ProfileForm')
    }

    render() {
        // console.log('on load', this.props)
        return (
            <div className='mapProject'>
                <div className="row zipEntry">
                    <form id='zipCodeForm' onSubmit={this.onSubmit}>
                        <div className="col-md-6 col-xs-12">
                            <input 
                                id="zipCode" 
                                name='zipCode'
                                placeholder="Enter US Zip Code" 
                                type='text' 
                                onChange={this.handleChange} 
                                value={this.state.zipCode}
                                maxLength='5'
                            />
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <button className="btn btn-custom getAdventureButton">
                                Get my Adventure!
                            </button>
                        </div>
                    </form>
                </div>  
                <div className="col-md-12 col-xs-12 mapContainer">
                    <CurrentLocation
                        centerAroundCurrentLocation
                        google={this.props.google}
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
                    </CurrentLocation>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_APIKEY
})(MapContainer)