import React, {Component} from 'react';
import './App.css';
import B from "./B";


class App extends Component {

  constructor() {
    super();
    this.state = {paramA: 'aswed'};
  }
  handleChange(event) {
    this.setState({paramA: event.target.value});
  }


  render() {
    return (<div>
      <input value={this.state.paramA} onChange={e => this.handleChange(e)}/>
      <label>
      <B paramA={this.state.paramA}></B>
      </label>
    </div>);
  }
}

export default App;
