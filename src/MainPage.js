import React, {Component} from "react";
import "./App.css";

import {Link} from 'react-router';
export default class App extends React.Component {

    constructor(props) {
        super(props);

    }
    navigate() {
        console.log(this.props);
        this.props.history.pushState(null, '/');
    }

    render() {
        return (<div>
            <h1>ReactJS tricks</h1>
            <Link to="second" className="btn btn-success">Second Page</Link>
            <Link to="third" className="btn btn-info">Third page</Link>
            <button onClick={this.navigate.bind(this)}>Main</button>
            {this.props.children}
        </div>);
    }

}