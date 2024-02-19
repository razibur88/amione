import React from 'react'
import "./client.css"
import { Col, Container, Row } from 'react-bootstrap'
import profile from "../../assets/profile.png"

const Clienst = () => {
  return (
    <div className="clients_main">
        <Container>
            <Row>
                <Col lg={4}>
                <div class="client_left">
                    <h4>What our clients say about us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                </Col>
                <Col lg={{span:7, offset:1}}>
                <div class="client_right">
                    <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                    <img src={profile} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Clienst