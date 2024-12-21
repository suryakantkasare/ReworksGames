import React, { useState } from "react";
import { db } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore";
import { Button, Spinner, Form, Row, Col, Card, Alert, InputGroup } from 'react-bootstrap';

const AddNewProduct = () => {
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [linkId, setLinkId] = useState(""); // link_id field
  const [creator, setCreator] = useState(""); // creator field
  const [size, setSize] = useState(""); // size field
  const [version, setVersion] = useState(""); // version field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleGalleryImageChange = (index, value) => {
    const updatedGalleryImages = [...galleryImages];
    updatedGalleryImages[index] = value;
    setGalleryImages(updatedGalleryImages);
  };

  const handleAddGalleryImage = () => {
    setGalleryImages([...galleryImages, ""]);
  };

  const handleRemoveGalleryImage = (index) => {
    const updatedGalleryImages = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updatedGalleryImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); 

    // Validation checks
    if (!name || !price || !coverImage || !category || !description || !linkId || !creator || !size || !version) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (parseFloat(price) <= 0 || parseFloat(discountPrice) < 0) {
      setError("Price and Discount Price must be positive numbers.");
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        price: parseFloat(price),
        discountPrice: parseFloat(discountPrice),
        description,
        coverImage,
        galleryImages,
        category,
        tags: tags.split(",").map((tag) => tag.trim()),
        createdAt: new Date(),
        schedule: "2024-12-20", 
        rating: 5,
        reviews: [],
        link_id: linkId,  // include link_id
        creator,           // include creator
        size,              // include size
        version,           // include version
      });

      alert("Product added successfully!");
      setIsSubmitting(false);
      setname("");
      setPrice("");
      setDiscountPrice("");
      setDescription("");
      setCoverImage("");
      setGalleryImages([]);
      setCategory("");
      setTags("");
      setLinkId(""); // reset link_id
      setCreator(""); // reset creator
      setSize("");    // reset size
      setVersion(""); // reset version
    } catch (error) {
      setError("Error adding product: " + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-sm rounded">
        <Card.Header className="bg-primary text-white text-center">
          <h4>Add New Product</h4>
        </Card.Header>
      
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                placeholder="Enter product name"
                isInvalid={name === ""}
              />
              <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                      min="0.01"
                      step="0.01"
                      placeholder="Enter price"
                      isInvalid={parseFloat(price) <= 0}
                    />
                    <Form.Control.Feedback type="invalid">Price must be greater than zero</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Discount Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      value={discountPrice}
                      onChange={(e) => setDiscountPrice(e.target.value)}
                      min="0.00"
                      step="0.01"
                      placeholder="Enter discount price"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
                placeholder="Enter product description"
                isInvalid={description === ""}
              />
              <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                placeholder="Enter category"
                isInvalid={category === ""}
              />
              <Form.Control.Feedback type="invalid">Category is required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tags (comma separated)</Form.Label>
              <Form.Control
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. wireless, bluetooth, headphones"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cover Image URL</Form.Label>
              <Form.Control
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                required
                placeholder="Enter URL for cover image"
                isInvalid={coverImage === ""}
              />
              <Form.Control.Feedback type="invalid">Cover Image is required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gallery Image URLs</Form.Label>
              {galleryImages.map((image, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <Form.Control
                    type="text"
                    value={image}
                    onChange={(e) => handleGalleryImageChange(index, e.target.value)}
                    placeholder="Enter image URL"
                    className="me-2"
                  />
                  {index > 0 && (
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveGalleryImage(index)}
                      className="btn-sm"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="secondary" onClick={handleAddGalleryImage} className="mt-2">
                Add Another Image
              </Button>
            </Form.Group>

            {/* Link ID field */}
            <Form.Group className="mb-3">
              <Form.Label>Link ID</Form.Label>
              <Form.Control
                type="text"
                value={linkId}
                onChange={(e) => setLinkId(e.target.value)}
                required
                placeholder="Enter Link ID"
                isInvalid={linkId === ""}
              />
              <Form.Control.Feedback type="invalid">Link ID is required</Form.Control.Feedback>
            </Form.Group>

            {/* Creator field */}
            <Form.Group className="mb-3">
              <Form.Label>Creator</Form.Label>
              <Form.Control
                type="text"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                required
                placeholder="Enter Creator"
                isInvalid={creator === ""}
              />
              <Form.Control.Feedback type="invalid">Creator is required</Form.Control.Feedback>
            </Form.Group>

            {/* Size field */}
            <Form.Group className="mb-3">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
                placeholder="Enter Size"
                isInvalid={size === ""}
              />
              <Form.Control.Feedback type="invalid">Size is required</Form.Control.Feedback>
            </Form.Group>

            {/* Version field */}
            <Form.Group className="mb-3">
              <Form.Label>Version</Form.Label>
              <Form.Control
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                required
                placeholder="Enter Version"
                isInvalid={version === ""}
              />
              <Form.Control.Feedback type="invalid">Version is required</Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-center mt-4">
              <Button type="submit" variant="primary" disabled={isSubmitting} size="lg">
                {isSubmitting ? (
                  <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  "Add Product"
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddNewProduct;
