import React from 'react';
import { Row,Container,Col} from 'reactstrap'
import { categoryData } from '../../mockdata/categoryData';
import './category.css'

export const Category = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row>
                    {categoryData.map((item, index) => (
                        <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={item.imgUrl} alt="category__item" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};