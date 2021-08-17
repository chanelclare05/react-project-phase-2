import React, { Component } from 'react';
import Joke from './Joke'
import './JokeList.css'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const jokeURL = 'https://icanhazdadjoke.com/'


class JokeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: true
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }

    static defaultProps = {
        numJokesToGet: 1
    }

    componentDidMount(){
        if(this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes(){
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet){
            let response = await axios.get(jokeURL, { headers: {Accept: 'application/json'}}) 
            jokes.push({id: uuidv4(), text: response.data.joke, votes: 0})
        }
        this.setState(oldState => ({
            jokes: [...oldState.jokes, ...jokes],
            loading: false
        }), 
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    sortJokes(){
        let sortedJokes = this.state.jokes.sort((a,b) => b.votes-a.votes);
        this.setState({jokes: sortedJokes})
        console.log(sortedJokes)
    }

    handleVote(id, delta) {
        this.setState(oldState => 
            ({
                jokes: oldState.jokes.map(j =>
                    j.id === id ? {...j, votes: j.votes+delta} : j
                )
            }), 
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    }

    handleClick(){
        this.setState({loading: true}, this.getJokes);
        
    }

    handleSort(){
        this.sortJokes();
    }

    render(){
        if(this.state.loading){
            return (
                <div className="loading">
                    <h1>Loading...</h1>
                    <img className="spinner" src="https://i.imgur.com/PB7qLQs.png" alt="loading spinner"></img>
                </div>
            )
        }
     
        return (

            <div className="JokeList"> 
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title shake JokeList-shake">
                        Dad <span>Jokes</span>
                    </h1>
                    <p className="JokeList-shake JokeList-emoji">😂</p>
                    <button className="JokeList-getmore JokeList-shake " onClick={this.handleClick}>Generate Jokes</button>
                    <button className="JokeList-getmore JokeList-shake" onClick={this.handleSort}>Sort Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                    <Joke 
                        key={j.id} 
                        votes={j.votes} 
                        text={j.text}
                        upvote={() => this.handleVote(j.id, 1)}
                        downvote={() => this.handleVote(j.id, -1)}
                    />))}
                </div>
            </div>
        )
    }

}

export default JokeList;