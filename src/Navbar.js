import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'



class Navbar extends Component {

    

    render(){
        return (
            <div className='Navbar'>
                <NavLink exact activeClassName="Navbar-active" to="/react-project-phase-2/">Home</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/react-project-phase-2/joke-list"> Dad Jokes</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/react-project-phase-2/news-list"> Naughty Jokes (Coming Soon)</NavLink>
            </div>
        )
    }
}
  
  export default Navbar;
  