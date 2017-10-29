import React, { Component } from 'react';

import {Form, FormGroup, Row, Col} from 'react-bootstrap';

class LogIn extends Component {
    render() {
        return (
            <Form
                autoComplete="off"
                onSubmit={ this.props.sendLogInForm }
            >
                <Row>
                    <Col xs={12}>
                        <button className="button-modal button-modal__social button-modal__social--twitter">
                            <icon className="icon icon-twitter"></icon>
                            <span>Twitter</span>
                        </button>

                        <button className="button-modal button-modal__social button-modal__social--facebook">
                            <icon className="icon icon-facebook"></icon>
                            <span>Facebook</span>
                        </button>

                        <button className="button-modal button-modal__social button-modal__social--google">
                            <icon className="icon icon-google-plus"></icon>
                            <span>Google+</span>
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <div className="divider">
                            <span>or</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <FormGroup className="is-required">
                            <icon className="icon icon-mail"></icon>

                            <input
                                onChange={ this.props.handleEmail }
                                className="input input__modal"
                                type="email"
                                placeholder="Email address"
                            />

                          {this.props.loginEmailValid === false && <div className="input__message">Email is invalid.</div>}
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-key"></icon>

                            <input
                                onChange={ this.props.handlePassword }
                                className="input input__modal"
                                type={ this.props.typeInput }
                                placeholder="Password"
                            />
                          {this.props.loginPasswordValid === false && <div className="input__message">Password is invalid.</div>}
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col xs={6}>
                                    <label className="checkbox-modal">
                                        <input type="checkbox" name="checkbox-modal"/>
                                        <span>Remember me</span>
                                    </label>
                                </Col>

                                <Col xs={6} className="text-right">
                                    <button
                                        type="button"
                                        onClick={() => this.props.changeTypeInput()}
                                        className="button-modal button-modal__show-password"
                                    >
                                        { this.props.typeInput === 'password' ? 'Show' : 'Hide' } password
                                    </button>
                                </Col>
                            </Row>
                        </FormGroup>

                        <button
                            className="button-modal button-modal__submit"
                            // disabled={ !this.props.fieldValid() }
                        >
                            Log in
                        </button>

                        <button
                            type="button"
                            onClick={() => this.props.flipState('forgotPassword')}
                            className="button-modal button-modal__forgot-password">
                            Forward password
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
                        <span>Don’t have an account?</span>
                        <button
                            type="button"
                            className="button-modal button-modal__signup"
                            onClick={() => this.props.flipState('signUpVariant')}>
                            Sign up
                        </button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default LogIn;