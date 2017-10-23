import React, { Component } from 'react';

import {Form, FormGroup, Row, Col} from 'react-bootstrap';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="forgot-password-modal">
                <div className="header-modal">
                    <Row>
                        <Col xs={6}>
                            <span>Reset Password</span>
                        </Col>

                        <Col xs={6} className="text-right">
                            <button
                                type="button"
                                className="button-modal button-modal__back-to"
                                onClick={() => this.props.flipState('logIn')}>
                                Back to Login
                            </button>
                        </Col>
                    </Row>

                    <div className="divider"></div>
                </div>

                <div className="description-modal">
                    Enter the email address associated with your account,
                    and we’ll email you a link to reset your password.
                </div>

                <Form
                    autoComplete="off"
                    onSubmit={ this.props.sendLogInForm }
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
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="text-center">
                            <button
                                type="submit"
                                className="button-modal button-modal__submit">
                                Send reset link
                            </button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default ForgotPassword;