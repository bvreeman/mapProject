import React, { Component } from 'react';
import './App.css';
import PageFooter from "./components/Footer"
import MapContainer from "./components/Map"
import Header from './components/Header'
// import { MapContainer } from './components/Map/Map';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="input-text">
            {/* <!-- <input type="text" id="locationCenter" placeholder="Enter City"> --> */}
            <input id="zipCodeID" className="zipCode" placeholder="Enter US Zip Code" type='number' maxLength='5'></input>
            <div id='warning'></div>
        </div>                                  
            <br></br>
            <div className="get-adv-btn">
                <button type="button" id="getAdventure" className="btn btn-custom">
                    <h4>Get my Adventure!</h4>
                </button>
            </div>        
      <MapContainer />
      <PageFooter />
    </div>
    );
  }
}

export default App;
