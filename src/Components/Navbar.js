
import React, { Component } from 'react';

import './Navbar.css';



export default class Navbar extends Component {
  render() {
    return (
<div>
<nav className='nav'>
<div className="links-container">
    <div className="about">About</div>
    <div className="contact">Contact</div>
</div>
</nav>
</div>
    )
  }
}