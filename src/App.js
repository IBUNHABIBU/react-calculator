/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

const propTypes = {
  prop: PropTypes,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1 align="center">React calculator</h1>
      </div>
    );
  }
}
