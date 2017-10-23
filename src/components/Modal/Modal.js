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

    validateField = (value) => {
        return value !== '' && value !== undefined;
    };

    validateFieldEmail = (email) => {
        let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regex.test(email);
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

                            <ForgotPassword flipState = { this.flipState }/>
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