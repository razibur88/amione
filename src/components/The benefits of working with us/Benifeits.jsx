import "./benifetis.css"
import icon from "../../assets/Iconbenifit.png"
import { Col, Container, Row } from "react-bootstrap"
import logosection from "../../assets/logosection.png"

const Benifeits = () => {
  return (
    <>
    <div className="benifetis_main">
        <Container>
            <Row>
                <Col lg={12} >
                <div class="ben_upper text-center">
                    <h2>The benefits of working with us</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div class="content_box">
                    <div class="content_inner">
                        <img src={icon} alt=""/>
                        <h3>Customize with ease</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="content_inner">
                        <img src={icon} alt=""/>
                        <h3>Customize with ease</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="content_inner">
                        <img src={icon} alt=""/>
                        <h3>Customize with ease</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <img src={logosection} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Benifeits