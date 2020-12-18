import React, { Component } from 'react';

import Auth from '../../components/Auth/Auth'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { login } from '../../store/action/auth';

class Login extends Component {
    
    submit = data => 
        this.props.login(data)
        .then(() => this.props.history.push('/menuitems'))
        .catch(err => {
            console.log("err", err)
        });

    render() {
        return (
            <div> 
                <h1 >Login</h1>
                <Auth submit={this.submit} />
            </div>
        );
    }
}

Login.propsTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);