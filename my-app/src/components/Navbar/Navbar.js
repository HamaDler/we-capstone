import React from 'react'
import {Link} from 'react-router-dom';
import  './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_heading'>
            <h1>Meals <span> App</span></h1>

        </div>
        <div className='navbar_links'></div>
        <ul>
            <Link to='/'><li> Home </li></Link>
            <Link to='/Categories'><li> Categories </li></Link>
            <Link to='/Random'><li> Random </li></Link>
        </ul>

    </div>
  )
}

export default Navbar
