import React, { Component } from 'react';

import Auth from '../../components/Auth/Auth'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Auth />
            </div>
        );
    }
}

export default Login;