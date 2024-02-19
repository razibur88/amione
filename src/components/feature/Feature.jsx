import "./feature.css"
import { Col, Container, Row } from 'react-bootstrap'
import icon from "../../assets/Icon.png"

const Feature = () => {
  return (
    <>
    <div className="feature_main">
        <Container>
            <Row>
                <Col lg={12}>
                <div className="ccen">
                <div class="feature_head">
                    <h6>Features</h6>
                    <h2>Design that solves problems, one product at a time</h2>
                </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div class="content_box">
                    <div class="main">
                        <img src={icon} alt="" />
                    <h2>Uses Client First</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Feature