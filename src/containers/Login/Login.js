import React, { Component } from 'react';

import Auth from '../../components/Auth/Auth'



class Login extends Component {
    submit = data => {}

    render() {
        return (
            <div> 
                <h1 submit={this.submit}>Login</h1>
                <Auth />
            </div>
        );
    }
}

export default Login;