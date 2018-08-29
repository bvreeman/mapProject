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
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Location</a>
                    <form className="collapse list-unstyled" id="pageSubmenu">
                        <div className="input-text">
                          {/* <!-- <input type="text" id="locationCenter" placeholder="Enter City"> --> */}
                            <input id="zipCodeID" className="zipCode" placeholder="Enter US Zip Code" type='number' maxLength='5'></input>
                            <div id='warning'></div>
                        </div>
                    </form>
                    {/* <!-- </label> --> */}
                </li>

                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Categories</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <form className="form-check">
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" id="cboxcon" name="check"></input>
                                        <span className="label-text">Concerts</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" id="cboxsport" name="check"></input>
                                        <span className="label-text">Sports</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" id="cboxart" name="check"></input>
                                        <span className="label-text">Arts & Theater</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" id="cboxfamily" name="check"></input>
                                        <span className="label-text">Family</span>
                                    </label>
                                </div>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
            <br></br>
            <div className="get-adv-btn">
                <button type="button" id="getAdventure" className="btn btn-custom">
                    <h4>Get my Adventure!</h4>
                </button>
                
            </div>        
        </nav>
      <MapContainer />
      <PageFooter />
    </div>
    );
  }
}

export default App;
