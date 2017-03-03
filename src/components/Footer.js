/**
 * Created by andrew on 3/3/17.
 */
import React, {Component} from 'react';

export default class Footer extends Component {
    constructor() {
        super();

    }
    render() {
        return (<footer>{this.props.title}</footer>);
    }
}