
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
import Addproduct from './component/Addproduct';

class App extends Component {
  
  render() {
    return (
      <div >
      <Router>
        <Nav/><Addproduct/>
       <DieuhuongURL/>  <Background/>
     <Footer/>
      </Router>
      </div>   
    );
  }
}

export default App;