import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './Footer.js';
import Header from './header/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Paljors React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Footer></Footer>

      </div>
    );
  }
}

export default App;
