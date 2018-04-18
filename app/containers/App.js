import React, {Component} from 'react';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';
import './../scss/main.scss';

export default class App extends Component {
    render () {
        return (
            <div className="main-container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}