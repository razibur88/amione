import { Col, Container, Row } from "react-bootstrap"
import "./priceplan.css"

const Priceplan = () => {
  return (
    <>
    <div className="pricing_main">
        <Container>
            <Row className="justify-content-center">
                <Col lg={6}>
                <div class="prc_head text-center">
                        <h2>Our Pricing Plans</h2>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={4}>
                <div class="plans_body">
                        <div class="price_body ">
                            <h2>$299 <span>Per Design</span></h2>
                        <h3>Landing Page </h3>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <div class="price_dtl">
                            <p><i class="fa-solid fa-caret-right"></i> All limited links</p>
                            <p><i class="fa-solid fa-caret-right"></i> Own analytics platform</p>
                            <p><i class="fa-solid fa-caret-right"></i> Chat support</p>
                            <div class="disable">
                                <p><i class="fa-solid fa-caret-right"></i>Optimize hashtags</p>
                                <p><i class="fa-solid fa-caret-right"></i> Unlimited users</p>
                            </div>
                            <div class="btnn">
                                <a href="#">Get started</a>
                            </div>
                        </div>
                        </div>
                    </div> 
                </Col>
                <Col lg={4}>
                <div class="plans_body2">
                        <div class="price_body2">
                            <h2>$399 <span>Multi Design</span></h2>
                        <h3>Website Page </h3>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                        <div class="price_dtl2">
                            <p><i class="fa-solid fa-caret-right"></i> All limited links</p>
                            <p><i class="fa-solid fa-caret-right"></i> Own analytics platform</p>
                            <p><i class="fa-solid fa-caret-right"></i> Chat support</p>
                            <p><i class="fa-solid fa-caret-right"></i>Optimize hashtags</p>
                            <p><i class="fa-solid fa-caret-right"></i> Unlimited users</p>
                            <div className="btnnnn">
                            <div class="btn">
                                <a href="#">Get started</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                <div class="plans_body">
                        <div class="price_body">
                            <h2>$499 + <span>Per Design</span></h2>
                        <h3>Complex Project</h3>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <div class="price_dtl">
                            <p><i class="fa-solid fa-caret-right"></i> All limited links</p>
                            <p><i class="fa-solid fa-caret-right"></i> Own analytics platform</p>
                            <p><i class="fa-solid fa-caret-right"></i> Chat support</p>
                            <p><i class="fa-solid fa-caret-right"></i>Optimize hashtags</p>
                            <p><i class="fa-solid fa-caret-right"></i> Unlimited users</p>
                            <div class="btnn">
                                <a href="#">Get started</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Priceplan