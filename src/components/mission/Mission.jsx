import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/aboutusimg1.png"
import "./mission.css"
const Mission = () => {
  return (
    <>
    <div className="mission_main">
        <Container>
            <Row>
                <Col lg={6}>
                <div class="mis_up_left">
                    <h6>Our Mission </h6>
                    <h4>Inspire, Innovate, Share</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
                <Col lg={{span:5,offset:1}}>
                    <img src={img1} alt="" />
                </Col>
            </Row>
            <Row>
                <Col lg={5} >
                <img src={img1} alt="" />
                </Col>
                <Col lg={{span:6,offset:1}} >
                    <div class="mis_up_left">
                    <h6>Our Mission </h6>
                    <h4>Inspire, Innovate, Share</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Mission