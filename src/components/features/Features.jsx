import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import "./feature.css";
import {featuresData} from '../../mockdata/featuresData'
export const Features = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h5 className="feature__subtitle mb-4">What we serve</h5>
                        <h2 className="feature__title">Just sit back at home</h2>
                        <h2 className="feature__title">we will <span>take care</span></h2>
                        <p className="mb-1 mt-4 feature__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                            officiis?
                        </p>
                        <p className="feature__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam, eius.{" "}
                        </p>
                    </Col>

                    {featuresData.map((item, indx) => (
                        <Col lg="4" md="6" sm="6" key={indx} className="mt-5">
                            <div className="feature__item text-center px-5 py-3">
                                <img
                                    src={item.imgUrl}
                                    alt="feature-img"
                                    className="mb-3 w-25"
                                />
                                <h5 className=" fw-bold mb-3">{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}
