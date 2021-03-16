
import './App.css';
import Nav from './component/Nav';
import React, { Component } from 'react';
import Content from './component/Content';
import Footer from './component/Footer'
import DieuhuongURL from './router/DieuhuongURL';
import Background from './component/Background'
import {
  BrowserRouter as Router,
  Switch,
  route,
  Link
} from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      
      <Router>
      <div>
        <Nav/>
       <DieuhuongURL/>
     <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;