import React, {Component} from 'react';

class C extends Component {

  render() {
    console.log(`C Render with ${this.props.paramB}`);
    return (<div>{this.props.paramB}</div> );
  }
}

export default C;
