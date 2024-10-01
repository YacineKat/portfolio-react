import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('about')
  return (
    <div className="Navbar-Container">
      <nav class="Navbar">
        <div class="Logo">
          <img src={logo} alt="" />
        </div>
        <ul class="Nav-Items">
          <li><a href="#about" onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''} >About</a></li>
          <li><a href="#portfolio" onClick={() => setMenu('portfolio')} className={menu === 'portfolio' ? 'active' : ''} >Portfolio</a></li>
          <li><a href="#contact" onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''} >Contact</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
