import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./process.css"

const Process = () => {
  return (
    <>
    <div className="process_main">
        <Container>
            <Row>
                <Col lg={12}>
                    <div class="prc_head text-center">
                        <h2>The process we follow</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                <div class="circle">
                    <div class="bdr_style"></div>
                </div>
                <div class="prc_body">
                    <h4>Planning</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
                <Col lg={3}>
                <div class="circle">
                    <div class="bdr_style"></div>
                </div>
                <div class="prc_body">
                    <h4>Conception</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
                <Col lg={3}>
                <div class="circle">
                    <div class="bdr_style"></div>
                </div>
                <div class="prc_body">
                    <h4>Design</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
                <Col lg={3}>
                <div class="circle">
                    <div class="bdr_style"></div>
                </div>
                <div class="prc_body">
                    <h4>Development</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    
    </>
  )
}

export default Process