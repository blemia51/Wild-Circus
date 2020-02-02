import React from "react";
import {Link} from 'react-router-dom';
import logoProposer from '../img/logoProposer.png';
import compass from '../img/compass.png'
import folder from '../img/folder.png'
import profile from '../img/profile.png'

import '../App.css'


const NavFooter = () => {
  return(
    <div className='footer'>
      
      <Link className='lien' to="/MyTours">
        <figure className='logos-footer'>
          <img className='img-footer' src={folder} alt='logo voyages'/>
        </figure>
        <p className="title_footer">My tours</p>
      </Link>
      
      
    </div>
  )  
}


export default NavFooter