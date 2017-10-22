import React, {Component} from 'react';

import {Modal, Form, FormGroup, Row, Col} from 'react-bootstrap';

import LogIn from './LogIn/LogIn';

class ModalStructure extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            stateName: 'logIn',
            userName: '',
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

    flipState = (state) => {
       this.setState({stateName: state});
    };

    changeTypeInput = () => {
        this.setState({type: this.state.type === 'password' ? 'input' : 'password'});
    };

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value})
    };

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    handlePasswordRepeatChange = (event) => {
        this.setState({passwordRepeat: event.target.value})
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value})
    };

    sendLogInForm = (event) => {
        let userLogIn = {
            email: this.state.email,
            password: this.state.password
        };

        fetch('http://localhost:8080/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(userLogIn)
            })
            .then(res => res.json())
            .then(res => console.log(res));

        event.preventDefault();
    };


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

                            <LogIn
                                sendLogInForm = { this.sendLogInForm }
                                handleEmail={ this.handleEmailChange }
                                handlePassword={ this.handlePasswordChange }
                                typeInput = { this.state.type }
                                changeTypeInput = { this.changeTypeInput }
                                flipState = { this.flipState }
                            />
                        }

                        {
                            this.state.stateName === 'signUpVariant' &&

                            <Form>
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

                            <Form
                                autoComplete="off"
                                onSubmit={ this.sendSignUpForm }
                            >
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
                                                onChange={ (event) => this.setState({userName: event.target.value}) }
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

                                        <button className="button-modal button-modal__login" type="submit">Register Send</button>
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