import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
    };
  }

  handleClick = (btnName) => {
    const { total } = this.state;
    const r = calculate({ total }, btnName);
    this.setState({ total: r.total });
  }

  render() {
    const { total } = this.state;
    const res = total;
    return (
      <>
        <Display result={ res } />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
