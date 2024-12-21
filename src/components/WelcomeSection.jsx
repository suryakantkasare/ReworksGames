import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const WelcomeSection = () => {
  return (
    <Container fluid className="my-5" style={{ paddingBottom: '5%' }}>
      {/* Content Section with Text and Image */}
      <Row className="align-items-center">
        {/* Left Column - Image */}
        <Col lg={6} md={12}>
          <Image
            src="https://pngimg.com/uploads/trian/trian_PNG101347.png"
            alt="Gaming Add-Ons Banner"
            className=""
            style={{
              maxHeight: '450px',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Col>

        {/* Right Column - Text/Explanation */}
        <Col lg={6} md={12} className="text-center text-lg-left mb-5 mb-lg-0">
          <h2 className="display-3 text-primary font-weight-bold">WELCOME TO REWORKSGAMING</h2>
          <p className="lead text-muted mb-4" style={{ fontSize: '1.5rem' }}>🎮 WHERE GAMING GETS A NEW DIMENSION</p>
          <p className="h4 font-weight-bold text-dark" style={{ fontSize: '2rem' }}>🚀 Explore premium add-ons and mods for your favorite games.</p>
        </Col>
      </Row>

      {/* Latest Add-On Analysis */}
      <Row className="text-center mt-5 pt-4">
        <Col xs={12}>
          <h4 className="font-weight-bold mt-4 text-dark" style={{ fontSize: '1.75rem' }}>Latest Add-On Update</h4>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>
            Dive into our newest add-on featuring enhanced game mechanics, stunning graphics, and new levels! This expansion will surely keep you hooked for hours.
          </p>
        </Col>
      </Row>

      {/* CTA Section with Buttons */}
      <Row className="text-center mt-5 pt-4">
        <Col xs={12}>
          <h5 className="font-weight-bold text-muted" style={{ fontSize: '1.5rem' }}>Explore Our Features 🎮</h5>
          <p className="text-dark" style={{ fontSize: '1.25rem' }}>
            Unlock a world of new features and content! From exclusive mods to premium upgrades, there's something for every gamer here at ReworksGaming.
          </p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center gap-5 mt-4">
          {/* Shop Now Button */}
          <Button variant="primary" size="lg" className="px-5 py-3" href="/shop" style={{ fontSize: '1.2rem' }}>
            🛒 Shop Now
          </Button>
          {/* Client App Button */}
          <Button variant="secondary" size="lg" className="px-5 py-3" href="/client-app" style={{ fontSize: '1.2rem' }}>
            📱 Download Client App
          </Button>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="text-center mt-5 pt-4">
        <Col xs={12}>
          <h5 className="font-weight-bold text-muted" style={{ fontSize: '1.5rem' }}>Join Our Community and Explore More 🎮</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeSection;
