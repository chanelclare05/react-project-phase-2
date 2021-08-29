import React, { Component } from 'react'
import './App.css';
import JokeList from './JokeList'
import {Route, Switch} from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Error404 from './Error404'
import NaughtyJokesList from './NaughtyJokesList'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/react-project-phase-2/" component={Home}/> 
          <Route exact path="/react-project-phase-2/joke-list" component={JokeList}/> 
          {/* <Route exact path="/react-project-phase-2/naughty-joke-list" component={NaughtyJokesList}/>  */}
          <Route component={Error404} /> 
        </Switch>

      </div>
    );
  }
}

export default App;
