import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import '@fortawesome/fontawesome-free/css/all.min.css';



export default class App extends Component {
  render() {
    return (
      <div>
        
          <Navbar />
          <News key="general" pageSize={5} country="us" category="general" />
        
      </div>
    );
  }
}
