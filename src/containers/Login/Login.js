import React, { Component } from 'react';

import Auth from '../../components/Auth/Auth'



class Login extends Component {
    
    submit = data => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div> 
                <h1 >Login</h1>
                <Auth submit={this.submit} />
            </div>
        );
    }
}

export default Login;