import React, { Component } from 'react';

import { Form, FormGroup, Row, Col } from 'react-bootstrap';

class SignUp extends Component {
    constructor() {
        super();

        sendSignUpForm = (event) => {
            let userSignUp = {
                email: this.state.email,
                userName: this.state.userName,
                password: this.state.password,
                passwordRepeat: this.state.passwordRepeat,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            };

            fetch('http://localhost:8080/user/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(userSignUp)
                })
                .then(res => res.json())
                .then(res => console.log(res));

            event.preventDefault();
        };
    }

    render() {
        return (
            <Form
                autoComplete="off"
                onSubmit={ this.sendSignUpForm }
            >
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <icon className="icon icon-mail"></icon>

                            <input
                                onChange={ this.props.handleEmail }
                                className="input input__modal"
                                type="email"
                                placeholder="Email address"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-user"></icon>

                            <input
                                onChange={ this.props.handleFirstName }
                                className="input input__modal"
                                type="text"
                                placeholder="First name"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-user"></icon>

                            <input
                                onChange={ this.props.handleLastName }
                                className="input input__modal"
                                type="text"
                                placeholder="Last name"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-user"></icon>

                            <input
                                onChange={ this.props.handleUserName }
                                className="input input__modal"
                                type="text"
                                placeholder="Login"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-key"></icon>

                            <input
                                onChange={ this.props.handlePassword }
                                className="input input__modal"
                                type="password"
                                placeholder="Create a Password"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-key"></icon>

                            <input
                                onChange={ this.props.handlePasswordRepeat }
                                className="input input__modal"
                                type="password"
                                placeholder="Repeat a Password"
                            />
                        </FormGroup>

                        <button
                            className="button-modal button-modal__submit"
                            type="submit">
                            Sign up
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div className="divider"></div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <span>Already have an here account?</span>

                        <button
                            type="button"
                            className="button-modal button-modal__signup"
                            onClick={() => this.props.flipState('logIn')}>
                            Log in
                        </button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default SignUp;