import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/pricing.css";
import bg from "../assets/images/silver-bg.png"


const Pricing = () => {
  const plans = [
    { price: "$50.00" },
    { price: "$60.00" },
    { price: "$80.00" },
  ];

  return (
    <div className="pricing-section">
      <Container>

        <h1 className="text-center text-white mb-5">Pricing Plans</h1>

        <Row>
          {plans.map((plan, index) => (
            <Col md={4} key={index}>

              <Card className="pricing-card text-center">

                <div
                  className="pricing-header"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <h5>Silver Package</h5>
                  <h2>{plan.price}</h2>
                </div>

                <Card.Body>

                  <p>2GB Bandwidth</p>
                  <hr />
                  <p>Two Account</p>
                  <hr />
                  <p>15GB Storage</p>

                  <Button className="gradient-btn">
                    Choose Plan
                  </Button>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default Pricing;