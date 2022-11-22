import React, {useRef}from 'react'
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import CommonSection from '../../components/CommonSection/CommonSection';
import Helemet from '../../components/Helemet/Helemet';

const SignUp = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Helemet title="Signup">
            <CommonSection title="Signup" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group  mb-4">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        required
                                        ref={signupNameRef}
                                    />
                                </div>
                                <div className="form__group  mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        ref={signupEmailRef}
                                    />
                                </div>
                                <div className="form__group mb-4">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        ref={signupPasswordRef}
                                    />
                                </div>
                                <button type="submit" className="addTOCart__btn">
                                    Sign Up
                                </button>
                            </form>
                            <Link to="/login">Already have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helemet>
    );
};

export default SignUp