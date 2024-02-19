import React from 'react'
import "./who.css"
import img2 from "../../assets/aboutusimg2.png"
import { Col, Container, Row } from 'react-bootstrap'

const Who = () => {
  return (
    <>
    <div className="who_main">
        <Container>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col lg={4}>
                            <div class="we_top">
                                <h6>Who we are</h6>
                            </div>
                        </Col>
                    </Row>
                    <div class="we_body">
              
                        <h2>Goal focussed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div class="we_body">
                        <h2>Continuous improvement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <img src={img2} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Who