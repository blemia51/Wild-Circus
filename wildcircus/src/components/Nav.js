import React, {Component} from 'react'
import '../App.css'
import circus from '../img/cirque.jpg'
import { Link } from 'react-router-dom'
import { connect } from  'react-redux';



class Nav extends Component {
  constructor (props){
    super (props)

    //this.logout=this.logout.bind(this)
  }


  // logout(e) {
  //   e.preventDefault()
  //   this.props.dispatch({
  //     type: "LOGOUT",
      
  //   })
  //   this.props.history.push("/")

  
  // }

  render(){
  return (
    <div className='nav-container'>
      <div className='nav-image'>
      <img src={circus} alt='circus' className='circus-image' ></img>
      </div>
      
      <h1 className='title' >WILD CIRCUS</h1>
      <div className='log-buttons' >
      <Link to='/userconnexion' style={{padding:'10px'}}>
      <p>Sign In</p>
      </Link>
      <Link to='/formusers'>
      <p>Sign Up</p>
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
}
function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
      iduser: state.auth.iduser
  }
};

export  default  connect(mapStateToProps)(Nav)

