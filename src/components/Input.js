/**
 * Created by andrew on 3/3/17.
 */
import React, {Component} from 'react';

export default class Input extends Component {
    constructor() {
        super();
    }

    handleChange(e) {
        const title = e.target.value;
        this.props.changeName(title);
    }

    render() {
        return (<input value={this.props.title} onChange={this.handleChange.bind(this)}/>);
    }
}