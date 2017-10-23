import React, {Component} from 'react';

import {Modal, Form, FormGroup, Row, Col} from 'react-bootstrap';

import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import SignUpVariant from './SignUpVariant/SignUpVariant';
import ForgotPassword from './ForgotPassword/ForgotPassword';

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

                            <SignUpVariant flipState = { this.flipState }/>
                        }

                        {
                            this.state.stateName === 'signUp' &&

                            <SignUp
                                sendSignUpForm = { this.sendSignUpForm }
                                handleEmail={ this.handleEmailChange }
                                handleUserName={ this.handleUserNameChange }
                                handleFirstName={ this.handleFirstNameChange }
                                handleLastName={ this.handleLastNameChange }
                                handlePasswordRepeat={ this.handlePasswordRepeatChange }
                                handlePassword={ this.handlePasswordChange }
                                flipState = { this.flipState }
                            />
                        }

                        {
                            this.state.stateName === 'forgotPassword' &&

                            <ForgotPassword flipState = { this.flipState }
                            />
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