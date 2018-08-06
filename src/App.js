import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="sidebar">
            <div className="sidebar-header">

                <img src="assets/img/icon-white-eye.png " alt="Choose your own adventure" height="150" width="160"></img>
                <h1>Adventure Planner</h1>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Location</a>
                    <form className="collapse list-unstyled" id="pageSubmenu">
                        <p className="input-text">
                          {/* <!-- <input type="text" id="locationCenter" placeholder="Enter City"> --> */}
                            <input id= "zipCodeID" className="zipCode" placeholder="Enter US Zip Code" input type='number' maxlength='5'></input>
                            <div id='warning'></div>
                        </p>
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
            <div className="footer">

                <sub>&copy; Copyright 2018</sub>
                {/* <!-- Sidebar Holder<sub>&copy; Copyright 2018</sub>--> */}
            </div>
        </nav>
      <div className="results">
        {/* <!-- DIV FOR MAP --> */}
        <div id="map"></div>
      </div>
    </div>
    );
  }
}

export default App;
