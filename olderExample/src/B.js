import React, {Component} from 'react';
import C from "./C";

class B extends Component {

  render() {
    console.log(`B renders ${this.props.paramA}`);
    return (<div><C paramB={this.props.paramA}></C></div> );
  }
}

export default B;
