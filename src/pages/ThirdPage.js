import React, {Component} from "react";
import "../App.css";

export default class ThirdPage extends React.Component {

    constructor(props) {
        super(props);

    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        return (<div>
            This is third page page
        </div>);
    }

}