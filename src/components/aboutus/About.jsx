
import { Col, Container, Row } from "react-bootstrap"
import "./about.css"
import img1 from "../../assets/aboutusimg1.png"

const About = () => {
  return (
    <>
    <div className="about_main">
      <Container>
        <Row>
          <Col lg={5}>
          <div class="about_left">
              <h6>About us</h6>
              <h2>Our designs solve problems</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </Col>
          <Col lg={{span:5,offset:2}}>
            <img src={img1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  )
}

export default About