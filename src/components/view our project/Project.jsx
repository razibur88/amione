import "./project.css"
import {Container,Row,Col} from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../../assets/card.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"

const Project = () => {
  return (
    <>
    <div className="project_main">
        <Container>
            <Row>
                <Col lg={5}>
                    <div class="prj_head_left">
                        <h2>View our projects</h2>
                    </div>
                </Col>
                <Col lg={{span:2, offset:5}}>
                    <div class="prj_head_right">
                        <a href="#"> View More <FaArrowRightLong /></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                <div class="prj_left">
                    <img src={card1} alt="" />
                    <div class="gradient"></div>
                    <div class="inner_content">
                        <h3>Workhub office Webflow Webflow Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="#">View project <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                </Col>

                <Col lg={4}>
                    <Row>
                            <Col lg={12}>
                        <div class="umm">
                                    <div class="prj_right">
                                        <img src={card2} alt="" />
                                        <div class="gradientt"></div>
                                        <div class="inner_contentt">
                                            <h3>Unisaas Website Design</h3>
                                            <a href="#">View protfolio <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                        <Col clg={12}>
                        <div class="prj_right">
                                    <img src={card3} alt="" />
                                    <div class="gradientt"></div>
                                    <div class="inner_contentt">
                                        <h3>Unisaas Website Design</h3>
                                        <a href="#">View protfolio <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Project