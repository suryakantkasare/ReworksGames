import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for extra styling

const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https://www.hrgameworld.com/product/aktrains-icf-coach-sound-enhancement-v1/',
    icon: <FaFacebook />,
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/share?url=https://www.hrgameworld.com/product/aktrains-icf-coach-sound-enhancement-v1/',
    icon: <FaTwitter />,
  },
  {
    platform: 'Pinterest',
    url: 'https://pinterest.com/pin/create/button/?url=https://www.hrgameworld.com/product/aktrains-icf-coach-sound-enhancement-v1/&media=https://www.hrgameworld.com/wp-content/uploads/2024/09/AKTRAINS-ICF-Coach-Sound-Enhancement-V1.png&description=AKTrains+ICF+Coach+Sound+Enhancement+V1',
    icon: <FaPinterest />,
  },
  {
    platform: 'Whatsapp',
    url: 'https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.hrgameworld.com%2Fproduct%2Faktrains-icf-coach-sound-enhancement-v1%2F',
    icon: <FaWhatsapp />,
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <Container>
        {/* Social Links Section */}
        <div className="social-share d-flex justify-content-center gap-4 py-4 bg-light-gray shadow-sm rounded-0">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-dark fs-4 p-3 hover-effect rounded-circle transition-all duration-300"
              aria-label={`Share on ${link.platform}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <Row className="text-center">
          {/* Info Cards */}
          {[
            {
              img: 'https://www.hrgameworld.com/wp-content/uploads/2021/10/retail-2-shipping.svg',
              title: 'FREE SHIPPING',
              text: 'Carrier information',
            },
            {
              img: 'https://www.hrgameworld.com/wp-content/uploads/2021/10/retail-2-online-payment.svg',
              title: 'ONLINE PAYMENT',
              text: 'Payment methods',
            },
            {
              img: 'https://www.hrgameworld.com/wp-content/uploads/2021/10/retail-2-support.svg',
              title: '24/7 SUPPORT',
              text: 'Instant access to support',
            },
            {
              img: 'https://www.hrgameworld.com/wp-content/uploads/2021/10/retail-2-safe.svg',
              title: '100% SAFE',
              text: 'View our benefits',
            },
          ].map((card, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="text-center bg-dark text-white border-0">
                <Card.Body>
                  <Card.Img
                    src={card.img}
                    alt={`${card.title} Icon`}
                    className="mb-3"
                    style={{ width: '60px', height: '60px' }}
                  />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="link" className="text-white footer-button">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Horizontal Navigation Links */}
        <nav className="horizontal-links text-center mb-4">
          <ul className="list-inline">
            <li className="list-inline-item mx-3">
              <a href="#home" className="text-dark fs-5">
                Home
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#about" className="text-dark fs-5">
                About
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#contact" className="text-dark fs-5">
                Contact
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#shop" className="text-dark fs-5">
                Shop
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer Bottom Section */}
        <Row className="footer-bottom text-center mt-4">
          <Col md={12}>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
              <a href="#" className="text-muted footer-link d-flex align-items-center">
                <i className="bi bi-shield-check fs-5 me-2"></i>Privacy Policy
              </a>
              <span className="text-muted">|</span>
              <a href="#" className="text-muted footer-link d-flex align-items-center">
                <i className="bi bi-file-earmark-text fs-5 me-2"></i>Terms & Conditions
              </a>
            </div>
            <div className="mt-3">
              <p className="text-muted small">© 2024 Your Shop - All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
