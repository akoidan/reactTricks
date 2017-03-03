import React, {Component} from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
export default class FirstPage extends React.Component {

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


}