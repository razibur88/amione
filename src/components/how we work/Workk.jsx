import "./work.css"
import {Container,Row,Col} from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";
import pointer1 from "../../assets/pointer1.png"
import pointer2 from "../../assets/pointer2.png"
import pointer3 from "../../assets/pointer3.png"
import pointer4 from "../../assets/pointer4.png"


const Workk = () => {
  return (
    <>
    <div className="work_main">
        <Container>
            <Row>
                <Col lg={4}>
                    <div class="work_left">
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#">Get in touch with us <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={{span:6,offset:2}}>
                    <Row>
                        <Col lg={6} xs={6} sm={6} md={6}>
                        <div class="work_right">
                            <img src={pointer1} alt="" />
                            <h3>Strategy</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        </Col>
                        <Col lg={6} xs={6} sm={6} md={6}>
                        <div class="work_right">
                            <img src={pointer2} alt="" />
                            <h3>Strategy</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        </Col>
                        <Col lg={6} xs={6} sm={6} md={6}>
                        <div class="work_right">
                            <img src={pointer3} alt="" />
                            <h3>Strategy</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        </Col>
                        <Col lg={6} xs={6} sm={6} md={6}>
                        <div class="work_right">
                            <img src={pointer4} alt="" />
                            <h3>Strategy</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
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

export default Workk