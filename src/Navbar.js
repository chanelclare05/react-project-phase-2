import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'



class Navbar extends Component {

    

    render(){
        return (
            <div className='Navbar'>
                <NavLink exact activeClassName="Navbar-active" to="/">Home</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/joke-list"> Dad Jokes</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/news-list"> News List</NavLink>
            </div>
        )
    }
}
  
  export default Navbar;
  