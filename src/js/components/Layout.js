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
    this.props.fecthUser()
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
