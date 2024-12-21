import React from 'react';
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';

const WelcomeSection = () => {
  return (
    <Container fluid className="my-5" style={{ paddingBottom: '5%' }}>
      {/* Header Section */}
      <Row className="text-center mb-4">
        <Col xs={12}>
          <h2 className="text-primary display-4 font-weight-bold">WELCOME TO HRGAMEWORLD</h2>
          <p className="lead text-muted mb-4">🚂 WHERE TRAINS TRULY COME TO LIFE</p>
          <p className="h5 font-weight-bold">🚄 Craft exceptional add-ons and immersive routes for DTG Train Simulator Classic.</p>
        </Col>
      </Row>

      {/* Content Section with Text and Image */}
      <Row className="align-items-center">
        {/* Left Column - Text/Explanation */}
        <Col lg={6} md={12} className="text-center text-lg-left">
          <Card className="p-4 shadow-lg rounded-lg bg-light mb-4">
            <Card.Body>
              <h4 className="font-weight-bold mb-3 text-dark">Why Choose HRGameWorld?</h4>
              <p className="lead text-dark">
                At HRGameWorld, we bring your passion for trains to life with immersive, high-quality add-ons for the popular DTG Train Simulator Classic. Our extensive collection of routes, trains, and scenarios promises to elevate your gaming experience to the next level.
              </p>
              <p className="text-dark">
                Whether you're a seasoned player or a new enthusiast, our easy-to-use platform makes it easy to download and enjoy these engaging add-ons. Join our community of train lovers and discover why HRGameWorld is the ultimate destination for all things train simulation!
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column - Image */}
        <Col lg={6} md={12} className="text-center mt-4 mt-lg-0">
          <Image
            src="https://www.hrgameworld.com/wp-content/uploads/2024/09/trainbanner.png"
            alt="Train Banner"
            className="img-fluid rounded-lg"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      {/* Latest Add-On Analysis */}
      <Row className="text-center mt-4">
        <Col xs={12}>
          <h4 className="font-weight-bold mt-4 text-dark">Latest Add-On Analysis</h4>
          <p className="text-muted">
            Our latest route add-on is a stunning representation of the scenic routes found in the Swiss Alps. With detailed landscapes and realistic train models, this addition is set to revolutionize your train simulation experience. Don’t miss out on this breathtaking route!
          </p>
        </Col>
      </Row>

      {/* CTA Section with Buttons */}
      <Row className="text-center mt-5 pt-4">
        <Col xs={12}>
          <h5 className="font-weight-bold text-muted">Explore Our Features 🚂</h5>
          <p className="text-dark">
            Discover more ways to enhance your train simulator experience with our exciting offerings. Get the latest add-ons, purchase custom trains, or download the client app for a smooth gaming experience.
          </p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center gap-3 mt-4">
          {/* Shop Now Button */}
          <Button variant="primary" size="lg" className="px-4 py-2" href="/shop" style={{ fontSize: '18px', paddingLeft: '30px', paddingRight: '30px' }}>
            🛒 Shop Now
          </Button>
          {/* Client App Button */}
          <Button variant="secondary" size="lg" className="px-4 py-2" href="/client-app" style={{ fontSize: '18px', paddingLeft: '30px', paddingRight: '30px' }}>
            📱 Download Client App
          </Button>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="text-center mt-5 pt-4" style={{ marginTop: '10%' }}>
        <Col xs={12}>
          <h5 className="font-weight-bold text-muted">Join Our Community and Explore More 🚂</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeSection;
