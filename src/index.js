import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import ArticlePage from './pages/ArticlePage';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import ThirdPage from "./pages/ThirdPage";
import FirstPage from "./pages/FirstPage";
import Flux from "./pages/Flux";
import AppImage from "./AppImage";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
            <IndexRoute component={FirstPage}/>
            <Route path="article" component={ArticlePage}/>
            <Route path="third" component={ThirdPage}/>
            <Route path="image" component={AppImage}/>
            <Route path="flux" component={Flux}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
