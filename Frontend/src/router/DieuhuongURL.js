
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React, { Component } from 'react';
  import Contact from "../component/Contact";
  import Content from "../component/Content";

  import Music from "../component/Music";
  import Merch from "../component/Merch";
  import Productdetail from "../component/Productdetail";
  
  class DieuhuongURL extends Component {
      render() {
          return (
              <div>
                      <Route exact path="/" component={Content}/>
                      <Route exact path="/Home" component={Content}/>
                      <Route exact path="/Music" component={Music}/>
                      <Route exact path="/Merch" component={Merch}/>
                      <Route exact path="/lien-he" component={Contact}/>
                      <Route exact path="/san-pham/:slug.:id.html" component={Productdetail}/>
              </div>
          );
      }
  }
  
  export default DieuhuongURL;