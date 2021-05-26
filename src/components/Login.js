import React, { Component } from 'react'
import { Redirect, Link } from 'react-router';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            inValid: ''
        }
    }

    idChange = (event) => {
        this.setState({
            username: event.target.value,
            invalid: ""
        })
    }

    pswChange = (event) => {
        this.setState({
            password: event.target.value,
            invalid: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === 'user' && this.state.password === 'pass') {
            window.location.href = "/Home"
        } else if (this.state.username === 'admin' && this.state.password === 'pass') {
            window.location.href = "/Admin"
        } else {
            this.setState({
                invalid: "Please enter valid Credentials",
                username: "",
                password: ""
            });
        }
    }

    render() {
        const avatar = "/assets/images/logo.jpg"
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} method="post" className="loginForm">
                        <div className="imgcontainer">
                            <img src={avatar} alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <p className="text-center text-danger">{this.state.invalid}</p>
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.idChange} name="uname" required />
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.pswChange} name="psw" required />
                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
