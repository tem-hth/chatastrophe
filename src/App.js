import React, {Component} from 'react';
import './app.css'


class App extends Component {
    greeting = 'Hello from React!!';
    render(){
        return <h1>{this.greeting}</h1>;
    }
}


export default App;