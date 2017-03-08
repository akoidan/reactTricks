import React, {Component} from "react";
import "./App.css";
import Nav from './components/Nav'
import AppImage from './AppImage'

export default class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (<div>
            <Nav/>
            {this.props.children}
        </div>);
    }

}