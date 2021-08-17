import React, { Component } from 'react'
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div className="HomePage" id="Accordian">
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>React Competencies</Accordion.Header>
                    <Accordion.Body>
                        <p> <strong>Key Competencies acquired and demonstrated in the React Phase 2 Project.</strong></p>
                        <ul>
                            <li>JSX structure</li>
                            <li>Component creation and the storing, updating and manipulation of data</li>
                            <li>Hooks, Context and Routing</li>
                            <li>Compoment Lifecycle and Methods</li>
                            <li>Ideation and desgining of projects from start to finish</li>
                        </ul>  
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Dad Jokes Project</Accordion.Header>
                    <Accordion.Body>
                    <p> <strong>The project is a simple fetch and rate tool using simple up and down votes of jokes</strong></p>
                    <p> <strong>Key features in the 'Dad Jokes' project.</strong></p>
                        <ul>
                            <li>Fetch data from api using the axios library</li>
                            <li>Like/Dislike functionality of individual componenets</li>
                            <li>Sort Functionality ranked by number of votes</li>
                            <li>Use of client-side routing using JSON server and local Storage</li>
                            <li>Responsive design for use on various devices</li>
                            <li>Basic CSS styling and some animation using keyframes</li>
                        </ul>  
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        )
    }
}

export default Home;

