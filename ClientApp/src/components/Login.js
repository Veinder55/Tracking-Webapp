import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;


    Login() {

    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <p></p>

                <p aria-live="polite">Current count: <strong>{ }</strong></p>

                <button className="btn btn-primary" onClick={this.Login}>Login</button>
            </div>
        );
    }
}
