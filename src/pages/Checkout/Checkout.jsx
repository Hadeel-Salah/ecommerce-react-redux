import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../../components/CommonSection/CommonSection'
import Helemet from '../../components/Helemet/Helemet';
import './checkout.css'

const Checkout = () => {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = []

    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
        };
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo)
        setEnterEmail('')
        setEnterName('')
        setEnterCountry('')
        setEnterNumber('')
        setPostalCode('')
        setEnterCity('')
    }


    const TotalAmnount = useSelector((state) => state.cart.totalAmount)
    const ShippingCost = 30
    const Total = TotalAmnount + ShippingCost
    return (
        <Helemet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6 className="mb-4">Shipping Address</h6>
                            <form className="checkout__form" onSubmit={submitHandler}>
                                <div className="form__group mb-4 ">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        value={enterName}
                                        onChange={(e) => setEnterName(e.target.value)}
                                    />
                                </div>

                                <div className="form__group mb-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={enterEmail}
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form__group mb-4">
                                    <input
                                        type="number"
                                        placeholder="Phone number"
                                        required
                                        value={enterNumber}
                                        onChange={(e) => setEnterNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form__group mb-4">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        required
                                        value={enterCountry}
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                    />
                                </div>
                                <div className="form__group mb-4">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        required
                                        value={enterCity}
                                        onChange={(e) => setEnterCity(e.target.value)}

                                    />
                                </div>
                                <div className="form__group mb-4">
                                    <input
                                        type="number"
                                        placeholder="Postal code"
                                        required
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}

                                    />
                                </div>
                                <button type="submit" className="addTOCart__btn">
                                    Payment
                                </button>
                            </form>
                        </Col>

                        <Col lg="4" md="6">
                            <div className="checkout__bill">
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Subtotal: <span>${TotalAmnount}</span>
                                </h6>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Shipping: <span>${ShippingCost}</span>
                                </h6>
                                <div className="checkout__total">
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        Total:  <span>${Total}</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section >
        </Helemet >
    )
}

export default Checkout