import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
          <code>React calculator</code>
        </p>
         <a
          className="App-link"
          href="https://github.com/IBUNHABIBU/react-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fully functional react calculator app
        </a>
      </header>
    </div>
    )
  }
}

