import React, { Component } from 'react';

import { Form, Button } from 'semantic-ui-react';
import validator from 'validator';
import PropTypes from 'prop-types';


class Auth extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    onSubmit = () => {
        console.log('Submit');
    }
    onChange = () => {}

    render() {

        const {data, errors} = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                            value={data.email} 
                            onChange={this.onChange} />
                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            value={data.password} 
                            onChange={this.onChange} />
                    </Form.Field>
                    <Button primary>Login</Button>
                </Form>
            </div>
        );
    }
}

Auth.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Auth;