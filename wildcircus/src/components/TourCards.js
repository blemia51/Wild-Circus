import React, { Component } from "react"
import Moment from 'react-moment';
import '../App.css'
//import SearchField from './SearchField'
import { connect } from  'react-redux';
import Reservation from './Reservation'
import Fade from 'react-reveal/Fade';//react reveal
//import { Link } from 'react-router-dom';

class TourCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tours:[],
      ticket: '',
      user:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/tours',
    {
      method:'GET',
      headers:{
        'Authorization':  'Bearer '  +  this.props.token,
        'Content-Type':  'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        //this.props.history.push('/userconnexion')
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        tours: data,
    })
  })
  .catch()
  }
  



   numberTicket= (e)=>{
    this.setState({ticket: e.target.value})
    // console.log(event.target.value)
  }

  // getCountrys = () => { 
  //   if (this.state.input.length > 0 ){
  //   const result = this.state.travelsStore.filter(travel => travel.destination.toLowerCase() === this.state.input.toLowerCase())
  //   this.setState({travelsTemp:result})}
  //   else{this.setState({travelsTemp:this.state.travelsStore})}
  // }


  render() {
    console.log(this.state.user.nickname)
    return (
      <div className='tour-cards'>
        <Fade left>
        <div className='title-travel-cards'><h2>tours</h2></div>
        </Fade>
        <div className='tours-legend'>
          <p>Date</p>
          <p>Location</p>
          <p>Sits</p>
          <p>Tickets</p>
        </div>
        {React.Children.toArray(this.state.tours.map(res =>{
          return <div className='liste-tours'>
            <div>
              <Moment format="DD/MM/YYYY" style={{display:'flex', justifyContent:'center'}}>{res.date}</Moment>
            </div>
            <p>{res.city}</p>
            
            <p>{res.number_of_sits}</p>
              <select name="nombre de places" size="1" onChange={this.numberTicket} >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <Reservation iduser={this.props.iduser} idtour={res.idtour} ticket={this.state.ticket} />
              </div>})
            )}
              
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
export default connect(mapStateToProps)(TourCards)
