import React, { Component } from 'react'
import './NaughtyJokes.css'

class NaughtyJokes extends Component{

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

    getDelivery(){
        console.log(this.props.delivery)

    }

    render(){
        return(
            <div className='naughty-joke' id="naughty-jokeCard">
                <div className="naughty-Joke-setup"> 
                    {this.props.setup}
                    <br></br>     
                    <br></br>   
                    <span className="naughty-delivery">{this.props.delivery}</span>
                </div>
                <div className="naughty-Joke-buttons">
                    <span id="naughty-Joke-votes" 
                        style={{borderColor: this.getColor(), color: this.getColor()}}>{this.props.votes} <br></br> votes</span>
                    <i className="far fa-thumbs-up" onClick={this.props.upvote}/>
                    <i className="far fa-thumbs-down" onClick={this.props.downvote}/>
                </div>
            </div>
        )
    }
}

export default NaughtyJokes;
