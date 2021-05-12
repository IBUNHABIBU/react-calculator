import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  handleClick = (btnName) => this.setState((data) => calculate(data, btnName));

  render() {
    const { total, next } = this.state;
    const res = total || next;
    return (
      <>
        <div className="display-container">
          <Display result={res} />
        </div>
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
