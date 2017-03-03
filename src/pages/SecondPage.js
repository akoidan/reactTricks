import React, {Component} from "react";
import "../App.css";

export default class SecondPage extends React.Component {

    constructor(props) {
        super(props);

    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        return (<div>
            This is another page
        </div>);
    }

}