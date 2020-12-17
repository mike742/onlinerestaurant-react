import React, { Component } from 'react';

import { Form, Button } from 'semantic-ui-react';
import validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../../messages/InlineError';

class Auth extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors }); 

        if(Object.keys(errors).length === 0) {
            debugger;
            this.props.submit(this.state.data)
            .catch(err => this.setState({errors: err.data}));
        }
    }

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    validate = data => {

        const errors = {};
        //debugger;
        if(!data.password) errors.password = "can't be empty";
        if(!validator.isEmail(data.email)) errors.email = "invalid email";
        
        return errors;
    }

    render() {

        const {data, errors} = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field error={!!errors.email} >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                            value={data.email} 
                            onChange={this.onChange} />
                            {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>
                    <Form.Field error={!!errors.password} >
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            value={data.password} 
                            onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
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