import React, {Component} from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Andrew"
        };
    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        return (<div>
            <Footer title={this.state.name}/>
            <Header/>
            <Input title={this.state.name} changeName={this.changeName.bind(this)} />
        </div>);
    }

    _addImage = (logo) => {
        this.setState({logo});
    };
}