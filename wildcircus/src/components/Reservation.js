import React, { Component } from "react"
import axios from 'axios'
import logoOk from '../img/logoOk.png';



class Reservation extends Component {
constructor(props) {
  super(props) 
  this.onReservation=this.onReservation.bind(this)
  this.state = {
    isBooked: false
  }
}

onReservation(id) {
  //e.preventDefault()
      const reservation  = {
        userid: this.props.iduser, 
        tourid: id,
        ticket: this.props.ticket
      }
      console.log({reservation})
      
      axios.post('http://localhost:8000/api/tour_user', reservation)
      .then(res => {
        this.setState ({
          isBooked: true
        })
      }).catch(event => {
      console.error(event);
  });
}

render() {
  return (
    <div className='reserve-button'>
      
      <button onClick={this.onReservation.bind(this,this.props.idtour)}>Add</button>
      {this.state.isBooked?<div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'5x'}} >
        <img style={{width:'12%'}} src={logoOk} alt='logo Ok'/>ticket stored</div>:null}
    </div>
   
  )
}

}

export default Reservation  