/**
 * Created by andrew on 3/5/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

    navigate() {
        console.log(this.props);

        //this.props.history.pushState(null, '/');
    }

    render() {
        const style = {
            margin: '18px',
        };
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ReactJS tricks</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="article" activeClassName="active">Article</Link>
                        </li>
                        <li><Link to="third" activeClassName="active">Third page</Link>
                        </li>
                        <li><Link to="image" activeClassName="active">Image</Link>
                        </li>
                        <li>
                            <button className="btn btn-success" style={style} onClick={this.navigate.bind(this)}>
                                Navigate
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

