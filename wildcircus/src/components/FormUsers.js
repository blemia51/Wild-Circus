import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import back from '../img/arrow-back.png'
//import logoOk from '../img/logoOk.png';
import '../App.css'


class FormUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      email: '',
      password: '',
      comfirm_password: ''
    };
  }

  nextPage = () => {
    this.setState({
      firstSection: false,
      secondSection: true
    })
  } 

  previousPage = () => {
    this.setState({
      firstSection: true,
      secondSection: false
    })
  } 
  
  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    const {...user} = this.state
    //user.avatar = this.props.avatar
    console.log(user)
    axios.post('http://localhost:8000/api/users',user)
    .then(res =>{
      this.setState({
        isAdded: true
      })
     // setTimeout(()=>{this.props.history.push("/userconnexion")},2000)
      //alert(`Utilisateur ${this.state.firstname} ${this.state.lastname} ajouté`)
    }).catch(event => {
      console.error(event);
      alert('User not added')
    })
  }



  render(){
    return(
      
      <div className='form-users'>
          <div className="title-form-user"><h2>SIGN UP</h2></div>
            <div className="div-add-user">
              <label htmlFor="nickname">Nom</label>
              <input type="text" id="nickname" onChange={this.change} />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" onChange={this.change} />             
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" onChange={this.change} />
              <label htmlFor="comfirm-password"> Confirmation mot de passe</label>
              <input type="password" id="comfirm-password" onChange={this.change} />
              <button className='send-form-users' onClick={this.submit}>Envoyer</button>
              
            </div>
          
        </div>
    );
  }
}

export  default  FormUsers
