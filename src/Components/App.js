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
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="display-container">
          <Display result={`${total || ''} ${operation || ''} ${next || ''}`} />
        </div>
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
