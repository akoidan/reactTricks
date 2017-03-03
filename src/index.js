import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import SecondPage from './pages/SecondPage';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import ThirdPage from "./pages/ThirdPage";
import FirstPage from "./pages/FirstPage";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
            <IndexRoute component={FirstPage}/>
            <Route path="/second" component={SecondPage}/>
            <Route path="/third" component={ThirdPage}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
