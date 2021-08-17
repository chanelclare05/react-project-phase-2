import React, { Component } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './NewsList.css'
import News from './News'

const newsURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=152739ec892148ed8d2495c65dfb92d3'



class NewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
            isLoading: true
        }
    }

    static defaultProps = {
        numNewsToGet: 1
    }

    async getNews(){
        let news = [];
        while (news.length < this.props.numNewsToGet){
            let response = await axios.get(newsURL, { headers: {Accept: 'application/json'}}) 
            news.push({id: uuidv4(), text: response.articles.title, votes: 0})
        }
        this.setState(oldState => ({
            news: [...oldState.news, ...news],
            loading: false
        }), 
        () => window.localStorage.setItem("news", JSON.stringify(this.state.news))
        )
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
            <div className="NewsList"> 
                <div className="NewsList-sidebar">
                    <h1 className="NewsList-title shake NewsList-shake">
                        Dad <span>Jokes</span>
                    </h1>
                    <p className="NewsList-shake NewsList-emoji">😂</p>
                    <button className="NewsList-getmore NewsList-shake " onClick={this.handleClick}>Generate Jokes</button>
                    <button className="NewsList-getmore NewsList-shake" onClick={this.handleSort}>Sort Jokes</button>
                </div>
                <div className="NewsList-jokes">
                    {this.state.jokes.map(j => (
                    <News 
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


export default NewsList;
