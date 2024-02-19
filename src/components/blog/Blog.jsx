import { Col, Container, Row } from "react-bootstrap"
import "./blog.css"
import blogimg from "../../assets/blog.png"


const Blog = () => {
  return (
    <>
    <div className="blog_main">
        <Container>
            <Row>
                <Col lg={12}>
                <div class="blog_up">
                    <h2>Our blog</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div class="blog_main">
                    <img src={blogimg} class="w-100" alt="blog"/>
                    <h6>19 Jan 2022</h6>
                    <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </Col>
                <Col lg={4}>
                <div class="blog_main">
                    <img src={blogimg} class="w-100" alt="blog"/>
                    <h6>19 Jan 2022</h6>
                    <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </Col>
                <Col lg={4}>
                <div class="blog_main">
                    <img src={blogimg} class="w-100" alt="blog"/>
                    <h6>19 Jan 2022</h6>
                    <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Blog