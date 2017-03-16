import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import {connect} from "react-redux"
import {fecthUser} from "../actions/userActions"

@connect(store => {
  return {user: store.user.user}
}, {fecthUser})
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  componentWillMount() {
    console.log(fecthUser);

    setTimeout(() => {
      this.props.fecthUser()
    }, 2000);
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <span style={{color: 'red'}}>{this.props.user.name}</span>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
