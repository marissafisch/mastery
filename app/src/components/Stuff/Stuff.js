import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Stuff extends Component {
    render() {
        return (
            <section>
                <div className= "hello">PARAM VIEW</div>
                <h1>{this.props.match.params.name}</h1>
                <ul>
                    <li>Hello</li>
                    <li>How Are You</li>
                </ul>
                
            </section>
        );
    }
}