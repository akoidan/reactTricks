import React, {Component} from "react";
import "../App.css";

export default class ArticlePage extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.location)

    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        return (<div>
            This is article page
        </div>);
    }

}