import { Container, Row, Col, Form } from "react-bootstrap";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">

          <Col lg={3} md={6}>
            <div className="footer-logo">
              <h3>BEKO</h3>
              <p>
                Heaven fruitful doesn't over lesser days appear creeping
                seasons so behold bearing days open
              </p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <h4>Contact Info</h4>
            <p>Address : Your address goes here, your demo address. Bangladesh.</p>
            <p>Phone : +8880 44338899</p>
            <p>Email : info@colorlib.com</p>
          </Col>

          <Col lg={3} md={6}>
            <h4>Important Link</h4>
            <ul className="footer-links">
              <li>WHMCS-bridge</li>
              <li>Search Domain</li>
              <li>My Account</li>
              <li>Shopping Cart</li>
              <li>Our Shop</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4>Newsletter</h4>
            <p>
              Heaven fruitful doesn't over lesser in days. Appear creeping
              seasons deve behold bearing days open
            </p>

            <div className="newsletter">
              <Form.Control type="email" placeholder="Email Address" />
              <button className="send-btn">➤</button>
            </div>
          </Col>

        </Row>

        <div className="footer-bottom">
          <p>
            Copyright ©2026 All rights reserved | This template is made with ♥
            by <span>Colorlib</span>
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;