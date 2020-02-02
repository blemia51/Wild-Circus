import React, { Component } from "react"
import { connect } from  'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import NavFooter from "./NavFooter"
import Qrticket from './Qrticket'
//import del from '../img/delete.png'

//import axios from 'axios';



class MyTours extends Component {
  constructor(props) {
    super(props)
    this.state = {
       tour_user: []
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:8000/api/tour_user/${this.props.iduser}`,
    {
      method:'GET',
      headers:{
        'Authorization':  'Bearer '  +  this.props.token,
        'Content-Type':  'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
       // this.props.history.push('/userconnexion')
      }
      return res.json()
      
    })
    .then(data => {
      this.setState({
        tour_user: data
        
    })
  })
  .catch()
  }
 
  // handleDelete (id)  {
  //   axios.delete(`http://localhost:8000/api/travel_user/${id}`)
  //   .then(res =>{
  //     const myTravels = this.state.travel_user.filter(travel=>travel.travel_user_id!==id)
  //     this.setState ({travel_user: myTravels})
  //     //alert(`tuk-tuk supprimé`)
  //   }).catch(event => {
  //     console.error(event);
  //     alert('tuk-tuk non supprimé')
  //   })
  // }
  
  render() {
    return (
      <div className='tour-cards'>
      <div className='title-travel-cards'><h2>My Tours</h2></div>
      {React.Children.toArray(this.state.tour_user.map(res =>{
        return <div className='liste-tours'>
        <div>
          <Moment format="DD/MM/YYYY" style={{display:'flex', justifyContent:'center'}}>{res.date}</Moment>
        </div>
        <p>{res.city}</p>
        <Qrticket iduser={this.props.iduser} city={res.city} tickets={res.ticket} />
      </div>}))}

           
        <NavFooter/>
      </div>
    )
  }
}
function  mapStateToProps(state) {
  return {
      token:  state.auth.token,
      iduser: state.auth.iduser
  }
}
export default connect(mapStateToProps)(MyTours)
