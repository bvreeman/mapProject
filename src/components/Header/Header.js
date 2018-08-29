import React from "react";
import './Header.css';
import logo from './icon-white-eye.png'


export class Header extends React.PureComponent{
    render() {
        return (
            <div className="container-fluid headerContainer">
            <img src={logo} alt="Choose your own adventure" height="150" width="160"></img>
            <h1 className='appTitle'>Adventure Planner</h1>
        </div>
        )
    }
}

export default Header;