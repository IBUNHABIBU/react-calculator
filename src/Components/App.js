/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
    };
  }

  handleClick = (btnName) => {
    const newState = this.state;
    this.setState((data) => calculate(data, btnName));
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result= {total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
