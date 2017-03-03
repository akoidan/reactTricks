/**
 * Created by andrew on 3/3/17.
 */
import React, {Component} from 'react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.i = 0;
        this.state = {
            name: 0
        };
    }

    getName () {
        return 'Andrew'
    }

    render() {

        return (
            <div className="App">
                <h2>This is {this.state.name}</h2>
            </div>
        );
    }
}