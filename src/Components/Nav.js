import React from 'react';
import './stylesheet/nav.css';

const Nav = () => (
  <div className="nav">
    <div className="logo">
      <span className="math">Math</span>
      Magician
    </div>
    <div className="nav-bar">
      <a href="/">Home</a>
      <a href="/Calculator">Calculator</a>
      <a href="/Quote">Quote</a>
    </div>
  </div>
);

export default Nav;
