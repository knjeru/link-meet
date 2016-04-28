import React from 'react';
import { Component } from 'react';
import NavBar from './navbar/Nav';


export default class App extends Component {
    render() {
        return (
            <div className="parent">

                <NavBar />
                {this.props.children}
            </div>
        );
    }
}