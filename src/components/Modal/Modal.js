import React, {Component} from 'react'

import {Modal, Form, FormGroup, input, Checkbox, Row, Col} from 'react-bootstrap'

class ModalStructure extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            stateName: 'logIn',
            username: '',
            email: '',
            password: '',
            passwordRepeat: '',
            firstName: '',
            lastName: '',
            type: 'password'
        }
    };

    close = () => {
        this.setState({show: false})
    };

    open = () => {
        this.setState({show: true});
        this.flipState('logIn');
    };

    flipState(state) {
        this.setState({stateName: state});
    };

    changeTypeInput() {
        this.setState({type: this.state.type === 'password' ? 'input' : 'password'});
    }

    render() {
        return (
            <div>
                <Modal
                    show={ this.state.show }
                    onHide={ this.close }
                >

                    <Modal.Body>
                        <Row>
                            <Col xs={12}>
                                <button
                                    className="button-modal button-modal__close"
                                    onClick={ this.close }>
                                    <i className="icon icon-close"></i>
                                </button>
                            </Col>
                        </Row>

                        {
                            this.state.stateName === 'logIn' &&

                            <Form>
                                <Row>
                                    <Col xs={12}>
                                        <button
                                            className="button-modal button-modal__social button-modal__social--twitter">
                                            <icon className="icon icon-twitter"></icon>
                                            <span>Twitter</span>
                                        </button>

                                        <button
                                            className="button-modal button-modal__social button-modal__social--facebook">
                                            <icon className="icon icon-facebook"></icon>
                                            <span>Facebook</span>
                                        </button>

                                        <button
                                            className="button-modal button-modal__social button-modal__social--google">
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
                                        <FormGroup>
                                            <icon className="icon icon-mail"></icon>

                                            <input
                                                onChange={ (event) => this.setState({email: event.target.value}) }
                                                className="input input__modal"
                                                type="email"
                                                placeholder="Email address"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-key"></icon>

                                            <input
                                                onChange={ (event) => this.setState({password: event.target.value}) }
                                                className="input input__modal"
                                                type={ this.state.type }
                                                placeholder="Password"
                                            />
                                        </FormGroup>


                                        <FormGroup>
                                            <Checkbox>
                                                Remember me
                                            </Checkbox>

                                            <div
                                                onClick={ () => this.changeTypeInput() }
                                                className="button-modal button-modal__forgot-password"
                                            >
                                                { this.state.type === 'password' ? 'Show' : 'Hide' } password
                                            </div>
                                        </FormGroup>

                                        <button className="button-modal button-modal__login">Log in</button>

                                        <button
                                            onClick={ () => this.flipState('forgotPassword') }
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
                                            className="button-modal button-modal__signup"
                                            onClick={() => this.flipState('signUpVariant')}>
                                            Sign up
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        }

                        {
                            this.state.stateName === 'signUpVariant' &&

                            <Form>
                                <Row>
                                    <Col xs={12}>
                                        <button
                                            className="button-modal button-modal__social button-modal__social--twitter">
                                            <icon className="icon icon-twitter"></icon>
                                            <span>Twitter</span>
                                        </button>

                                        <button
                                            className="button-modal button-modal__social button-modal__social--facebook">
                                            <icon className="icon icon-facebook"></icon>
                                            <span>Facebook</span>
                                        </button>

                                        <button
                                            className="button-modal button-modal__social button-modal__social--google">
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
                                            className="button-modal button-modal__login"
                                            onClick={() => this.flipState('signUp')}>
                                            Sign up with Email
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
                                            onClick={() => this.flipState('logIn')}>
                                            Log in
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        }

                        {
                            this.state.stateName === 'signUp' &&

                            <Form>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <icon className="icon icon-mail"></icon>

                                            <input
                                                onChange={ (event) => this.setState({email: event.target.value}) }
                                                className="input input__modal"
                                                type="email"
                                                placeholder="Email address"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-user"></icon>

                                            <input
                                                onChange={ (event) => this.setState({firstName: event.target.value}) }
                                                className="input input__modal"
                                                type="text"
                                                placeholder="First name"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-user"></icon>

                                            <input
                                                onChange={ (event) => this.setState({lastName: event.target.value}) }
                                                className="input input__modal"
                                                type="text"
                                                placeholder="Last name"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-user"></icon>

                                            <input
                                                onChange={ (event) => this.setState({username: event.target.value}) }
                                                className="input input__modal"
                                                type="text"
                                                placeholder="Login"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-key"></icon>

                                            <input
                                                onChange={ (event) => this.setState({password: event.target.value}) }
                                                className="input input__modal"
                                                type="password"
                                                placeholder="Create a Password"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <icon className="icon icon-key"></icon>

                                            <input
                                                onChange={ (event) => this.setState({passwordRepeat: event.target.value}) }
                                                className="input input__modal"
                                                type="password"
                                                placeholder="Repeat a Password"
                                            />
                                        </FormGroup>

                                        <button className="button-modal button-modal__login">Register Send</button>
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
                                            onClick={() => this.flipState('logIn')}>
                                            Log in
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        }

                        {
                            this.state.stateName === 'forgotPassword' &&

                            <div>

                            </div>

                        }

                    </Modal.Body>
                </Modal>

                <button
                    className="button"
                    onClick={ this.open }
                >
                    Open
                </button>
            </div>
        )
    }
}

export default ModalStructure