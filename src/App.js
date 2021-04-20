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
        <h1>Welcome to react calculator</h1>
      </div>
    );
  }
}
