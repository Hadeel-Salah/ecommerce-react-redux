import React from "react";
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5 className="mt-1">Fast Food</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Palestine, Gaza City</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 975866858</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: GazaPGaza@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="footer__newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>

        </Row>
        <Row className="mt-2">
          <div className='mb-5 d-flex justify-content-center align-items-center'>
            <Col lg="8">
              <div className="social__links d-flex align-items-center gap-4 justify-content">
                <p className="m-0">Follow: </p>
                <span>
                  {" "}
                  <Link to="https://www.facebook.com/muhib160">
                    <i class="ri-facebook-line"></i>
                  </Link>{" "}
                </span>

                <span>
                  <Link to="https://github.com/muhib160">
                    <i class="ri-github-line"></i>
                  </Link>
                </span>

                <span>
                  {" "}
                  <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                    <i class="ri-youtube-line"></i>
                  </Link>{" "}
                </span>

                <span>
                  <Link to=" https://www.linkedin.com/in/muhib160/">
                    <i class="ri-linkedin-line"></i>
                  </Link>
                </span>
              </div>
            </Col>
            <Col lg="4" md="4">
              <p className=" footer__rights text-right">
                Copyright © all rights reserved
              </p>
            </Col>
          </div>

        </Row>
      </Container>
    </footer>
  )
}
