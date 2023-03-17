import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Facebook,
  Whatsapp,
  Twitter,
  Instagram,
  Tiktok,
  Youtube
} from "react-bootstrap-icons"
import "/src/assets/styles/Footer.css";

function Footer() {
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container id="footer" className="flex-column" fluid>
	  <Row xs={1} md={2} lg={4}>
	    <Col>
	      <Nav className="flex-column">
	        <Nav.Link>Company</Nav.Link>
	        <Nav.Link>About Us</Nav.Link>
	        <Nav.Link>Our Services</Nav.Link>
	        <Nav.Link>Privacy Policy</Nav.Link>
	        <Nav.Link>Affiliate Program</Nav.Link>
	      </Nav>
	    </Col>
	    <Col>
	      <Nav className="flex-column">
	        <Nav.Link>Get Help</Nav.Link>
	        <Nav.Link>FAQ</Nav.Link>
	        <Nav.Link>Shipping</Nav.Link>
	        <Nav.Link>Returns</Nav.Link>
	        <Nav.Link>Order Status</Nav.Link>
	        <Nav.Link>Payment Options</Nav.Link>
	      </Nav>
	    </Col>
	    <Col>
	      <Nav className="flex-column">
	        <Nav.Link>Online Shop</Nav.Link>
	        <Nav.Link>Watch</Nav.Link>
	        <Nav.Link>Bag</Nav.Link>
	        <Nav.Link>Shoes</Nav.Link>
	        <Nav.Link>Dress</Nav.Link>
	      </Nav>
	    </Col>
	    <Col>
	      <Nav className="flex-column">
	        <Nav.Link>Follow Us</Nav.Link>
	        <div>
	          {
                    [Facebook, Whatsapp, Twitter, Instagram, Tiktok, Youtube].map((Icon, index) => {
                      return ( 
	                <Nav.Link key={index}><Icon size={28}/></Nav.Link>
		      );
		    })
		  }
	        </div>
	      </Nav>
	    </Col>
	  </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
