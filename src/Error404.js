import React, { Component } from 'react'
import './Error404.css'

class Error404 extends Component {

    pageRedirect(){
            setTimeout(function(){
                window.location = "/";
        },5000);    
    }

    componentDidMount(){
        this.pageRedirect();
    }

    render(){
        return (
            <div id="Error404">
                <div className="error">404</div>
                <br /><br />
                <span className="info">File not found...<br/>You will be redirected shortly</span>
                <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="gif" alt="404" />
                
            </div>

        )
    }
}

export default Error404;