import "./Bannerreuseable.css"
import bnrimg from "../../assets/banner.png"
import { Container,Row,Col } from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";

const Bannerreuseable = ({title,para}) => {
  return (
    <>
    <div className="banner_main">
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="bnr_left">
                        <h1>{title}</h1>
                        <p>{para}</p>
                        <div className="bnr_btn">
                            <a href="#">View our work</a>
                            <a href="#">View Pricing <FaArrowRightLong /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <div className="bnr_right w-100">
                        <img src={bnrimg} className="w-100" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Bannerreuseable