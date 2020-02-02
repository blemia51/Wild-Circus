import React from 'react'
import '../App.css'
import circus from '../img/cirque.jpg'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-image'>
      <img src={circus} alt='circus' className='circus-image' ></img>
      </div>
      <h1 className='title' >WILD CIRCUS</h1>
      <div className='log-buttons' >
      <Link to='/userconnexion'>
      <input type='button' value='Sign In'></input>
      </Link>
      <Link to='/formusers'>
      <input type='button' value='Sign Up'></input>
      </Link>
      </div>
      <nav>
        <ul>
            <li><a href='#Performances'>Performances</a></li>
            <li><a href='#AboutUs'>About Us</a></li>
            <li><a href='#Contac'>Tours</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

