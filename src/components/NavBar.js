import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>Poképedia</h1>
      <ul className='nav-container'>
        <li><Link id='nav-item' to='/'>Pokedex</Link></li>
        <li><Link id='nav-item' to='/team-builder'>My Party</Link></li>
      </ul>
    </div>
  );
}

export default NavBar