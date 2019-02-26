import React, {Component} from 'react';
import './app.css';
import LoginContainer from './LoginContainer';

class App extends Component {
    greeting = 'Hello from React!!';
    render(){
        return <LoginContainer />;
    }
}


export default App;