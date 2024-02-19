import "./footer.css"
import logo from "../../assets/Logo.png"
import { FaFacebook,FaTwitter,FaInstagram ,FaLinkedinIn } from "react-icons/fa";
import {Container,Row,Col} from "react-bootstrap"

const Footer = () => {
  return (
    <div className="footer_main">
    <div className="container" >
        <Row>
            <Col lg={5}>
                <div className="footer_left">
                    <img src={logo} alt="" />
                    <p>We are always open to discuss your project and improve your online presence.</p>
                </div>
                <div className="ftr_left_btm">
                    <Row>
                        <Col lg={6}>
                            <h4>Email me at</h4>
                             <a href="#">contact@website.com</a>
                        </Col>
                        <Col lg={6}>
                            <h4>Call us</h4>
                            <a href="#">0927 6277 28525</a>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={{span:5,offset:1}}>
                <div className="ftr_right">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="icons">
                         <FaFacebook className="i" />
                         <FaTwitter className="i" />
                         <FaInstagram className="i" />
                         <FaLinkedinIn className="i" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    <div className="footer_bottom">
            <Container>
            <Row>
                <Col lg={3}>
                    <div className="left">
                        <h6>Copyright 2022, Finsweet.com</h6>
                    </div>
                </Col>
                <Col lg={{span:5 ,offset:4}}>
                   <div className="right">
                   <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">FAQ</a>
                    <a href="#">Blog</a>
                   </div>
                </Col>
            </Row>
            </Container>
        </div>
</div>
  )
}

export default Footer