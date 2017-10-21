import React, { Component } from 'react';

import { Modal, Form, FormGroup, FormControl, Checkbox, Row, Col } from 'react-bootstrap';

class ModalStructure extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    };

    close = () => {
        this.setState({show: false});
    };

    open = () => {
        this.setState({show: true});
    };

    render() {
        return (
            <div>
                <Modal
                    show={ this.state.show }
                    onHide={ this.close }
                >

                    <Modal.Body>

                        <button onClick={ this.close }> X </button>

                        <Form>
                            <Row>
                                <Col xs={12}>
                                    <button className="button-modal button-modal__social button-modal__social--facebook">Facebook</button>
                                    <button className="button-modal button-modal__social button-modal__social--google">Google</button>
                                    <button className="button-modal button-modal__social button-modal__social--twitter">Twitter</button>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="divider">
                                        <span>or</span>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <FormControl
                                            className="input input__modal"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormControl
                                            className="input input__modal"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Checkbox>
                                            Remember me
                                        </Checkbox>
                                    </FormGroup>

                                    <button className="button-modal button-modal__login">Log in</button>

                                    <button className="button-modal button-modal__forgot-password">Forward password</button>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="divider"></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <span>Don’t have an account?</span>
                                    <button className="button-modal button-modal__signup">Sign up</button>
                                </Col>
                            </Row>
                        </Form>
                        
                    </Modal.Body>
                </Modal>

                <button
                    className="button"
                    onClick={ this.open }
                >
                    Open
                </button>
            </div>
        );
    }
}

export default ModalStructure;