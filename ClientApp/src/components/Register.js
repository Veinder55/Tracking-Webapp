import React, { Component } from 'react';

export class Register extends Component {
    static displayName = Register.name;


    Registrationform(props) {
        const [state , setState] = useState({
            email : "",
            password : ""
        })
        const handleChange = (e) => {
            const {id , value} = e.target
            setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
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
