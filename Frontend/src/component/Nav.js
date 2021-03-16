import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  ,NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand"  href="#">Bilie Store</a>
         
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home
              <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/Music">Music</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/Merch">Merch</NavLink>
              </li>
              <li className="nav-item ">
              <NavLink className="nav-link" to="/lien-he">Contact</NavLink>
              </li>
            
            </ul>
            <a className="ml-5 nav-link fas fa-user fa-lg" href="#"></a>
            <a className="fas fa-shopping-cart fa-lg" href="#"></a>
          </div>
        </div>
      </nav>
            </div>
        );
    }
}

export default Nav;