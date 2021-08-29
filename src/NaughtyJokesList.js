import React, { Component } from 'react';
import NaughtyJokes from './NaughtyJokes';
import './NaughtyJokesList.css'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const jokeURL = 'https://v2.jokeapi.dev/joke/Any'


class NaughtyJokesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: true,
            isFlipped: false
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
            jokes.push({
                id: uuidv4(), 
                setup: response.data.setup,
                delivery: response.data.delivery,
                flags: response.data.flags,
                category: response.data.category,
                votes: 0})
        }
        console.log(jokes)
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

    handleVote(id, change) {
        this.setState(oldState => 
            ({
                jokes: oldState.jokes.map(j =>
                    j.id === id ? {...j, votes: j.votes+change} : j
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
                <div className="naugthy-loading">
                    <h1>Loading...</h1>
                    <img className="naugthy-spinner" src="https://i.imgur.com/PB7qLQs.png" alt="loading spinner"></img>
                </div>
            )
        }
     
        return (

            <div className="naugthy-okeList"> 
                <div className="naugthy-JokeList-sidebar">
                    <h1 className="naugthy-JokeList-title shake naugthy-JokeList-shake">
                        <span>Jokes</span>
                    </h1>
                    <p className="naugthy-JokeList-shake naugthy-JokeList-emoji">🤪</p>
                    <button className="naugthy-JokeList-getmore naugthy-JokeList-shake " onClick={this.handleClick}>Generate Jokes</button>
                    <button className="naugthy-JokeList-getmore naugthy-JokeList-shake" onClick={this.handleSort}>Sort Jokes</button>
                </div>
                <div className="naugthy-JokeList-jokes">
                    {this.state.jokes.map(j => (
                    <NaughtyJokes 
                        key={j.id} 
                        votes={j.votes} 
                        setup={j.setup}
                        upvote={() => this.handleVote(j.id, 1)}
                        downvote={() => this.handleVote(j.id, -1)}
    
                        delivery={j.delivery}
                        category={j.category}
                    />))}
                </div>
            </div>
        )
    }

}

export default NaughtyJokesList;