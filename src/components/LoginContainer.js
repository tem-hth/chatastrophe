import React, {Component} from 'react';

class LoginContainer extends Component {
    state = {text: 'Hello from state!'}
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
               <form onSubmit={this.handleSubmit}>
                   <p>Sign in or sign up by entering your email and password</p>
                   <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="Your email" />
                   <input onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Your password" />
                   <button className="red light" type="submit">Login</button>
               </form>
            </div>
            )
    }
}

export default LoginContainer;