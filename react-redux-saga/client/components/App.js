import React from 'react';
import {addToList} from "../redux/actions/posts";
import {connect} from "react-redux";

export class App extends React.Component {

  constructor() {
    super();
    this.state = {inputValue: 'Hello world!'};
  }

  onChangeValue(evt) {
    this.setState({inputValue: evt.target.value})
  }

  buttonClick (evt) {
    this.props.addToList(this.state.inputValue);
  }

  render() {
    return (
        <div style={{textAlign: 'center'}}>
          <h1>Hello World</h1>
          {this.props.posts.map(a => (<div key={a}>{a}</div>))}
          <input type="text" value={this.state.inputValue} onChange={this.onChangeValue.bind(this)}/>
          <input type="button" value="click me" onClick={this.buttonClick.bind(this)}/>
        </div>);
  }
}

const mapStateToProps = (state, ownProperties) => {
  return {
    posts: state.posts || []
  }
};

export default connect(mapStateToProps, {
  addToList
})(App);