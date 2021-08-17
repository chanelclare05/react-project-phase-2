import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component{

    getColor(){
        if (this.props.votes >= 10){
            return "#386641";
        } else if (this.props.votes>0) {
            return "#6a994e";
        } else if (this.props.votes === 0){
            return "black";
        } else {
            return "#bc4749";
        }
    }

    render(){
        return(
            <div className='Joke'>
                <div className="Joke-text"> 
                    {this.props.text}
                </div>
                <div className="Joke-buttons">
                    <span id="Joke-votes" 
                        style={{borderColor: this.getColor(), color: this.getColor()}}>{this.props.votes} <br></br> votes</span>
                    <i className="far fa-thumbs-up" onClick={this.props.upvote}/>
                    <i className="far fa-thumbs-down" onClick={this.props.downvote}/>
                </div>
            </div>
        )
    }
}

export default Joke;
