import React from 'react'
import { TestimonialSlider } from './TestimonialSlider'
import { Container, Row, Col } from 'reactstrap';
import networkImg from '../../assets/images/network.png'
import './testimonial.css'
export const Testimonial = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="testimonial ">
                            <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                            <h2 className="testimonial__title mb-4">
                                What our <span>customers</span> are saying
                            </h2>
                            <p className="testimonial__desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Distinctio quasi qui minus quos sit perspiciatis inventore
                                quis provident placeat fugiat!
                            </p>

                            <TestimonialSlider />
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <img src={networkImg} alt="testimonial-img" className="w-100 testimonial__image" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
