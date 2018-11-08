import React, { Component } from 'react';
import './App.css';
import PageFooter from "./components/Footer"
import MapContainer from "./components/Map"
import Header from './components/Header'
// import { MapContainer } from './components/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />             
        <MapContainer />
        <PageFooter />
      </div>
    );
  }
}

export default App;
