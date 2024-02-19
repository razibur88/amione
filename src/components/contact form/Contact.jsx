import React from 'react'
import "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="contact_main">
        <Container>
            <Row>
                <Col lg={6}>
                <div class="startup_left">
                  <div class="str_text">
                    <h3>Building stellar websites for early startups</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                <div class="startup_right">
                    <div class="signup">
                        <h5>Send inquiry</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        
                        <form>
                            <div class="mb-3">
                              <input type="text" class="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
                              
                            </div>
                            <div class="mb-3">
                                <input type="email" class="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Paste your Figma design URL"/>
                            </div>
                          </form>
                          <button type="submit" class="btnn">Send an Inquiry</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact