import React, { Component } from 'react';
import MainPage from './containers/MainPage'
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component{
    render(){
        return (<div className="App">
        <MainPage/>
        </div>
        );
    }
}
export default App;
