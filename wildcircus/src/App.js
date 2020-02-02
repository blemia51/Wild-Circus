import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserConnexion from './components/UserConnexion'
import FormUsers from './components/FormUsers'
import TourCards from './components/TourCards'
import Nav from './components/Nav'
import MyTours from './components/MyTours'
import Performances from './components/Performances'
//import Reservation from './components/Reservation'
import './App.css';
import NavFooter from './components/NavFooter'


function App() {
  return (
    <div className="App">
      <Nav />
      <Performances />
      <Switch>
        <Route path="/formusers" component={FormUsers}/>
        <Route path="/userconnexion" component={UserConnexion}/>
        <Route exact path="/tourcards" component={TourCards}/>
        <Route exact path="/mytours" component={MyTours}/>
      </Switch>
      <NavFooter /> 
    </div>
  );
}

export default App;
