import React, { Component } from 'react';

import { Form, Button, Message } from "semantic-ui-react";
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../../messages/InlineError';

class Auth extends Component {

    state = {
        data: {
            email: "",
            password: ""
        },
        errors: {}
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if (Object.keys(errors).length === 0) {

            this.props.submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: 'err.response.data.error' })
                );
        }
    };

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    validate = data => {
        const errors = {};
        //if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.username) errors.username = "Can't be blank";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {

        const { data, errors } = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    {errors.title && (
                        <Message negative>
                            <Message.Header>Something went wrong</Message.Header>
                            <p>{errors.title}</p>
                        </Message>
                    )}
                    <Form.Field error={!!errors.email} >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={this.onChange}
                        />
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