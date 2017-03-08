/**
 * Created by andrew on 3/5/17.
 */

import React, {Component} from 'react';

export default class Todo extends React.Component {



  navigate() {
  }

  render() {
    let imgStyle = {
      height: '20px',
      width: '20px',
      marginLeft: '10px'
    };
    let h3Style = {
      display: 'inline-block'
    };
    return (<li>
      <h3 style={h3Style}>{this.props.todo.text}</h3>
      <img src={this.props.todo.completed ? './ok.svg' : "./nok.svg" } style={imgStyle} />
    </li>)
  }
}

