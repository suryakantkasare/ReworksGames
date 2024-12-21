import React, { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar, Card, Navbar, Nav, Table, Image } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // For adding arrows
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // For custom styles

const ProductDetails = ({ productInfo }) => {
  const [progress, setProgress] = useState(0);

  const handleAction = (action) => {
    if (action === 'install') {
      simulateProgress(100); // Simulate installing
    } else if (action === 'uninstall') {
      simulateProgress(0); // Simulate uninstalling
    } else if (action === 'reinstall') {
      simulateProgress(50); // Simulate reinstalling
    }
  };

  const simulateProgress = (targetProgress) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= targetProgress) {
        clearInterval(interval);
      } else {
        currentProgress += 10;
        setProgress(currentProgress);
      }
    }, 300);
  };

  return (
    <Container fluid className="mt-5">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="mb-4 shadow">
        <Navbar.Brand href="#">Desi App</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>
      </Navbar>

      {/* Product Header Section */}
      <Row className="mb-5">
        <Col md={4} className="d-flex justify-content-center">
          <Card className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="Product Thumbnail"
              className="img-fluid rounded-circle"
            />
          </Card>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
          <Card className="shadow-lg w-100 mb-3" bg="light">
            <Card.Body className="text-center">
              <Button variant="primary" className="my-2 w-75" onClick={() => handleAction('install')}>Install</Button>
              <Button variant="danger" className="my-2 w-75" onClick={() => handleAction('uninstall')}>Uninstall</Button>
              <Button variant="warning" className="my-2 w-75" onClick={() => handleAction('reinstall')}>Reinstall</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h5 className="text-primary">{productInfo.productName}</h5>
              <ul>
                <li>Item Type: {productInfo.itemType}</li>
                <li>Class Type: {productInfo.classType}</li>
                <li>Author: {productInfo.author}</li>
                <li>Size: {productInfo.size}</li>
                <li>Version: {productInfo.version}</li>
                <li>Dependency: {productInfo.dependency}</li>
                <li><a href={productInfo.infoLink} target="_blank" rel="noopener noreferrer">View Details</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Progress Bar Section */}
      <Row>
        <Col>
          <Card className="shadow-lg">
            <Card.Body>
              <h6>Action Progress</h6>
              <ProgressBar now={progress} label={`${progress}%`} animated />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Actions Section */}
      <Row className="my-4">
        <Col className="d-flex justify-content-around">
          <Card className="shadow-lg w-100">
            <Card.Body className="text-center">
              <Button variant="success" className="w-45 mb-2">Premium Add-on <FaArrowRight /></Button>
              <Button variant="secondary" className="w-45 mb-2">Refresh List <FaArrowLeft /></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Product Info Table Section */}
      <Row>
        <Col>
          <Card className="shadow-lg">
            <Card.Body>
              <h6>Product Info Table</h6>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Product Type</th>
                    <th>Product Name</th>
                    <th>Creator</th>
                    <th>Category</th>
                    <th>Version</th>
                    <th>Last Update</th>
                    <th>Last Installed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{productInfo.itemId}</td>
                    <td>{productInfo.productType}</td>
                    <td>{productInfo.productName}</td>
                    <td>{productInfo.creator}</td>
                    <td>{productInfo.category}</td>
                    <td>{productInfo.version}</td>
                    <td>{productInfo.lastUpdate}</td>
                    <td>{productInfo.lastInstalled}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => {
  const productInfo = {
    itemId: '15',
    productType: 'Coach',
    productName: 'ICF PREMIUM PACK (Reworks)',
    creator: 'Ganesh Bansode',
    category: 'Premium',
    version: 'v3.6',
    lastUpdate: '19/10/24 22:01',
    lastInstalled: '23/10/24 23:45',
    itemType: 'Wagon',
    classType: 'Coaches',
    size: '2.77/GB',
    dependency: 'N/A',
    author: 'Ganesh Bansode',
    infoLink: 'https://example.com',
  };

  return (
    <div className="App">
      <ProductDetails productInfo={productInfo} />
    </div>
  );
};

export default App;
