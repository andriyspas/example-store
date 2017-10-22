import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class SignUpVariant extends Component {
    render() {
        return (
            <div>
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
                        <button
                            type="button"
                            className="button-modal button-modal__login"
                            onClick={ () => this.props.flipState('signUp')}>
                            <icon className="icon icon-mail-white"></icon>

                            <span>Sign up with Email</span>
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
                            className="button-modal button-modal__signup"
                            onClick={() => this.props.flipState('logIn')}>
                            Log in
                        </button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SignUpVariant;