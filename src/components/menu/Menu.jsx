import "./menu.css"
import logo from "../../assets/Logo.png"
import {Navbar,Container,Nav} from "react-bootstrap"
import { MdMenuOpen } from "react-icons/md";
import {Link} from "react-router-dom"


const Menu = () => {
  return (
    <>
    <div className="nav_main">
     <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link>Pricing</Link>
          <Link>Pricing</Link>
          <Link>Pricing</Link>
          <Link>Pricing</Link>
        </Nav>
        <div className="cont_btn">
          <Link>Contact us</Link>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </div>
    </>
  )
}

export default Menu